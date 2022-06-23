<template>
  <td>
    <div class="form-element">
        <div v-if="form.visible">
            <input type="number" placeholder="" :value="modelValue" @blur="onBlurNumber" @input="onInput" />
        </div>
        <div v-if="form.visible===false">
            <input type="text" placeholder="" v-model="form.amountText" @focus="onFocusText" />
        </div>
    </div>
  </td>
</template>

<script>
export default {
  name: 'TableColumnText',
  props: {
    modelValue: String
  },
  data() {
        return {
            form: {
                error: "",
                visible: false,
                amountText: this.thousandSeperator(this.modelValue)
            }
        }
    },
    methods: {
        onBlurNumber() {
            this.form.visible = false;
            this.form.amountText = this.thousandSeperator(this.modelValue);
        },
        onFocusText() {
            this.form.visible = true;
        },
        thousandSeperator(amount) {
            if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) {
                return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return amount;
            }
        },
        onInput(event) {      
            this.$emit("update:modelValue", event.target.value);
            this.$emit("updateValue", event.target.value);
        }
    },
    watch: {
        modelValue: {
            handler(value) {
                this.form.amountText = this.thousandSeperator(value);
                if (value) {
                    this.error = '';
                }
            },
        },
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
