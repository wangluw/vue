<template>
  <div class="main">
    <div class="leftContent">
      <Logo></Logo>
      <Menu></Menu>
    </div>
    <div class="rightContent">
      <div class="title">
        <Header></Header>
      </div>
      <div class="content">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu'
import Logo from './logo'
import Header from './header'

export default {
  name: 'Index',
  components: {
    Menu,
    Logo,
    Header
  }
}
</script>

<style lang="less" scoped>
.main{
  display: flex;
  width: 100%;
  height: 100%;
  .leftContent {
    width: 250px;
    max-width: 250px;
    min-width: 250px;
    height: 100%;
    // box-shadow: 7px 0 12px #bbb;
  }
  .rightContent {
    width: 100%;
    height: 100px;
    height: 100%;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .title {
      width: 100%;
    }
    .content {
      width: 100%;
      padding: 20px;
      height: 100%;
      background: #f0f2f5;
    }
    .footer {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
