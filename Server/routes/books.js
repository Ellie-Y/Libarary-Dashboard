const express = require("express");
const router = express.Router();

const db = require("../data");
const ret = require("../lib/return");

router.get("/", function(req, res) {
    if (req.query.allEntities == "true") {
        db.Book.findAll({ include: [db.Author] }).then(function(books) {
            ret.json(books, res);
        });
    } else {
        db.Book.findAll().then(function(books) {
            ret.json(books, res);
        });
    }
});

// For implementing pagination function
router.get("/findByPage/:page", function(req, res) {
    let page = parseInt(req.params.page) || 1;
    let size = 8;
    if (req.query.allEntities == "true") {
        db.Book.findAndCountAll({ 
          include: [db.Author],
          offset: (page - 1) * size,
          limit: size,
          distinct: true  //'include' will not be counted
        }).then(function(books) {
          ret.json({
              data: books.rows,
              total: books.count
          }, res);
        });
    } else {
        db.Book.findAndCountAll({ 
          offset: (page - 1) * size,
          limit: size
        }).then(function(books) {
            ret.json({
                data: books.rows,
                total: books.count
            }, res);
        });
    }
});
    
router.get("/:bookID", function(req, res) {
    if (req.query.allEntities == "true") {
        db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
            if (book) {
                ret.json(book, res);
            } else {
                res.end();
            }
        });
    } else {
        db.Book.findByPk(req.params.bookID).then(function(book) {
            if (book) {
                ret.json(book, res);
            } else {
                res.end();
            }
        });
    }
});

router.post("/", function(req, res) {
    db.Book.create({ title: req.body.title, isbn: req.body.isbn }).then(function(book) {
        ret.json(book, res);
    });
});

router.post("/:bookID/authors", function(req, res) {
    db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
        if (book) {
            db.Author.findOrCreate({ where: { name: req.body.name } }).spread(function(
                author,
                created
            ) {
                book.addAuthor(author);
                book.reload().then(function(book) {
                    ret.json(book, res);
                });
            });
        } else {
            res.end();
        }
    });
});

router.post("/:bookID/authors/:authorID", function(req, res) {
    db.Book.findByPk(req.params.bookID, { include: [db.Author] }).then(function(book) {
        if (book) {
            db.Author.findByPk(req.params.authorID).then(function(author) {
                if (author) {
                    book.addAuthor(author);
                    book.reload().then(function(book) {
                        ret.json(book, res);
                    });
                }
            });
        } else {
            res.end();
        }
    });
});

router.put("/:bookID", function(req, res) {
    db.Book.findByPk(req.params.bookID).then(function(book) {
        if (book) {
            book.title = req.body.title;
            book.isbn = req.body.isbn;
            book.save().then(function(book) {
                ret.json(book, res);
            });
        } else {
            res.end();
        }
    });
});

router.put("/loanUpdate/:bookID", function(req, res) {
    db.Book.findByPk(req.params.bookID).then(function(book) {
        if (book) {
            book.loaned = 1;
            book.save().then(function(book) {
                ret.json(book, res);
            });
        } else {
            res.end();
        }
    });
});

router.delete("/:bookID", function(req, res) {
    db.Book.findByPk(req.params.bookID)
    .then(function(book) {
        if (book) {
            return book.destroy();
        } else {
            res.end();
        }
    })
    .then(function() {
        res.end();
    });
});

module.exports = router;
