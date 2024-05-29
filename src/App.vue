<template>
  <div id="app">
    <Navbar />
      <div class="content">
    <router-view />
      </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
   display: flex;
  flex-direction: column;
  height: 100%;
}

</style>


