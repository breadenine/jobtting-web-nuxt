<template>
  <div>
    로그인 페이지<br />로그인 했으면 기업목록으로
    <h1><nuxt-link to="jobs">들어가기</nuxt-link></h1>
  </div>
</template>

<script>
export default {
  layout: 'Llogin',
  name: 'Login',
  components: {},
  methods: {
    abc() {
      return '1'
    }
  }
}
</script>

<style lang="scss" scoped></style>
