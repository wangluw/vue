<template>
  <div>
    <div class="userRight">
      <a-avatar icon="user" />
      <span class="userName">嘻嘻</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="less" scoped>
  .userRight{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    .userName {
      margin-left: 10px;
    }
  }
</style>
