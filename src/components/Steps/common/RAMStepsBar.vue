<template lang="html">
  <div class="steps-bar">
    <div class="step-item">
      {{  $t('common.step') }} 1
    </div>
    <div class="step-item">
      {{  $t('common.step') }} 2
    </div>
    <div class="step-item">
      {{  $t('common.step') }} 3
    </div>
    <div class="step-item">
      {{  $t('common.step') }} 4
    </div>
    <div class="step-item">
      {{  $t('common.step') }} 5
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .steps-bar {
      padding: 0px 5px 5px 0px;
  }

  .step-item {
    display: inline-block;
    width: 18%;
    max-width: 150px;
    background-color: #D00;
    color: white;
    font-variant: small-caps;
  }
</style>
