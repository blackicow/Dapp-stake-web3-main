<template>
  <div class="metamask-info">
    <p v-if="myAddress" id="has-metamask">
      <i aria-hidden="true" class="fa fa-check"></i> Wallet Address: {{myAddress}}
    </p>
    <p v-else id="no-metamask">
      <i aria-hidden="true" class="fa fa-times"></i> Metamask not connected
    </p>

    <button v-if="myAddress" class="button disconnect-btn">Disconnect Wallet</button>
    <button v-else class="button connect-btn" v-on:click="clickConnect">Connect Wallet</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'hello-metamask',
  computed: mapState({
    myAddress: (state) => state.myAddress
  }),
  methods: {
    clickConnect (event) {
      console.log('registerWeb3 Action dispatched from stake-dapp.vue')
      this.$store.dispatch('registerWeb3')
    }
  }
}
</script>

<style scoped>
.metamask-info {
  text-align: center;
  margin-bottom: 50px;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color: red;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.connect-btn {
  background-color: #4caf50;
} /* Green */
.connect-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.disconnect-btn {
  background-color: #008cba;
} /* Blue */
.disconnect-btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
