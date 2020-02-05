<template>
  <div>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu :defaultSelectedKeys="['1']" :style="{ lineHeight: '64px' }" mode="horizontal">
        <a-menu-item key="1"><nuxt-link to="/jobs">기업목록</nuxt-link></a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: $white;
}
.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
