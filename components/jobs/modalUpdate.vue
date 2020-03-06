<template>
  <v-dialog v-model="dialog" persistent scrollable max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">지원정보 수정</span>
        <v-spacer />
        <v-btn @click="closeModal" icon>
          <v-icon large>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="form">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="기업명 *" required readonly clearable />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="팀" hint="optional" clearable />
              </v-col>
              <v-col cols="12" md="4">
                <v-autocomplete
                  :items="[
                    '대기',
                    '서류지원',
                    '사전과제',
                    '온라인테스트',
                    '1차면접',
                    '2차면접',
                    '3차면접',
                    '임원면접',
                    '최종면접',
                    '최종합격',
                    '면접탈락'
                  ]"
                  label="상태 *"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="마감일 *" required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="지원일" required />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="거리/시간" />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="연봉" prefix="￦" hint="단위: 만원" />
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  :items="['5, 매우 긍정적', '4, 긍정적', '3, 보통', '2, 부정적', '1, 일단 적어둠']"
                  label="지원검토"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  :items="['공식홈페이지', '원티드', '로켓펀치', '잡코리아', '사람인', '인크루트', '워크넷', '기타']"
                  label="지원사이트 *"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="회사 홈페이지" hint="회사홈페이지 또는 구인 url" />
              </v-col>

              <v-col cols="12">
                <v-textarea label="기타" rows="3" hint="기타 내용을 자유롭게 적어두세요" />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*: 필수입력항목</small>
      </v-card-text>
      <v-card-actions>
        <btn @click="closeModal" text>취소</btn>
        <btn @click="resetForm" text>초기화</btn>
        <v-spacer></v-spacer>
        <btn :disabled="!form" @click="closeModal" text>저장</btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'JobsModalUpdate',
  data() {
    return {
      form: false
    }
  },
  computed: {
    dialog: {
      set(value) {
        this.$store.commit('SET_MODAL_JOBS_UPDATE', value)
      },
      get() {
        return this.$store.state.MODAL_JOBS_UPDATE
      }
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

<style lang="sass" scoped></style>
