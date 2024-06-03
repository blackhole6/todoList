<template>
  <div class="home">
    <h1>HomePage</h1>
    <div v-if="data">{{ data }}</div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(' http://192.168.1.7:8080/api/data');
        this.data = response.data.message;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
}
</script>

<style scoped>
.home {
  padding: 20px;
  background: black;
  display: flex;
  flex: 1;
  justify-content: center; 
  align-items: center;
}
</style>
