<template>
  <div class="login">
    {{ msg }}
    <p>Child counter: {{ childCounter }}</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'This is from login.vue'
    }
  },
  computed: {
    childCounter () {
      return this.$store.getters.getCounter
    }
  }
}
</script>

<style lang="less">
  .hello {
    margin-top: 30px;
  }
</style>
