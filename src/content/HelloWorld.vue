<template>
  <div class="hello">
    <span>hello</span>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  created () {
    console.log(store.getters.getA)
  }
}
</script>

<style lang="less" scoped>
  .hello {
    color: red
  }
</style>
