<template>

  <div>

    <home :query="query"></home>

  </div>

</template>
<script>
import Home from '../components/Home'

export default {
  data () {
    return {
      query: this.$router.history.current.name
    }
  },
  components: {
    Home
  }
}
</script>

<style scoped>

</style>