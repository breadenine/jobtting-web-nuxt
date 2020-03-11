<template>
  <v-container :class="{ dark: $vuetify.theme.dark }" fluid class="header_wrap">
    <header class="header">
      <nuxt-link to="/jobs" class="link--icon">
        <h1>
          <img v-show="isDarkTheme" src="@/assets/img/logo/logo_dark.png" alt="잡팅" />
          <img v-show="!isDarkTheme" src="@/assets/img/logo/logo.png" alt="잡팅" />
        </h1>
      </nuxt-link>
      <v-spacer />
      <nuxt-link to="/about" class="link">잡팅소개</nuxt-link>
      <nuxt-link to="/notice" class="link">공지사항</nuxt-link>
      <template v-if="currentUser">
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list dense rounded>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong>{{ currentUser.username }}</strong>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item-group>
              <v-list-item @click="changeTheme">
                <v-list-item-icon>
                  <v-icon v-show="isDarkTheme">mdi-weather-sunny</v-icon>
                  <v-icon v-show="!isDarkTheme">mdi-weather-night</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-show="isDarkTheme">밝은 테마</v-list-item-title>
                  <v-list-item-title v-show="!isDarkTheme">어두운 테마</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="setting">
                <v-list-item-icon>
                  <v-icon>mdi-account-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>개인설정</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>로그아웃</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </template>
      <template v-else>
        <btn color="dark" dark>로그인</btn>
      </template>
    </header>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'JNavigation',
  data() {
    return {}
  },
  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark
    },
    ...mapState('auth', {
      currentUser: 'currentUser'
    })
  },
  mounted() {
    this.initDarkTheme()
  },
  methods: {
    initDarkTheme() {
      const prevTheme = localStorage.getItem('darkTheme') || 'light'
      this.$vuetify.theme.dark = prevTheme === 'dark'
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.isDarkTheme
      const currentTHeme = this.isDarkTheme ? 'dark' : 'light'
      localStorage.setItem('darkTheme', currentTHeme)
    },
    setting() {
      this.$router.push('/setting')
    },
    logout() {
      this.$store.dispatch('auth/logOut')
      this.$router.push('/')
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
