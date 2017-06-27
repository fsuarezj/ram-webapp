<template lang="html">
  <div class="">
    {{ $t('common.languaje') }}:
    <b-form-select v-model="locale"
                  :options="langs">
    </b-form-select>
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
  computed: {
    locale: {
      get () {
        return this.$i18n.locale
      },
      set (newLocale) {
        this.$i18n.locale = newLocale
      }
    }
  }
}
</script>

<style lang="css">
</style>
