<template>
<div class="form-element">
    <div v-if="form.visible">
        <label>{{labelName}}</label> <span>{{form.error}}</span><br />
        <input type="number" placeholder="" :value="modelValue" @blur="onBlurNumber" @input="onInput" />
    </div>
    <div v-if="form.visible===false">
        <label>{{labelName}}</label> <span>{{form.error}}</span><br />
        <input type="text" placeholder="" v-model="form.amountText" @focus="onFocusText" />
    </div>
</div>
</template>

<script>
export default {
    name: 'InputNumber',
    props: {
        labelName: {
            type: String,
            default: "",
        },
        modelValue: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            form: {
                error: "",
                visible: false,
                amountText: this.thousandSeprator(this.modelValue)
            }
        }
    },
    methods: {
        onBlurNumber() {
            this.form.visible = false;
            this.form.amountText = this.thousandSeprator(this.modelValue);
        },
        onFocusText() {
            this.form.visible = true;
        },
        thousandSeprator(amount) {
            if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) {
                return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return amount;
            }
        },
        onInput(event) {
            // if(this.form.amount>1000){
            //     this.form.error = "form update";
            // }else{
            //     this.form.error ="";
            // }         
            this.$emit("update:modelValue", event.target.value);
            this.$emit("updateValue", event.target.value);
        }
    },
    watch: {
        modelValue: {
            handler(value) {
                this.form.amountText = this.thousandSeprator(value);
                if (value) {
                    this.error = '';
                }
            },
        },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.form-element {
    display: inline-block;
    width: 100%;
    font-size: 1.5rem;
    padding-bottom: 1rem;

    label {
        width: 30%;
        padding: 0.5rem;
    }

    input {
        width: 70%;
        margin: 0.5rem;
        line-height: 3rem;
        height: 3rem;
        font-size: 2rem;
    }
}
</style>
