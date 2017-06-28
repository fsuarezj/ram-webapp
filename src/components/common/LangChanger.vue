<template lang="html">
  <div class="lang-changer">
    <b-nav-item-dropdown :text="$t('common.languaje')" right>
      <b-dropdown-item v-for="lang in langs" @click="setLocale(lang.value)">{{ lang.text }}</b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      langs: [
        {
          text: 'Español',
          value: 'es'
        },
        {
          text: 'English',
          value: 'en'
        }
      ],
      languaje: 'es'
    }
  },
  methods: {
    setLocale (newLocale) {
      this.$i18n.locale = newLocale
    }
  }
}
</script>

<style lang="css">
  .lang-changer {
    float: right;
    font-size: 12px;
    list-style-type: none;
  }
</style>
