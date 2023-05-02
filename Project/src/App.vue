<script>
import Header from "@/components/pages/Header.vue";
import Home from "@/components/pages/Home.vue";
import Footer from "@/components/pages/Footer.vue";
export default {
  components:{
    Header,
    Home,
    Footer,
},
};
</script>
<template>
  <div id="app">
    <Header/>
    <div class="container mt-3">
      <AppHeader/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>