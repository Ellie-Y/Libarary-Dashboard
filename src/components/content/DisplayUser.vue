<template>

  <ul class="user-content">
    <!-- index_1 prevent repeat index -->
    <li class="user-card" v-for="(user, index) in userData" :key="`${index}_1`">
      <!-- By matching loan.userId and user.id to show if the user has a loan -->
      <div class="loan"
           v-for="(loan, index) in loanData"
           :key="loan.id"
           v-if="loan.UserId == user.id">
        <p>Book Borrowing</p>
      </div>
      <div class="profile">
        <img src="../../assets/images/profile.png" alt="User Image">
        <p class="name">{{ user.name }}</p>
        <p class="id">Barcode: [{{ user.barcode }}]</p>
        <p class="type">{{ user.memberType }}</p>
      </div>
      <div class="operate-card">
        <div class="update">
          <p @click="update(user)">Update</p>
        </div>
        <div class="delete">
          <p @click="deleteUser(user.id)">Remove</p>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },
    created() {
      this.getUserList(1);
    },
    computed: {
      ...mapState(['userData', 'page', 'succeedAlert', 'loanData']),
      userList() {
        return this.userData;
      }
    },
    methods: {
      ...mapMutations(['showUpdateForm', 'setEditUser', 'setUserData']),
      ...mapActions(['getUserList']),
      update(user) {
        this.showUpdateForm(true);
        this.setEditUser(user);
      },
      deleteUser(id) {
        const flag = confirm('Are you sure to delete it?');
        if (flag) {
          this.$api.delete('/users/' + id + '', null, _ => {
            // If only one data left on current page, jump to previous page after deleted
            if (this.page.curPage > Math.ceil((this.page.totalCount - 1) / 8)) {
              this.getUserList(this.page.curPage - 1);
            } else {
              this.getUserList();
            }
            this.$alert(this.succeedAlert);
          })
        }
      }
    }
  }

</script>

<style>

</style>