<template>

  <div class="wrapper-add">
    <div class="shelter">
      <div class="form">
        <div class="inner-form add">
          <div class="title">
            <p>Update Book</p>
          </div>
          <div class="add-content">
            <div class="name">
              <label for="">Title: </label>
              <input type="text"
                     :value="editBook.title"
                     @input="updatedData('title', $event.target.value)">
            </div>
            <div class="id">
              <label for="">ISBN: </label>
              <input type="text"
                     :value="editBook.isbn"
                     @input="updatedData('isbn', $event.target.value)">
            </div>
            <div class="add-author">
              <!-- Haven't have a author -->
              <template v-if="editBook.Authors.length == 0">
                <label for="">Author:</label>
                <input type="text" v-model="addAuthor.name">
              </template>
              <!-- Have got a author already -->
              <template>
                <div
                  v-for="(author, index) in editBook.Authors" :key="author.id">
                  <label for="">Author: 
                    <span v-if="index > 0">{{ index + 1 }}:</span> 
                  </label>
                  <input type="text" 
                    :value="author.name"
                    @input="updatedData('name', $event.target.value)">
                </div>
              </template>
            </div>
          </div>
          <div class="buttons">
            <button class="submit" @click="submit">Submit</button>
            <button class="cancel" @click="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        updatedBook: {},
        originAuthor: {},
        addAuthor: {
          name: ''
        }
      }
    },
    methods: {
      ...mapMutations(['showUpdateForm']),
      ...mapActions(['updateBookData', 'getBookList']),
      cancel() {
        this.showUpdateForm(false);
      },
      updatedData(key, value) {
        this.updatedBook[key] = value;
      },
      success() {
        this.$alert(this.succeedAlert);
        this.showUpdateForm(false);
      },
      newAuthor() {
        //Return a author id to connect corresponding book
        return new Promise((res, rej) => {
          this.$api.post('/authors', this.addAuthor, data => {
            if (data.status == 200) {
              res(data.data.id);
            } else {
              rej('failed to add a author');
            }
          });
        })
      },
      submit() {
        //Update book
        let newBook = Object.assign({}, this.editBook, this.updatedBook);
        let authors = this.editBook.Authors;
        if (!Number.isNaN(Number(newBook.isbn)) && newBook.title != '' && newBook.isbn != '') {
          this.updateBookData(newBook).then(data => {
            this.$alert(data);
            this.showUpdateForm(false);
          });
        } else {
          this.$alert(this.failedTypeAlert);
        }
        // Author is added here
        // To add a new author when addAUthor has a input value  
        if (this.addAuthor.name != '') {
          this.newAuthor().then((res) => {
            this.$api.post('/authors/' + res + '/books/' + this.editBook.id + '', null, data => {
              this.success();
              this.getBookList();
            });
          }, (rej) => {
            console.log(rej);
          })
        } else {
          // Update author
          this.$api.put('/authors/' + authors[0].id + '', newBook, _ => {
          this.success();
          this.getBookList();
          });
        }
      }
    },
    computed: {
      ...mapState(['editBook', 'succeedAlert', 'failedTypeAlert'])
    }
  }

</script>

<style>

  .el-icon-circle-plus-outline {
    font-size: 22px;
    margin-left: 10px;
    color: #7d7d7d;
    cursor: pointer;
  }

</style>