<template>
<div class="from_box">
    <h1>Legal Fee Calculator</h1>
    <div class="form-group">
        <inputNumber labelName="Property Purchase Price" v-model:modelValue="legalFee.purchasePrice" @updateValue="onPurchasePriceChange"></inputNumber>
    </div>
    <div class="result form-group">
        <customLabelNumber labelName="Property Purchase Price" v-model="legalFee.purchasePrice"></customLabelNumber>
        <customLabelNumber labelName="Stamp duty" v-model="legalFee.stampduty"></customLabelNumber>
        <customLabelNumber labelName="Total Legal Fees Payable" v-model="legalFee.legalFeeAmount"></customLabelNumber>
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
            legalFee: {
                "purchasePrice": 0,
                "legalFeeAmount": 0,
                "stampduty":0
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
            this.legalFee.stampduty = calcStampDuty(e);
        }        
    },
    components: {
        inputNumber,
        customLabelNumber
    }
}


function calcStampDuty(amount){
            var stampduty = 0;
            var firstLevelThreadhold = 100000;
            var secondLevelThreadhold = 500000;
            var thirdLevelThreadhold = 1000000;
        
            if(amount >0){
                if(amount < firstLevelThreadhold){
                    stampduty += amount * 0.01;
                }else if(amount < secondLevelThreadhold){
                    stampduty += firstLevelThreadhold * 0.01;
                    stampduty += (amount - firstLevelThreadhold) * 0.02;
                }else if (amount < thirdLevelThreadhold){
                    stampduty += firstLevelThreadhold * 0.01;
                    stampduty += (secondLevelThreadhold - firstLevelThreadhold) * 0.02;
                    stampduty += (amount - secondLevelThreadhold) * 0.03;
                }else{
                    stampduty += firstLevelThreadhold * 0.01;
                    stampduty += (secondLevelThreadhold - firstLevelThreadhold) * 0.02;
                    stampduty += (thirdLevelThreadhold - secondLevelThreadhold) * 0.03;
                    stampduty += (amount - thirdLevelThreadhold) * 0.04;
                }
            } 
            return stampduty;           
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
