<template>
  <v-container>
    <v-tabs v-model="tab" centered>
      <v-tab v-for="i in tabs" :key="i.name" :href="`#tab-${i.name}`">
        <v-icon class="mr-2">{{ `mdi-${i.icon}` }}</v-icon>
        {{ i.name }}
      </v-tab>

      <v-tab-item value="tab-거리">
        <distance />
      </v-tab-item>
      <v-tab-item value="tab-컬럼">
        <columnFilter />
      </v-tab-item>
      <v-tab-item value="tab-계정">
        <account />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import Distance from '@/components/setting/distance'
import ColumnFilter from '@/components/setting/columnFilter'
import Account from '@/components/setting/account'

export default {
  name: 'Setting',
  components: { Distance, ColumnFilter, Account },
  data() {
    return {
      tab: null,
      tabs: [
        { name: '거리', icon: 'map-check' },
        { name: '컬럼', icon: 'filter-variant' },
        { name: '계정', icon: 'account' }
      ],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss" scoped></style>
