<template>
<<<<<<< HEAD
  <div class="left-nav">
    <!-- 头像部分 -->
    <div class="profile">
      <div class="profile-img">
        <img src="../assets/profile-pic.png" alt="">
      </div>
      <div class="text-area">
        <p>Welcome</p>
        <!-- 名字动态导入 -->
        <p class="name">Ellie Ye</p>
      </div>
    </div>
    <!-- 中间菜单栏 -->
    <div class="nav-menu">
      <ul>
        <li>
          <img src="../assets/icons/user-solid.svg">
          <router-link :to="{name: 'user'}" tag="p">Users</router-link>
        </li>
        <li>
          <img src="../assets/icons/book-solid.svg">
          <router-link :to="{name: 'books'}" tag="p">Books</router-link>
        </li>
        <li>
          <img src="../assets/icons/chart-bar-solid.svg">
          <router-link :to="{name: 'statistics'}" tag="p">Statistics</router-link>
        </li>
      </ul>
    </div>
    <!-- 退出系统 -->
    <div class="log-out">
      <img src="../assets/icons/sign-out-alt-solid.svg" alt="">
      <p>Log out</p>
    </div>
  </div>
=======

  <div class="menu-wrapper">
    <div class="left-nav">
      <!-- Librarian img section -->
      <div class="profile">
        <div class="profile-img">
          <img src="../assets/images/profile-pic.png" alt="">
        </div>
        <div class="text-area">
          <p>Welcome</p>
          <p class="name">Dear Librarian</p>
        </div>
      </div>
      <!-- The router section  -->
      <nav class="nav-menu">
        <ul>
          <li>
            <img src="../assets/icons/user-solid.svg">
            <router-link :to="{name: 'user'}" tag="p">Users</router-link>
          </li>
          <li>
            <img src="../assets/icons/book-solid.svg">
            <router-link :to="{name: 'book'}" tag="p">Books</router-link>
          </li>
          <li>
            <img src="../assets/icons/chart-bar-solid.svg">
            <router-link :to="{name: 'statistics'}" tag="p">Statistics</router-link>
          </li>
        </ul>
      </nav>
      <!-- System sign out  -->
      <div class="log-out">
        <img src="../assets/icons/sign-out-alt-solid.svg" alt="">
        <p>Log out</p>
      </div>
    </div>
    
    <!-- Drop down menu section -->
    <div class="drop-down-menu">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ curRouter }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="user">Users</el-dropdown-item>
          <el-dropdown-item command="book">Books</el-dropdown-item>
          <el-dropdown-item command="data">Statistics</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

>>>>>>> final
</template>

<script>

  export default {
<<<<<<< HEAD
    
=======
    created() {
      //initialize loan data and user data to display user and book 
      this.$store.dispatch('getLoanData');
      this.$store.dispatch('getUserList');
      
    },
    computed: {
      curRouter() {
        return this.$route.path.slice(1).toUpperCase();
      }
    },
    methods: {
      routerChange(router) {
        if(this.$route.path != router) {
          this.$router.push({ path: router });
        } else {
          return;
        }
      },
      handleCommand(val) {
        switch (val) {
          case 'user':
            this.routerChange('/user');
            break;
          case 'book':
            this.routerChange('/book');
            break;
          case 'data':
            this.routerChange('/statistics');
            break;
        }
      }
    }
>>>>>>> final
  }

</script>

<<<<<<< HEAD
<style>
=======
<style scoped lang="less">
  .drop-down-menu {
    width: 146px;
    height: 30px;
    margin: 23px -40px 0 30px;
    .el-dropdown-menu__item {
      font-size: 16px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #5b5bc3;
      font-size: 20px;
      font-weight: 500;
    }
    .el-icon-arrow-down {
      font-size: 20px;
      font-weight: bold;
    }
  }
  
  
>>>>>>> final

</style>