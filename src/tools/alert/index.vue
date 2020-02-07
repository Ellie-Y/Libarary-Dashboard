<template>
  <!-- alert plugin -->
  <div class="alert" v-if="over" :class="{'fade-in': showClass, 'fade-out': !showClass, success: type == 'success', fail: type=='fail'}">
    <p class="success" v-if="type == 'succeed'">{{msg}}</p>
    <p class="fail" v-if="type == 'failed'">{{msg}}</p>
  </div>

</template>

<script>

  export default {}

</script>

<style>

  .alert {
    display: flex;
    align-items: center;
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    z-index: 10;
  }
  .alert p {
    padding: 0 20px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 10px;
  }
  .success {
    text-align: center;
    background-color: rgba(167, 169, 217);
    color: #ffffff;
  }

  .fail {
    width: 400px;
    background: #ffe7e7;
    color: rgb(224, 101, 105);
  }
  .fade-in {
    animation: fadeIn 0.3s;
  }

  .fade-out {
    animation: fadeOut 0.3s;
  }

  @keyframes fadeIn {
    0% {
      top: 0;
      opacity: 0;
    }
    100% {
      top: 40px;
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    100% {
      top: 0;
      opacity: 0;
    }
    0% {
      top: 40px;
      opacity: 1;
    }
  }

</style>