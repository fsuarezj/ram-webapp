<template>
  <div class="home">
    <b-jumbotron class="home" :header="$t('common.ramName')"
      :lead="$t('common.intro')">
      <lang-changer class="corner-lang-changer"></lang-changer>
      <p />
      <b-button>{{ $t("common.start") }}</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import LangChanger from './LangChanger.vue'

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

div.home {
  text-align: center;
}

.jumbotron.home {
  max-width: 1000px;
  margin: auto;
}

.corner-lang-changer {
}
</style>
