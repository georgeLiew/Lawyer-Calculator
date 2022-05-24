<template>
<div class="from_box">
    <h1>Legal Fee Calculate</h1>
    <div class="form-group">
        <inputNumber labelName="Purchase Price" v-model:modelValue="buyerCalc.purchasePrice" @updateValue="onPurchasePriceChange"></inputNumber>
        <inputNumber labelName="Actual Price" v-model="prop.price" @updateValue="onPropertyPriceChange"></inputNumber>
        <inputNumber labelName="Loan Amount" v-model="buyerCalc.loanAmount"></inputNumber>
        <inputNumber labelName="Paid Deposit" v-model="buyerCalc.depositPaid" @updateValue="onPaidDepositChange"></inputNumber>
        <inputNumber labelName="Deposit Balance" v-model="buyerCalc.depositBalance"></inputNumber>
        <inputNumber labelName="Lega Fee" v-model="buyerCalc.legal_fee"></inputNumber>
        <inputNumber labelName="Agent Commission" v-model="buyerCalc.agent_commission"></inputNumber>
        <button type="button" v-on:click="CalculateBuyerBalance">Calculate buyer balance</button>
    </div>
    <div class="result form-group">
        <customLabelNumber labelName="Purchase Price" v-model="buyerCalc.purchasePrice"></customLabelNumber>
        <customLabelNumber labelName="Actual Price" v-model="prop.price"></customLabelNumber>
        <customLabelNumber labelName="Loan Amount" v-model="buyerCalc.loanAmount"></customLabelNumber>
        <customLabelNumber labelName="Total Deposit" v-model="prop.totalDeposit"></customLabelNumber>
        <customLabelNumber labelName="Deposit Paid" v-model="buyerCalc.depositPaid"></customLabelNumber>
        <customLabelNumber labelName="Deposit Balance" v-model="buyerCalc.depositBalance"></customLabelNumber>
        <customLabelNumber labelName="Legal Fee" v-model="buyerCalc.legal_fee"></customLabelNumber>
        <customLabelNumber labelName="Agent Commission" v-model="buyerCalc.agent_commission"></customLabelNumber>
        <div v-if="buyerCalc.showBalance"> 
        <customLabelNumber labelName="Buyer Balance" v-model="buyerCalc.balance"></customLabelNumber>
        </div>
    </div>
</div>
</template>

<script>
import inputNumber from '../element/InputNumber.vue';
import customLabelNumber from '../element/CustomLabelNumber.vue';

export default {
    name: 'Form',
    data() {
        return {
            prop: {
                "price": 0,
                "totalDeposit": 0,
            },
            buyerCalc: {
                "purchasePrice": 0,
                "loanAmount": 0,
                "depositPaid": 0,
                "depositBalance": 0,
                "legal_fee": 0,
                "agent_commission": 0,
                "showBalance" : false,
                "balance": 0
            },
            sellerCalc: {
                "legal_fee": 0,
                "agent_comission": 0
            }
        };
    },
    methods: {
        onSubmit() {
            let formData = new FormData();
            for (var key in this.fromMess) {
                formData.append(key, this.fromMess[key]);
            }
        },
        onPurchasePriceChange(e) {
            this.buyerCalc.loanAmount = e * 0.9;
        },
        onPropertyPriceChange(e) {
            this.prop.totalDeposit = e * 0.1;
            this.buyerCalc.depositPaid = e * 0.01;
            this.buyerCalc.depositBalance = this.prop.totalDeposit - this.buyerCalc.depositPaid;
        },
        onPaidDepositChange(e) {
            this.buyerCalc.depositBalance = this.prop.totalDeposit - e;
        },
        CalculateBuyerBalance() {
            this.buyerCalc.showBalance =true;
            this.buyerCalc.balance = parseFloat(this.buyerCalc.loanAmount) - parseFloat(this.prop.price) + parseFloat(this.buyerCalc.depositPaid) - parseFloat(this.buyerCalc.legal_fee) - parseFloat(this.buyerCalc.agent_commission);
        }
    },
    components: {
        inputNumber,
        customLabelNumber
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.from_box {
    width: 90%;
    margin: auto;
    border: .01rem solid gray;
    display: flex;
    flex-wrap: wrap;

    .form-group {
        width: 50%;
    }
}

.form-group {
    display: block;
    ;
}

.result {
    display: block;
    margin: 0 auto;

    label {
        display: block;
    }
}
</style>
