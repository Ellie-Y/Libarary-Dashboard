<template>
  
  <div class="inner-content">
    <div class="topArea">
      <!-- User router separates to four components as same as Book router-->
      <search />
      <sort-user />
      <add />
    </div>
    <display-user />
    <update-user v-if="showForm"/>
    <add-user-form v-if="addForm" />
    <pagination />
  </div>

</template>

<script>

  import Search from '../components/content/Search.vue'
  import SortUser from '../components/content/SortUser.vue'
  import Add from '../components/content/Add.vue'
  import DisplayUser from '../components/content/DisplayUser.vue'
  import UpdateUser from '../components/content/form/UpdateUser.vue'
  import AddUserForm from '../components/content/form/AddUser.vue'
  import Pagination from '../components/content/Pagination.vue'
  
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: {
      Search,
      SortUser,
      Add,
      DisplayUser,
      UpdateUser,
      AddUserForm,
      Pagination,
    },
    computed: {
      ...mapState(['showForm', 'addForm', 'allUserData']),
    },
    methods: {
      ...mapMutations(['setAllUserData'])
    }
  }

</script>

<style>

</style>