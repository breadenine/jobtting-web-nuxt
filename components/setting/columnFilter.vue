<template>
  <v-card flat title>
    <v-card-title>컬럼 설정</v-card-title>

    <v-card-text>
      <v-row>
        <v-switch v-model="dialogm1" class="mx-2" label="마감일"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="지원일"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="상태"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="거리/시간"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="연봉"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="지원검토"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="지원사이트"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="홈페이지"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="기타"></v-switch>
        <v-switch v-model="dialogm1" class="mx-2" label="잡플래닛"></v-switch>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <btn>저장</btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ColumnFilter',
  data() {
    return {
      dialogm1: true
    }
  },
  mounted() {},
  methods: {
    closeModal() {
      this.dialog = false
    },
    resetForm() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="scss" scoped></style>
