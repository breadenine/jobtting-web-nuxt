<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        로그인 페이지<br />로그인 했으면 기업목록으로
        <nuxt-link to="/jobs">
          <v-btn color="primary" large>
            들어가기
          </v-btn>
        </nuxt-link>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'empty',
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
