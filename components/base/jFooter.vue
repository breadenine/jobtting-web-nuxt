<template>
  <v-footer class="footer">
    <v-spacer />
    <span>문의하기</span>
    <span>이용약관</span>
    <span>개인정보처리방침</span>
    <span>&copy; 2020</span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer span {
  margin-left: 1rem;
  font-size: 0.825rem;
  /* color: $secondary; */
}
</style>
