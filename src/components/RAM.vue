<template lang="html">
  <div class="ramContainer">
    <ram-title-bar></ram-title-bar>
    <ram-steps-bar></ram-steps-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import RAMStepsBar from './Steps/common/RAMStepsBar'
import RAMTitleBar from './Steps/common/RAMTitleBar'

export default {
  components: {
    ramStepsBar: RAMStepsBar,
    ramTitleBar: RAMTitleBar
  }
}
</script>

<style lang="css">
  .ramContainer {
    max-width: 1000px;
    margin: auto;
  }

  @media screen and (min-width: 800px) {
    .ramContainer {
      border: #E00 solid 1px;
    }
  }
</style>
