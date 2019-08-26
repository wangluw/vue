<template>
  <div class="menu">
    <a-menu
      mode="inline"
      @click="meunClick"
    >
      <template v-for="(item, index) in menuData">
        <template v-if="item.children && item.children.length > 0">
          <a-sub-menu :key="index">
            <span slot="title"><a-icon type="bar-chart" />{{ item.name }}</span>
            <a-menu-item :key="`${index}-${indexs}`" v-for="(items, indexs) in item.children">
              <span>{{ items.name }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="index">
            <span>{{ item.name }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { normalRouter } from '@/router/router.config'

export default {
  name: 'Menu',
  components: {
  },
  data () {
    return {
      menuData: []
    }
  },
  methods: {
    meunClick ({ item, key, keyPath }) {
      const index = key.split('-')
      if (index.length === 2) {
        this.$router.push(this.menuData[index[0]].children[index[1]].path)
      } else {
        this.$router.push(this.menuData[index[0]].path)
      }
    }
  },
  created () {
    this.menuData = normalRouter[0].children
  }
}
</script>

<style lang="less" scoped>

</style>
<style lang="less">
.menu{
  li {
    text-align: left;
  }
  .ant-menu-inline {
    border: none;
  }
}
</style>
