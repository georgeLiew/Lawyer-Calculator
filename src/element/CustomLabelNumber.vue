<template>
<div class="form-element">
    <label>{{labelName}}</label><br />
    <label >RM {{this.form.amountText}}</label>
</div>
</template>

<script>
export default {
    name: 'CustomLabelNumber',
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
        thousandSeprator(amount) {
            if (amount !== '' || amount !== undefined || amount !== 0 || amount !== '0' || amount !== null) {
                return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return amount;
            }
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
