<template lang="html">
  <div class="steps-bar">
    <router-link :to="'/ram/step'+step.number" tag="div" v-for="step in steps" class="step-item" :key="'step'+step.number" :class="step.state" @click="">
      {{  $t('common.step') }} {{ step.number }}
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    steps () {
      let steps = []
      for (var i = 1; i <= 5; i++) {
        steps.push({
          number: i,
          state: (i <= this.$store.getters.currentStep ? 'enabled' : 'disabled')
        })
      }
      return steps
    }
  }
}
</script>

<style lang="scss">
  .steps-bar {
      padding: 0px 5px 5px 0px;
  }

  .step-item {
    border-radius: 0px 0px 10px 10px;
    display: inline-block;
    width: 18%;
    padding: 0.2em;
    max-width: 150px;
    color: white;
    font-variant: small-caps;
    margin-right: 5px;
    &.enabled {
      background-color: #D00;
      box-shadow: 2px 2px 2px grey;
      &:hover {
        background-color: #E66;
        box-shadow: 0px 0px 0px grey;
        margin-left: 2px;
        margin-right: 3px;
        cursor: pointer;
      }
    }
    &.disabled {
      box-shadow: 0px 0px 0px grey;
      background-color: #CCC;
    }
  }
</style>
