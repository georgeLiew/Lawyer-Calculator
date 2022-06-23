<template>
  <td>
      {{DisplayNumber}} 
  </td>
</template>

<script>
export default {
  name: 'TableColumnNumber',
  props: {
     NumberValue: {
            type: Number,
            default: 0,
        },
  },
  computed: {
    DisplayNumber(){
        if (this.NumberValue !== '' && this.NumberValue !== undefined && this.NumberValue !== 0 
           && this.NumberValue !== '0' && this.NumberValue !== null) {
            return this.NumberValue.toString().replace(/^0+/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return this.NumberValue;
        }
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
