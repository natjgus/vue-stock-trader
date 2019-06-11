<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <app-header />
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from "./components/Header"
  export default {
    components: {
      appHeader: Header
    },
    // We need to initialize the app data buy running our init function from the stocks module in the store
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  body{
    padding: 30px;
  }
  .slide-enter-active{
    animation: slide-in ease-out 200ms forwards;
  }
  .slide-leave-active{
    animation: slide-out ease-out 200ms forwards;
  }
  @keyframes slide-in{
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out{
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
