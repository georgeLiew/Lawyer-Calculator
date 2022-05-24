<template>
<div>
  <h1 class="brand">MySolicitor Calculator</h1>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Form/>
  <router-view></router-view>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.brand{
  font-size:6rem;
  color:#0a043b;
}
</style>
