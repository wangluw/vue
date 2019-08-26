<template>
  <div class="logo">
    <img src="@/assets/logo.jpeg" alt="">
    <span>大平台</span>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
  .logo {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .logo img{
    width: 20%;
    border-radius: 50%;
  }
  .logo span {
    margin-left: 10px;
  }
</style>
