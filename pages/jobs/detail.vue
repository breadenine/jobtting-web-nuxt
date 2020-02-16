<template>
  <div>
    <div class="contents__top">
      <h1 class="page__title">{{ selectedCompanyName }}</h1>
    </div>

    <div ref="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: 'JobsDetail',
  data() {
    return {
      selectedCompanyName: this.$route.query.name
    }
  },
  computed: {
    latlng() {
      switch (this.selectedCompanyName) {
        case '야놀자':
          return '37.5067804,127.0640373'
        case '엔에이치엔고도':
          return '37.4828634,126.8946148'
        default:
          return ''
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    const latlng = this.latlng.split(',')
    const mapDiv = this.$refs.map
    new naver.maps.Map(mapDiv, {
      center: new naver.maps.LatLng(latlng[0], latlng[1]),
      zoom: 15
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
