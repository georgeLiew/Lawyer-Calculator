<template>
  <div class="hello">
    <p>{{newMessage}}</p>
    <input type="text" v-model="newMessage"/>
    <p>{{newMessage2}}</p>
    <input type="text" v-model="newMessage2"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      newMessage: "test",
      newMessage2: "test2",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
