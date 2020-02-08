<template>
  <div>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-combobox
          v-model="select"
          :items="combo"
          @keyup="changeName"
          label="Select a favorite activity or create a new one"
        ></v-combobox>

        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" @click="validate" color="success" class="mr-4">
          Validate
        </v-btn>

        <v-btn @click="reset" color="error" class="mr-4">
          Reset Form
        </v-btn>

        <v-btn @click="resetValidation" color="warning">
          Reset Validation
        </v-btn>
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
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      select: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      checkbox: false,
      combo: [
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
      ]
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
