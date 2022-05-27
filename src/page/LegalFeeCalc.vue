<template>
  <div class="from_box">
    <h1>Legal Fee Calculator</h1>
    <div class="form-group">
      <inputNumber
        labelName="Property Purchase Price"
        v-model:modelValue="legalFee.purchasePrice"
        @updateValue="onPurchasePriceChange"
      ></inputNumber>
    </div>
    <div class="result form-group">
      <customLabelNumber
        labelName="Property Purchase Price"
        v-model="legalFee.purchasePrice"
      ></customLabelNumber>
      <customLabelNumber
        labelName="Stamp duty"
        v-model="legalFee.stampduty"
      ></customLabelNumber>
      <customLabelNumber
        labelName="Caveat"
        v-model="legalFee.stateFee.caveat_fee"
      ></customLabelNumber>
      <customLabelNumber
        labelName="Withdrawl of Caveat"
        v-model="legalFee.stateFee.Wcaveat_fee"
      ></customLabelNumber>
      <customLabelNumber
        labelName="Registration Fee on Transfer at Land Office	"
        v-model="legalFee.stateFee.transfer_fee"
      ></customLabelNumber>
      <customLabelNumber
        labelName="Total Legal Fees Payable"
        v-model="legalFee.legalFeeAmount"
      ></customLabelNumber>
    </div>
  </div>
</template>

<script>
import inputNumber from "../element/InputNumber.vue";
import customLabelNumber from "../element/CustomLabelNumber.vue";

export default {
  name: "Form",
  data() {
    return {
      legalFee: {
        purchasePrice: 0,
        legalFeeAmount: 0,
        stampduty: 0,
        spa: 0,
        stateFee: {
          caveat_fee: 0,
          Wcaveat_fee: 0,
          transfer_fee: 0,
        },
      },
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
      this.legalFee.spa = calcSPAfee(e);
      this.legalFee.stateFee =calcStateFee('kualalumpur',e);
      console.log(this.legalFee.stateFee);
      this.legalFee.legalFeeAmount =
        this.legalFee.stampduty + this.legalFee.spa+ this.legalFee.stateFee.caveat_fee + this.legalFee.stateFee.Wcaveat_fee + this.legalFee.stateFee.transfer_fee;
    },
  },
  components: {
    inputNumber,
    customLabelNumber,
  },
};

function calcStampDuty(amount) {
  var stampduty = 0;
  var firstLevelThreadhold = 100000;
  var secondLevelThreadhold = 500000;
  var thirdLevelThreadhold = 1000000;

  if (amount > 0) {
    if (amount < firstLevelThreadhold) {
      stampduty += amount * 0.01;
    } else if (amount < secondLevelThreadhold) {
      stampduty += firstLevelThreadhold * 0.01;
      stampduty += (amount - firstLevelThreadhold) * 0.02;
    } else if (amount < thirdLevelThreadhold) {
      stampduty += firstLevelThreadhold * 0.01;
      stampduty += (secondLevelThreadhold - firstLevelThreadhold) * 0.02;
      stampduty += (amount - secondLevelThreadhold) * 0.03;
    } else {
      stampduty += firstLevelThreadhold * 0.01;
      stampduty += (secondLevelThreadhold - firstLevelThreadhold) * 0.02;
      stampduty += (thirdLevelThreadhold - secondLevelThreadhold) * 0.03;
      stampduty += (amount - thirdLevelThreadhold) * 0.04;
    }
  }
  return stampduty;
}

function calcSPAfee(purchasePrice) {
  var pcount = 0;
  if (purchasePrice <= 500000) {
    pcount = purchasePrice * 0.01;
  } else if (purchasePrice <= 1000000) {
    pcount = 5000 * 1 + (purchasePrice - parseInt(500000)) * 0.008;
  } else if (purchasePrice <= 3000000) {
    pcount = 9000 * 1 + (purchasePrice - parseInt(1000000)) * 0.007;
  } else if (purchasePrice <= 5000000) {
    pcount = 23000 * 1 + (purchasePrice - parseInt(3000000)) * 0.006;
  } else if (purchasePrice <= 7500000) {
    pcount = 35000 * 1 + (purchasePrice - parseInt(5000000)) * 0.005;
  }
  return pcount;
}

function calcStateFee(chosenState,purchasePrice) {
  var stateFee={
          caveat_fee: 0,
          Wcaveat_fee: 0,
          transfer_fee: 0,
        };
  switch (chosenState) {
    case "kualalumpur":
      stateFee.caveat_fee = 300;
      stateFee.Wcaveat_fee = 50;
      stateFee.transfer_fee = 100;
      break;
    case "selangor":
      stateFee.caveat_fee = 320;
      stateFee.Wcaveat_fee = 60;
      stateFee.transfer_fee = selangorTransferFee(purchasePrice);
      break;
    case "pulau":
      stateFee.caveat_fee = 300;
      stateFee.Wcaveat_fee = 300;
      stateFee.transfer_fee = pulaoTransferFee(purchasePrice);
      break;
    case "perak":
      stateFee.caveat_fee = 150;
      stateFee.Wcaveat_fee = 200;
      stateFee.transfer_fee = perakTransferFee(purchasePrice);
      break;
    case "terengganu":
      stateFee.caveat_fee = 60;
      stateFee.Wcaveat_fee = 20;
      stateFee.transfer_fee = 50;
      break;
    case "pahang":
      stateFee.caveat_fee = 50;
      stateFee.Wcaveat_fee = 20;
      stateFee.transfer_fee = pahangTransferFee(purchasePrice);
      break;
    case "johor":
      stateFee.caveat_fee = 150;
      stateFee.Wcaveat_fee = 60;
      stateFee.transfer_fee = johorTransferFee(purchasePrice);
      break;
    case "kedah":
      stateFee.caveat_fee = 200;
      stateFee.Wcaveat_fee = 200;
      stateFee.transfer_fee = kedahTransferFee(purchasePrice);
      break;
    case "kelantan":
      stateFee.caveat_fee = 200;
      stateFee.Wcaveat_fee = 120;
      stateFee.transfer_fee = kelantanTransferFee(purchasePrice);
      break;
    case "perlis":
      stateFee.caveat_fee = 100;
      stateFee.Wcaveat_fee = 50;
      stateFee.transfer_fee = 50; // flat fee
      break;

    case "melaka":
      stateFee.caveat_fee = 200;
      stateFee.Wcaveat_fee = 200;
      if (purchasePrice <= 100000)
        // flat fee
        stateFee.transfer_fee = 100;
      else stateFee.transfer_fee = purchasePrice * 0.001;
      break;
  }
  return stateFee;
}

function selangorTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 50000) transfer_fee = 50;
  else if (purchasePrice >= 50001 && purchasePrice <= 200000)
    transfer_fee = 200;
  else if (purchasePrice > 200000 && purchasePrice <= 500000)
    transfer_fee = 400;
  else if (purchasePrice > 500000 && purchasePrice <= 1000000)
    transfer_fee = 500;
  else if (purchasePrice > 1000000) transfer_fee = 1500;
  return transfer_fee;
}

function pulaoTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 25000) transfer_fee = 50;
  else if (purchasePrice >= 25001 && purchasePrice <= 50000) transfer_fee = 75;
  else if (purchasePrice >= 50001 && purchasePrice <= 100000)
    transfer_fee = 125;
  else if (purchasePrice >= 100001 && purchasePrice <= 200000)
    transfer_fee = 250;
  else if (purchasePrice >= 200001 && purchasePrice <= 300000)
    transfer_fee = 375;
  else if (purchasePrice >= 300001 && purchasePrice <= 400000)
    transfer_fee = 550;
  else if (purchasePrice >= 400001 && purchasePrice <= 500000)
    transfer_fee = 1000;
  else if (purchasePrice >= 500001 && purchasePrice <= 600000)
    transfer_fee = 1250;
  else if (purchasePrice >= 600001 && purchasePrice <= 700000)
    transfer_fee = 1500;
  else if (purchasePrice >= 700001 && purchasePrice <= 800000)
    transfer_fee = 1750;
  else if (purchasePrice >= 800001 && purchasePrice <= 900000)
    transfer_fee = 2000;
  else if (purchasePrice >= 900001 && purchasePrice <= 1000000)
    transfer_fee = 2250;
  else if (purchasePrice > 1000000)
    transfer_fee = (purchasePrice - 1000000) * 0.005 + 2250 * 1;

  return transfer_fee;
}

function perakTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 30000) transfer_fee = 50;
  else if (purchasePrice >= 30001 && purchasePrice <= 50000) transfer_fee = 80;
  else if (purchasePrice >= 50001 && purchasePrice <= 100000)
    transfer_fee = 150;
  else if (purchasePrice >= 100001 && purchasePrice <= 150000)
    transfer_fee = 250;
  else if (purchasePrice >= 150001 && purchasePrice <= 200000)
    transfer_fee = 300;
  else if (purchasePrice >= 200001 && purchasePrice <= 250000)
    transfer_fee = 350;
  else if (purchasePrice >= 250001 && purchasePrice <= 300000)
    transfer_fee = 400;
  else if (purchasePrice >= 300001 && purchasePrice <= 500000)
    transfer_fee = purchasePrice * 0.0015;
  else if (purchasePrice > 500000) transfer_fee = purchasePrice * 0.002;

  return transfer_fee;
}

function pahangTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 25000) transfer_fee = 25;
  else if (purchasePrice >= 25001 && purchasePrice <= 50000) transfer_fee = 50;
  else if (purchasePrice >= 50001 && purchasePrice <= 100000)
    transfer_fee = 100;
  else if (purchasePrice >= 100001 && purchasePrice <= 250000)
    transfer_fee = 400;
  else if (purchasePrice >= 250001 && purchasePrice <= 500000)
    transfer_fee = 800;
  else if (purchasePrice > 500000) {
    purchasePrice = purchasePrice - 500000;

    transfer_fee = Math.floor(purchasePrice / 50000) * 100 + 1200 * 1;
  }

  return transfer_fee;
}

function johorTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 25000) transfer_fee = 50;
  else if (purchasePrice >= 25001 && purchasePrice <= 50000) transfer_fee = 80;
  else if (purchasePrice >= 50001 && purchasePrice <= 100000)
    transfer_fee = 150;
  else if (purchasePrice >= 100001 && purchasePrice <= 200000)
    transfer_fee = 300;
  else if (purchasePrice >= 200001 && purchasePrice <= 300000)
    transfer_fee = 600;
  else if (purchasePrice >= 300001 && purchasePrice <= 400000)
    transfer_fee = 1500;
  else if (purchasePrice >= 400001 && purchasePrice <= 500000)
    transfer_fee = 2000;
  else if (purchasePrice > 500000) {
    purchasePrice = purchasePrice - 500000;

    transfer_fee = Math.floor(purchasePrice / 50000) * 500 + 2000 * 1;
  }

  return transfer_fee;
}

function kedahTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 50000) transfer_fee = 100;
  else if (purchasePrice >= 50001 && purchasePrice <= 150000)
    transfer_fee = 300;
  else if (purchasePrice >= 150001 && purchasePrice <= 300000)
    transfer_fee = 500;
  else if (purchasePrice >= 300001 && purchasePrice <= 500000)
    transfer_fee = 800;
  else if (purchasePrice >= 500001 && purchasePrice <= 750000)
    transfer_fee = 1500;
  else if (purchasePrice >= 750001 && purchasePrice <= 1000000)
    transfer_fee = 3000;
  else if (purchasePrice > 1000000) {
    purchasePrice = purchasePrice - 1000000;

    transfer_fee = purchasePrice * 0.005;
  }

  return transfer_fee;
}

function kelantanTransferFee(purchasePrice) {
  var transfer_fee;
  if (purchasePrice > 0 && purchasePrice <= 10000) transfer_fee = 50;
  else if (purchasePrice >= 10001 && purchasePrice <= 50000) transfer_fee = 120;
  else if (purchasePrice >= 50001 && purchasePrice <= 100000)
    transfer_fee = 140;
  else if (purchasePrice >= 100001 && purchasePrice <= 200000)
    transfer_fee = 160;
  else if (purchasePrice >= 200001 && purchasePrice <= 300000)
    transfer_fee = 260;
  else if (purchasePrice >= 300001 && purchasePrice <= 400000)
    transfer_fee = 360;
  else if (purchasePrice >= 400001 && purchasePrice <= 500000)
    transfer_fee = 460;
  else if (purchasePrice >= 500001 && purchasePrice <= 600000)
    transfer_fee = 560;
  else if (purchasePrice >= 600001 && purchasePrice <= 700000)
    transfer_fee = 660;
  else if (purchasePrice >= 700001 && purchasePrice <= 800000)
    transfer_fee = 760;
  else if (purchasePrice >= 800001 && purchasePrice <= 900000)
    transfer_fee = 860;
  else if (purchasePrice >= 900001 && purchasePrice <= 1000000)
    transfer_fee = 1060;
  else if (purchasePrice > 1000000) {
    purchasePrice = purchasePrice - 1000000;

    transfer_fee = purchasePrice * 0.0025 + 1060 * 1;
  }

  return transfer_fee;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.from_box {
  width: 90%;
  margin: auto;
  border: 0.01rem solid gray;
  display: flex;
  flex-wrap: wrap;

  .form-group {
    width: 50%;
  }
}

.form-group {
  display: block;
}

.result {
  display: block;
  margin: 0 auto;

  label {
    display: block;
  }
}
</style>
