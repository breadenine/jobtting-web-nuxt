<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <j-footer />
  </v-app>
</template>

<script>
import jFooter from '~/components/base/jFooter'

export default {
  name: 'EmptyLayout',
  components: {
    jFooter
  }
}
</script>
