<template lang="html">
  <div class="">
    {{ $t('common.languaje') }}:
    <b-form-select v-model="languaje"
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
  }
}
</script>

<style lang="css">
</style>
