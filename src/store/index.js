import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showForm: false,
    addForm: false,
    loanForm: false,
    userData: [],
    bookData: [],
    loanData: [],
    editUser: {},
    editBook: {},
    loanBook: {},
    allUserData: [],
    allBookData: [],
    page: {
      totalCount: 0,
      totalPage: 1,
      curPage: 1,
    },
    succeedAlert: {
      type: 'succeed',
      msg: 'Succeed'
    },
    failedTypeAlert: {
      type: 'failed',
      msg: 'No Blank. Barcode or ISBN needs to be a Number'
    },
  },
  mutations: {
    // To show update form or not 
    showUpdateForm(state, status) {
      state.showForm = status;
    },
    showAddForm(state, status) {
      state.addForm = status;
    },
    // First page user data
    setUserData(state, data) {
      state.userData = data;
    },
    setAllUserData(state, data) {
      state.allUserData = data;
    },
    // Store paticular user data when needs to be updated
    setEditUser(state, user) {
      state.editUser = user;
    },
    setBookData(state, book) {
      state.bookData = book;
    },
    setAllBookData(state, data) {
      state.allBookData = data;
    },
    // Store paticular book data when needs to be updated
    setEditBook(state, book) {
      state.editBook = book;
    },
    // All information of loan
    setLoanData(state, loan) {
      state.loanData = loan;
    },
    setCount(state, count) {
      state.page.totalCount = count;
      // Rounds a number up. A page renders maxmium eight users or books
      state.page.totalPage = Math.ceil(count / 8);
    },
    setCurPage(state, page) {
      state.page.curPage = page;
    },
    showLoanForm(state, bool) {
      state.loanForm = bool;
    },
    setLoanBook(state, loan) {
      state.loanBook = loan;
    }
  },
  actions: {
    updateUserData({commit, state}, newUser) {
      // Return as promise 
      // Using 'then' in updateUser component to get success alert
      return new Promise((res, rej) => {
        api.put('/users/' + state.editUser.id + '', newUser, data => {
          if (data.status == 200) {
            // Real-time update
            // Modify state data and server data together to reduce times of send requests by refresh page
            Object.assign(state.editUser, newUser);
            commit('showUpdateForm', false);
            res(state.succeedAlert);
          } else {
            rej({
              type: 'failed',
              msg: 'Update Failed'
            });
          }
        });
      });
    },
    updateBookData({commit, state}, newBook) {
      return new Promise((res, rej) => {
        api.put('/books/'+newBook.id+'', newBook, data => {
          if (data.status == 200) {
            // Modify together for reducing times of send requests by refresh page
            Object.assign(state.editBook, newBook);
            commit('showUpdateForm', false);
            res(state.succeedAlert);
          } else {
            rej({
              type: 'failed',
              msg: 'Update Failed'
            });
          }
        });
      });
    },
    getUserList({commit, state}, page) {
      // Page param passed to change page as param, 
      if(page) {
        commit('setCurPage', page);
      } 
      // If no page param passed, then refresh current page
      api.get('/users/findByPage/'+state.page.curPage+'', null, data => {
        commit('setUserData', data.data.data);
        commit('setCount', data.data.total);
      })
    },
    getBookList({commit, state}, page) {
      if(page) {
        commit('setCurPage', page);
      }
      api.get('/books/findByPage/'+state.page.curPage+'?allEntities=true', null, data => {
        commit('setBookData', data.data.data);
        commit('setCount', data.data.total);
      })
    },
    getLoanData({commit, state}) {
      api.get('/loans', null, data => {
        commit('setLoanData', data.data);
      });
    }
  }
  
})
