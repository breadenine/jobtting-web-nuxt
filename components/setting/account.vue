<template>
  <v-card flat title>
    <v-card-title>계정 설정</v-card-title>

    <v-card-text class="text-center">
      <div>
        <btn color="blue" outlined>게스트 -> Google 계정 전환</btn>
      </div>
      <div>
        <btn color="dark" outlined>게스트 -> GitHub 계정 전환</btn>
      </div>
      <div>
        <btn color="green" outlined>엑셀 다운로드</btn>
      </div>
      <div>
        <btn color="second">회원탈퇴</btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Account',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
