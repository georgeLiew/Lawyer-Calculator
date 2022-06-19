<template>
  <div class="nav">
    <router-link class="item" to="/">Home</router-link>
    <router-link class="item" to="/legalfeecalc">Legal Fee Calc</router-link>
    <router-link class="item" to="/othercalc">Other Calc</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
  }
}
</script>

<style>
body{
  margin:0;
}
html, body {
    height:100%; /*both html and body*/
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#6b5339;
  min-height:100%;
}

.from_box{
  background:#6a645e;
  color:rgb(244, 224, 224);
  display: block;
}

.nav{
  padding:20px; 
  background:#131315; 
  font-size: 20px;
}

.nav .item{
  padding:10px; 
  border :black 10px;
  text-decoration: none;
  min-width:100px;
  color:#ae8465;
}

.nav .item:hover{
  background:#ae8465;
  color:#131315;
}

</style>
