<template>

  <div class="sort">
    <el-radio-group v-model="radio" @change="buttonChange">
      <el-radio-button label="1">All</el-radio-button>
      <el-radio-button label="2">Borrowing</el-radio-button>
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
        staffList: []
      }
    },
    computed: {
      ...mapState(['userData', 'loanData', 'allUserData']),
    },
    methods: {
      ...mapMutations(['setUserData', 'setCount']),
      ...mapActions(['getUserList']),
      buttonChange(val) {
        switch(val) {
          case '1': 
            this.getUserList(1);
            break;
          case '2': 
            let temUser = [];
            this.loanData.forEach(loan => {
              temUser.push(this.allUserData.find((user, index) => {
                return user.id == loan.UserId;
              }));
            });
            this.loanList = temUser;
            //remove repeat users
            let hash = {};
            this.loanList = this.loanList.reduce(function(item, next) {
              hash[next.name] ? '' : hash[next.name] = true && item.push(next);
              return item
            }, []);
            this.setUserData(this.loanList);
            // Set page
            this.setCount(this.loanList.length); 
            break;
        }
      }
    }
  }

</script>

<style>

</style>