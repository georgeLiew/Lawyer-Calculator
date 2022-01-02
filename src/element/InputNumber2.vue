<template>
<div>
    <!-- <label v-if="label" :for="id" class="font-bold block">
        {{ label }}
    </label>
    <input :id="id" :type="type" :value="modelValue" @blur="onBlurNumber" @input="updateInput" class="border w-full p-1" /> -->
    <!-- <label>{{label}}</label> <span>{{form.error}}</span>
    <input type="number" placeholder="" :value="modelValue"  @blur="onBlurNumber" @input="updateInput" />
 -->

    <div v-if="form.visible">
        <label>{{label}}</label> <span>{{form.error}}</span>
        <input type="number" placeholder="" :value="modelValue" @blur="onBlurNumber" @input="updateInput" />
    </div>
    <div v-if="form.visible===false">
        <label>{{labelName}}</label> <span>{{form.error}}</span>
        <input type="text" placeholder="" v-model="form.amountText" @focus="onFocusText" />
    </div>
</div>
</template>

<script>
export default {
    name: "InputNumber2",
    props: {
        id: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        type: {
            type: String,
            default: "text",
        }
    },
    data() {
        return {
            form: {
                error: "",
                visible: true,
                amountText: 0,
                amount: this.modelValue,
            }
        }
    },
    methods: {
        onBlurNumber() {
            this.form.visible = false;
            this.form.amountText = this.thousandSeprator(this.modelValue);
            console.log(this.form.visible);
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
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
};
</script>
