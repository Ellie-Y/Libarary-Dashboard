<template>

  <div class="sort">
    <el-radio-group v-model="radio" @change="buttonChange">
      <el-radio-button label="1">All</el-radio-button>
      <el-radio-button label="2">Loaned</el-radio-button>
    </el-radio-group>
  </div>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        radio: 1,
        loanList: [],
      }
    },
    computed: {
      ...mapState(['allBookData']),
    },
    methods: {
      ...mapMutations(['setBookData', 'setCount']),
      ...mapActions(['getBookList']),
      buttonChange(val) {
        switch (val) {
          case '1':
            this.getBookList(1);
            break;
          case '2':
            // a 'loaned' attribute has been added to the book.js in server
            this.loanList = this.allBookData.filter( book => {
              return book.loaned === 1;
            });
            this.setBookData(this.loanList);
            this.setCount(this.loanList.length);
            break;
        }
      }
    }
  }

</script>

<style>


</style>