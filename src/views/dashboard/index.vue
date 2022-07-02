<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <Card />
    <sale />
    <Obersve />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card'
import sale from './Sale'
import Obersve from './Observe'

export default {
  name: 'Dashboard',
  components: {
    Card,
    sale,
    Obersve
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
