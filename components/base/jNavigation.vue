<template>
  <v-container fluid class="header_wrap">
    <header class="header">
      <nuxt-link to="/" class="link--icon"><img src="@/assets/img/logo/logo.png" alt="잡팅"/></nuxt-link>
      <v-spacer />
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
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      title: '잡팅',
      items: [
        {
          icon: 'mdi-view-list',
          title: '목록',
          to: '/jobs'
        },
        {
          icon: 'mdi-information-outline',
          title: '잡팅이란?',
          to: '/info'
        },
        {
          icon: 'mdi-account-box',
          title: 'Contact Us',
          to: '/contact'
        }
      ]
    }
  },
  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark
    }
  },
  created() {
    this.onMobile()
  },
  mounted() {
    this.initDarkTheme()
  },
  methods: {
    login() {
      alert(1)
    },
    onDrawer() {
      if (this.miniVariant) {
        this.miniVariant = false
      }
      this.drawer = !this.drawer
    },
    onMobile() {
      const width = this.$vuetify.breakpoint.width
      const md = this.$vuetify.breakpoint.thresholds.md
      if (width <= md) {
        this.drawer = false
      }
    },
    initDarkTheme() {
      const isDarkTheme = Boolean(localStorage.getItem('isDarkTheme')) || false
      this.$vuetify.theme.dark = isDarkTheme
    },
    changeDarkTheme(isDarkTheme) {
      localStorage.setItem('isDarkTheme', isDarkTheme)
      this.$vuetify.theme.dark = isDarkTheme
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  position: sticky;
  top: 0;
  z-index: 10;
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
