<template>
  <td>
      {{NumberValue}} 
  </td>
</template>

<script>
export default {
  name: 'TableColumnNumber',
  props: {
    NumberValue: Number
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
