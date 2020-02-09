<template>
  <div>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-combobox v-model="name" :items="nameList" :rules="nameRules" @keyup="changeName" label="기업명"></v-combobox>
        <v-text-field v-model="team" label="팀" required></v-text-field>

        <v-menu
          v-model="closingDateOpen"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="closingDate" v-on="on" label="마감일" readonly></v-text-field>
          </template>
          <v-date-picker v-model="closingDate" @input="closingDateOpen = false"></v-date-picker>
        </v-menu>

        <v-menu
          v-model="applyDateOpen"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field v-model="applyDate" v-on="on" label="지원일" readonly></v-text-field>
          </template>
          <v-date-picker v-model="applyDate" @input="applyDateOpen = false"></v-date-picker>
        </v-menu>

        <v-radio-group v-model="status" row label="상태">
          <v-radio label="대기" value="대기"></v-radio>
          <v-radio label="서류지원" value="서류지원"></v-radio>
          <v-radio label="온라인테스트" value="온라인테스트"></v-radio>
          <v-radio label="1차면접" value="1차면접"></v-radio>
          <v-radio label="2차면접" value="2차면접"></v-radio>
          <v-radio label="임원면접" value="임원면접"></v-radio>
          <v-radio label="탈락" value="탈락"></v-radio>
        </v-radio-group>

        <v-text-field v-model="distance" :rules="distanceRules" label="시간/거리" required></v-text-field>
        <!-- <v-text-field v-model="distance" :rules="emailRules" label="E-mail" required></v-text-field> -->
        <v-text-field v-model="pay" label="연봉">
          <template v-slot:append>
            <v-icon>
              mdi-currency-krw
            </v-icon>
          </template>
        </v-text-field>

        <v-radio-group v-model="review" row label="지원검토">
          <v-radio label="매우희망" value="매우희망"></v-radio>
          <v-radio label="긍정적" value="긍정적"></v-radio>
          <v-radio label="보통" value="보통"></v-radio>
          <v-radio label="글쎄" value="글쎄"></v-radio>
          <v-radio label="별로" value="별로"></v-radio>
        </v-radio-group>

        <v-text-field v-model="recruitSite" label="지원사이트" required></v-text-field>
        <v-text-field v-model="jobplanet" label="잡플래닛"></v-text-field>
        <v-text-field v-model="etc" label="기타"></v-text-field>
        <v-text-field v-model="homepage" label="홈페이지"></v-text-field>

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox> -->

        <!-- <v-btn :disabled="!valid" @click="validate" color="success" class="mr-4">
          Validate
        </v-btn>

        <v-btn @click="reset" color="error" class="mr-4">
          Reset Form
        </v-btn>

        <v-btn @click="resetValidation" color="warning">
          Reset Validation
        </v-btn> -->

        <div class="text-right">
          <v-btn @click="reset" color="secondary">
            초기화
          </v-btn>
          <v-btn :disabled="!valid" @click="validate" color="primary">
            등록
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'JobAdd',
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || '기업명은 필수입니다.'
        // (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      nameList: [
        {
          text: '야놀자',
          value: 1
        },
        {
          text: '엔에이치엔고도',
          value: 2
        },
        {
          text: '미식의시대',
          value: 3
        }
      ],
      team: '',
      closingDate: '2020-02-09',
      closingDateOpen: false,
      applyDate: '2020-02-09',
      applyDateOpen: false,
      status: null,
      distance: '',
      distanceRules: [(v) => !!v || '시간'],
      pay: null,
      review: '',
      recruitSite: '',
      jobplanet: '',
      etc: '',
      homepage: '',
      // email: '',
      // emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      checkbox: false
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    changeName(e) {
      if (e.target.value === '가나다라') {
        this.combo = [
          {
            text: '가나다라',
            value: 4
          },
          {
            text: '가나다라마바사',
            value: 5
          },
          {
            text: '넥슨',
            value: 6
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
