<template>

  <div class="wrapper-add">
    <div class="shelter">
      <div class="form">
        <div class="inner-form">
          <div class="title">
            <p>Update User</p>
          </div>
          <div class="name">
            <label for="">Name: </label>
            <input type="text" :value="editUser.name"
              @input="updatedData('name', $event.target.value)">
          </div>
          <div class="id">
            <label for="">Barcode: </label>
            <input type="text" :value="editUser.barcode"
              @input="updatedData('barcode', $event.target.value)">
          </div>
          <div class="type">
            <label for="">Type: </label>
            <div class="choice">
              <!-- choice for student -->
              <input type="radio" name="memberType" 
                :checked="editUser.memberType == 'Student'" value="Student"
                @change="updatedData('memberType', 'Student')">
              <label for="">Student</label>
              <!-- choice for staff -->
              <input type="radio" name="memberType" 
                :checked="editUser.memberType == 'Staff'" value="Staff"
                @change="updatedData('memberType', 'Staff')">
              <label for="">Stuff</label>
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

</template>

<script>

  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    data() {
      return {
        //record updated user information
        updatedUser: {},
      }
    },
    methods: {
      ...mapMutations(['showUpdateForm']),
      ...mapActions(['updateUserData']),
      cancel() {
        this.showUpdateForm(false);
      },
      updatedData(key, value) {
        // Store input data in a obj
        this.updatedUser[key] = value
      },
      submit() {
        // 'assign' has 3 params. merged data，old data and new data 
        // Original data will instead if there's no new input
        let newUser = Object.assign({}, this.editUser, this.updatedUser);
        if( !Number.isNaN(Number(newUser.barcode)) && newUser.barcode != '' && newUser.name != '') {
          this.updateUserData(newUser).then(data => {
            this.$alert(data);
          });
        } else {
          this.$alert(this.failedTypeAlert);
        }
      }
    },
    computed: {
      // Original data is editUser
      ...mapState(['editUser', 'succeedAlert', 'failedTypeAlert'])
    }
  }

</script>

<style>


</style>