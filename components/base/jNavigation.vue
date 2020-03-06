<template>
  <v-container :class="{ dark: $vuetify.theme.dark }" fluid class="header_wrap">
    <header class="header">
      <nuxt-link to="/jobs" class="link--icon">
        <h1>
          <img v-show="$vuetify.theme.dark" src="@/assets/img/logo/logo_dark.png" alt="잡팅" />
          <img v-show="!$vuetify.theme.dark" src="@/assets/img/logo/logo.png" alt="잡팅" />
        </h1>
      </nuxt-link>
      <v-spacer />
      <btn @click="changeTheme" icon color="dark" class="link" dark>
        <v-icon v-show="$vuetify.theme.dark">mdi-weather-night</v-icon>
        <v-icon v-show="!$vuetify.theme.dark">mdi-weather-sunny</v-icon>
      </btn>
      <nuxt-link to="/about" class="link">잡팅소개</nuxt-link>
      <nuxt-link to="/notice" class="link">공지사항</nuxt-link>
      <btn @click="login" color="dark" dark>로그인</btn>
    </header>
  </v-container>
</template>

<script>
export default {
  name: 'JNavigation',
  data() {
    return {}
  },
  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark
    }
  },
  mounted() {
    this.initDarkTheme()
  },
  methods: {
    login() {
      this.$router.push('/')
    },
    initDarkTheme() {
      const prevTheme = localStorage.getItem('darkTheme') || 'light'
      this.$vuetify.theme.dark = prevTheme === 'dark'
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.isDarkTheme
      const currentTHeme = this.isDarkTheme ? 'dark' : 'light'
      localStorage.setItem('darkTheme', currentTHeme)
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  position: sticky;
  top: 0;
  z-index: 110;
  padding-top: 0;
  padding-bottom: 0;
  height: 60px;
  background-color: $white;
  border-bottom: 1px solid $secondary;

  &.dark {
    background-color: $dark;
    .link {
      color: $white;
    }
    .v-icon {
      color: $white;
    }
  }
}
.header {
  display: flex;
  align-items: center;

  .link {
    margin-right: 20px;
  }
}
</style>
