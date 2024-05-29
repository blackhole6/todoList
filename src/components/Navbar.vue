<template>
  <nav class="navbar">
    <ul>
      <li>
        <a @click="navigateTo('/Home')">首页</a>
      </li>
      <li>
        <a @click="navigateTo('/About')">关于我</a>
      </li>
      <li>
        <a @click="navigateTo('/Contact')">联系</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    navigateTo(page) {
      console.log(page);
      this.$router.push(page);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: red;
  padding: 1rem;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.navbar li {
  display: inline;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a:hover {
  text-decoration: underline;
}
</style>
