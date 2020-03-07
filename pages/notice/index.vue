<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout hover>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>
            <span class="date">2020-02-22</span>
            <span class="notice__title">Item</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Notice',
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.v-expansion-panel-header .date {
  flex: none;
  margin-right: 2rem;
}
</style>
