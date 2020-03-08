<template>
  <v-content :class="{ mobile: isMobile }">
    <div class="logo">
      <img v-if="$vuetify.theme.dark" src="@/assets/img/logo/logo_dark_1200x1200.png" alt="잡팅 로고" />
      <img v-else src="@/assets/img/logo/logo_1200x1200.png" alt="잡팅 로고" />
    </div>

    <p class="mt-6 mb-12 text-center">
      잡팅은 구직과 관련된 정리를 간편하게 도와줍니다.<br />
      기업을 등록하고 구직상태를 간편하게 관리해보세요
    </p>

    <div class="login_btn_wrap">
      <btn @click="signIn('guest')" block color="primary" class="btn__login">
        <v-icon left>mdi-account</v-icon>
        게스트로 시작하기
      </btn>
      <btn @click="signIn('google')" block color="whtie" class="btn__login">
        <v-icon left>mdi-google</v-icon>
        Google로 시작하기
      </btn>
      <btn @click="signIn('github')" block dark color="dark" class="btn__login">
        <v-icon left>mdi-book</v-icon>
        GitHub로 시작하기
      </btn>
    </div>
  </v-content>
</template>

<script>
import mobile from '@/plugins/mobile'
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'empty',
  name: 'Login',
  components: {},
  mixins: [mobile],
  computed: {
    ...mapGetters('auth', {
      loggedIn: 'loggedIn'
    })
  },
  fetch({ store, params }) {
    store.dispatch('auth/validate')
  },
  methods: {
    ...mapActions('auth', {
      logIn: 'logIn'
    }),
    async signIn(type) {
      switch (type) {
        case 'google':
          break
        case 'github':
          break
        default:
          await this.logIn({
            type: 'guest'
          })
          break
      }

      this.$router.push('/jobs')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 0 auto;
  max-width: 20%;
}

.login_btn_wrap {
  margin: 0 auto;
  width: 30%;

  .btn__login {
    display: block;
    margin-bottom: 1rem;
  }
}

.mobile {
  .logo {
    max-width: 40%;
  }
  .login_btn_wrap {
    width: 60%;
  }
}
</style>
