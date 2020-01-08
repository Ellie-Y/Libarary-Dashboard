<template>

  <div class="wrapper-add">
    <div class="shelter">
      <div class="form">
        <div class="inner-form">
          <div class="title">
            <p>New user</p>
          </div>
          <div class="name">
            <label for="">Name: </label>
            <input type="text" v-model="user.name">
          </div>
          <div class="id">
            <label for="">Barcode: </label>
            <input type="text" v-model="user.barcode">
          </div>
          <div class="type">
            <label for="">Type:</label>
            <div class="choice">
              <input type="radio" name="user-type" value="Student" v-model="user.memberType">
              <label for="">Student</label>
              <input type="radio" name="user-type" value="Staff" v-model="user.memberType">
              <label for="">Stuff</label>
            </div>
          </div>
          <div class="buttons">
            <button class="submit" @click="newUser">Submit</button>
            <button class="cancel" @click="hide">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import { mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        user: {
          name: '',
          barcode: '',
          memberType: 'Student',
        }
      }
    },
    methods: {
      ...mapMutations(['showAddForm']),
      ...mapActions(['getUserList']),
      hide() {
        this.showAddForm(false);
      },
      newUser() {
        // Barcode must be a number and input area is not empty to prevent bug
        if( !Number.isNaN(Number(this.user.barcode)) && this.user.name != '' && this.user.barcode != '') {
          this.$api.post('/users', this.user, data => {
            this.showAddForm(false);
            this.$alert(this.$store.state.succeedAlert);
            this.getUserList();
          });
        } else {
          this.$alert(this.$store.state.failedTypeAlert);
        }
      }
    },
  }

</script>

<style>


</style>