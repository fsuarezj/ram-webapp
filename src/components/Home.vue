<template>
  <div class="home">
    <b-jumbotron class="jumbotron-home" :header="$t('common.ramName')"
      :lead="$t('common.intro')">
      <lang-changer class="corner-lang-changer"></lang-changer>
      <p />
      <router-link to="/ram" tag="b-button" active-class="active" exact>{{ $t("common.start") }}</router-link>
    </b-jumbotron>
  </div>
</template>

<script>
import LangChanger from './common/LangChanger.vue'

export default {
  name: 'home',
  components: {
    'lang-changer': LangChanger
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home {
  text-align: center;
  max-width: 1000px;
  margin: auto;
}

@media screen and (min-width: 800px) {
  .home {
    border: #E00 solid 1px;
  }
}

.jumbotron.jumbotron-home {
  max-width: 1000px;
  margin: auto;
}

.corner-lang-changer {
}
</style>
