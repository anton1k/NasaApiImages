<template>

  <div>

    <original :query="query"></original>

  </div>

</template>
<script>
import Original from '../components/Original'

export default {
  data () {
    return {
      query: this.$router.history.current.name
    }
  },
  components: {
    Original
  }
}
</script>

<style scoped>

</style>