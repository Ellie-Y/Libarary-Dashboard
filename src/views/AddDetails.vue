<template>
  <div class="wrapper-add">
    <!-- 让遮罩层下面的内容不消失 -->
    <User />
    <div class="shelter">
      <div class="form">
        <div class="inner-form">
          <div class="title">
            <p>New User</p>
          </div>
          <div class="name">
            <label for="">Name: </label>
            <input type="text" name="" value="">
          </div>
          <div class="id">
            <label for="">Barcode: </label>
            <input type="text" name="" value="">
          </div>
          <div class="type">
            <label for="">User type:</label>
            <div class="choice">
              <input type="radio" name="user-type" checked="true" value="">
              <label for="">Student</label>
              <input type="radio" name="user-type" value="">
              <label for="">Stuff</label>
            </div>
          </div>
          <div class="buttons">
            <button class="submit">Submit</button>
            <router-link :to="{name: 'user'}" tag="button" class="cancel">Cancel</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './User.vue'

export default {
  components: {
    User
  }

}
</script>

<style>


</style>