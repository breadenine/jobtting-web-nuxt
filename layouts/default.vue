<template>
  <div>
    <a-locale-provider :locale="locale">
      <a-layout>
        <Header />
        <a-layout-content class="layout-content">
          <main class="main">
            <nuxt />
          </main>
        </a-layout-content>
        <Footer />
      </a-layout>
    </a-locale-provider>
  </div>
</template>

<script>
import koKR from 'ant-design-vue/lib/locale-provider/ko_KR'
import Header from '~/components/base/Header'
import Footer from '~/components/base/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      locale: koKR
    }
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
