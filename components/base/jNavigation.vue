<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="true" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="primary" dark elevate-on-scroll fixed app>
      <v-app-bar-nav-icon @click.stop="onDrawer" class="d-lg-none d-xl-flex" />
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" class="d-none d-lg-flex d-xl-flex" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item v-show="!$vuetify.theme.dark" @click="$vuetify.theme.dark = true">
            <v-list-item-icon>
              <v-icon>mdi-brightness-4</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>어두운 테마</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-show="$vuetify.theme.dark" @click="$vuetify.theme.dark = false">
            <v-list-item-icon>
              <v-icon>mdi-white-balance-sunny</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>밝은 테마</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'JNavigation',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: '잡팅'
    }
  },
  methods: {
    onDrawer() {
      if (this.miniVariant) {
        this.miniVariant = false
      }
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped></style>
