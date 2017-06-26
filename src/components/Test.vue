<template lang="html">
  <div class="home">
    <b-jumbotron class="home" :header="$t('common.ramName')"
      :lead="$t('common.intro')">
      Test route
      <lang-changer class="corner-lang-changer"></lang-changer>
      <b-button>{{ $t("common.start") }}</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
