<template>
  <nav :class="['navbar', { hidden: isHidden }]">
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
  data() {
    return {
      isHidden: false,
      lastScrollTop: 0
    };
  },
  methods: {
    navigateTo(page) {
      this.$router.push(page);
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        // 向下滚动，隐藏导航栏
        this.isHidden = true;
      } else {
        // 向上滚动，显示导航栏
        this.isHidden = false;
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免负值
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.navbar {
  background-color: red;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s ease;
  z-index: 1000;
}
.navbar.hidden {
  top: -60px; /* 隐藏导航栏，调整这个值以适应你的导航栏高度 */
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
