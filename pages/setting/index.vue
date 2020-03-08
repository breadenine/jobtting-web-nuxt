<template>
  <v-container>
    <v-tabs v-model="tab" centered>
      <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i.name}`">
        <v-icon class="mr-2">{{ `mdi-${i.icon}` }}</v-icon>
        {{ i.name }}
      </v-tab>
      <v-tab-item value="tab-거리">
        <v-card flat tile>
          <div id="map" ref="map" :class="{ mobile: isMobile }" class="map"></div>
          <v-card-title>기업과의 거리를 잴 기준 장소를 설정합니다.</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis optio dolorum autem
            consequatur sapiente illum, in ducimus laudantium exercitationem quod quibusdam quisquam labore voluptatum
            nobis et fugiat beatae voluptatem!
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-컬럼">
        <v-card flat tile>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-계정">
        <v-card flat tile>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import mobile from '@/plugins/mobile'
export default {
  name: 'Setting',
  components: {},
  mixins: [mobile],
  data() {
    return {
      tab: null,
      tabs: [
        { name: '거리', icon: 'map-check' },
        { name: '컬럼', icon: 'filter-variant' },
        { name: '계정', icon: 'account' }
      ],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      map: null
    }
  },
  async mounted() {
    await this.initMap()
    this.initMarker()
  },
  methods: {
    initMap() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const latlng = '37.4828634,126.8946148'.split(',')
          this.map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(latlng[0], latlng[1]),
            zoom: 15
          })
          resolve(true)
        })
      })
    },
    initMarker() {
      const latlng = '37.4828634,126.8946148'.split(',')
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latlng[0], latlng[1]),
        map: this.map
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 400px;

  &.mobile {
    height: 200px;
  }
}
</style>
