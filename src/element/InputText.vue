<template>
  <div class="form-element">
              <label>{{labelName}}</label>
              <input type="text" placeholder="" v-bind="inputValue">
    </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    labelName: String,
    inputValue: String
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .form-element{
    display: flex;
      font-size: 20px;
    label{
      width: 30%;        
    }
    input{
      width: 70%;
      margin:auto;
      line-height: 3rem;
      height: 3rem;
    }
  }
</style>
