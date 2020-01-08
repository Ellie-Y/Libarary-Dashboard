<template>

  <div class="user-content">
    <div class="user-card" v-for="user in userList" :key="user.id">
      <div class="load">
        <p>Book loaded</p>
      </div>
      <div class="user-profile">
        <img src="../../assets/profile.png" alt="">
        <p class="user-name">{{ user.name }}</p>
        <p class="user-id">{{ user.barcode }}</p>
        <p class="user-type">{{ user.memberType }}</p>
      </div>
      <div class="operate-user">
        <div class="update">
          <router-link :to="{name: 'addDetails'}" tag="p">Update</router-link>
        </div>
        <div class="delete">
          <p>Delete</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data() {
      return {
        userList: [],
      }
    },
    created() {
      this.$api.getUser().then(data => {
        this.userList = data.data
        console.log(data.data)
      })
    },
  }

</script>

<style>

</style>