<template>
  <div>
    <a-layout>
      <a-layout-content class="layout-content">
        <main class="main">
          <nuxt />
        </main>
      </a-layout-content>
      <Footer />
    </a-layout>
  </div>
</template>

<script>
import Footer from '~/components/base/Footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  padding: 0 50px;
}
.main {
  min-height: 280px;
}
</style>
