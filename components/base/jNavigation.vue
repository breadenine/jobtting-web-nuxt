<template>
  <v-container fluid class="header_wrap">
    <header class="header">
      <nuxt-link to="/" class="link--icon">
        <h1><img src="@/assets/img/logo/logo.png" alt="잡팅" /></h1>
      </nuxt-link>
      <v-spacer />
      <btn @click="changeTheme" icon color="dark" class="link">
        <v-icon v-show="$vuetify.theme.dark">mdi-brightness-4</v-icon>
        <v-icon v-show="!$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
      </btn>
      <nuxt-link to="/" class="link">잡팅소개</nuxt-link>
      <nuxt-link to="/" class="link">공지사항</nuxt-link>
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
      alert(1)
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
}
.header {
  display: flex;
  align-items: center;

  .link {
    margin-right: 20px;
  }
}
</style>
