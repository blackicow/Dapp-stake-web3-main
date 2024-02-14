<template>
  <div>
 <hello-metamask/>
 <stake-component/>
</div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import StakeComponent from '@/components/stake-component'
export default {
  name: 'stake-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from stake-dapp.vue')
    this.$store.dispatch('registerWeb3')

    console.log('dispatching getContractInstance')
    this.$store.dispatch('getContractInstance')
  },
  components: {
    'hello-metamask': HelloMetamask,
    'stake-component': StakeComponent
  }
}
</script>
<style scoped>
</style>
