<template lang="html">
  <b-navbar toggleable class="ram-title-bar">
    <span class="navbar-title">{{ $t('common.ramName') }}</span>
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <!-- <lang-changer class="lang-changer"></lang-changer> -->
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="ml-auto">
        <lang-changer class="lang-changer"></lang-changer>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import LangChanger from '../../common/LangChanger'

export default {
  components: {
    LangChanger
  }
}
</script>

<style lang="scss" scoped>
  .ram-title-bar {
    background-color: #F0F0F0;
    border-top: #CCC solid 3px;
    font-weight: bold;
  }

  .navbar-title {
    margin: 8px;
  }

  @media screen and (min-width: 768px) {
    .navbar-title {
      width: 500px;
    }
  }

  .lang-changer {
    float: right;
    font-size: 12px;
    margin-top: -8px;
    margin-right: -8px;
  }
</style>
