<template>

  <div>

    <gallery :query="query"></gallery>

  </div>

</template>
<script>
import Gallery from '../components/Gallery'

export default {
  data () {
    return {
      query: this.$router.history.current.name
    }
  },
  components: {
    Gallery
  }
}
</script>

<style scoped>

</style>