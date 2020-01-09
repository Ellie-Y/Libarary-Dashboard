<template>
  <!-- Add button Component -->
    
  <div class="add-user" @click="show">
    <img src="../../assets/icons/plus-solid.svg">
  </div>

</template>

<script>
  import { mapMutations } from 'vuex'
  
  export default {
    methods: {
      ...mapMutations(['showAddForm']),
      show() {
        this.showAddForm(true);
      }
    }
  }

</script>

<style>

</style>