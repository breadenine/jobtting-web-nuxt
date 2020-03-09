<template>
  <v-card flat tile>
    <v-card-title>기업과의 거리를 잴 기준 장소를 설정합니다.</v-card-title>

    <div id="map" ref="map" :class="{ mobile: isMobile }" class="map"></div>

    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis optio dolorum autem consequatur
      sapiente illum, in ducimus laudantium exercitationem quod quibusdam quisquam labore voluptatum nobis et fugiat
      beatae voluptatem!
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <btn>저장</btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import mobile from '@/plugins/mobile'
export default {
  name: 'Distance',
  mixins: [mobile],
  data() {
    return {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      map: null
    }
  },
  mounted() {
    this.initMap()
    this.initMarker()
  },
  methods: {
    initMap() {
      const latlng = '37.4828634,126.8946148'.split(',')
      this.map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(latlng[0], latlng[1]),
        zoom: 15
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
