<template>

<div class="card">
  <img src="../assets/images/coin.jpg" alt="Coin" style="width:100%">
  <p>Duration: {{duration}}</p>
  <p>Reward: {{reward}}</p>
  <p><button v-on:click="clickStack">Stake</button></p>
</div>

</template>

<script>
export default {
  name: 'stake',
  data () {
    return {
      duration: '30 mins',
      reward: '20 ETH'
    }
  },
  methods: {
    clickStack (event) {
      console.log('BETTING ON NUMBER, AMOUNT', event.target.innerHTML, this.amount)
      this.winEvent = null
      this.pending = true
      this.$store.state.contractInstance().bet(event.target.innerHTML, {
        gas: 300000,
        value: this.$store.state.web3.web3Instance().toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (err, result) => {
        if (err) {
          console.log(err)
          this.pending = false
        } else {
          let Won = this.$store.state.contractInstance().Won()
          Won.watch((err, result) => {
            if (err) {
              console.log('could not get event Won()')
            } else {
              this.winEvent = result.args
              this.winEvent._amount = parseInt(result.args._amount, 10)
              this.pending = false
            }
          })
        }
      })
    }
  },
  mounted () {
    console.log('card')
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #008CBA;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: #008CBA;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
