<template>
  <v-app>
    <j-navigation />

    <v-content>
      <nuxt />
    </v-content>

    <j-footer />
  </v-app>
</template>

<script>
import jNavigation from '~/components/base/jNavigation'
import jFooter from '~/components/base/jFooter'

export default {
  name: 'DefaultLayout',
  components: {
    jNavigation,
    jFooter
  }
}
</script>
