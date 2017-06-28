<template>
  <div class="home">
    <lang-changer class="home-lang-changer btn btn-secondary"></lang-changer>
    <b-jumbotron class="jumbotron-home" :header="$t('common.ramName')"
      :lead="$t('common.intro')">
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

.home-lang-changer {
  margin-top: 5px;
  margin-right: 5px;
  font-size: 13px;
  padding: 2px;
}

@media screen and (min-width: 1000px) {
  .home {
    border: #E00 solid 1px;
  }
}

.jumbotron.jumbotron-home {
  max-width: 1000px;
  margin: auto;
}
</style>
