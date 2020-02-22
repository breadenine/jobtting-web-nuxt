<template>
  <div>
    <div id="map" ref="map" :class="{ mobile: isMobile }" class="map"></div>
    <v-container>
      <section class="section section__company">
        <h2 class="company__name">{{ companyName }}</h2>
        <btn @click="onModalUpdate">지원정보 수정</btn>
      </section>

      <section class="section">
        <h3 class="section__title">👍 지원정보</h3>
        <ul class="description">
          <li class="keyword">
            <div class="keyword__title">팀</div>
            <div class="keyword__contents">IT개발팀</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">상태</div>
            <div class="keyword__contents">서류지원</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">마감일</div>
            <div class="keyword__contents">2020-20-02</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">지원일</div>
            <div class="keyword__contents">2020-20-02</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">거리/시간</div>
            <div class="keyword__contents">1h 20m</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">연봉</div>
            <div class="keyword__contents">5,000만원</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">지원검토</div>
            <div class="keyword__contents">5, 매우 긍정적</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">지원사이트</div>
            <div class="keyword__contents">로켓펀치</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">홈페이지</div>
            <div class="keyword__contents">http://www.naver.com</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">잡플래닛</div>
            <div class="keyword__contents">5</div>
          </li>
        </ul>
        <div class="etc">
          이 곳은 기타 textarea 공간 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorem ratione modi,
          assumenda accusamus maiores repellendus voluptatum quasi doloremque, error placeat voluptatem totam ea culpa
          odit non? Ut, blanditiis architecto.
        </div>
      </section>

      <section class="section">
        <h3 class="section__title">📊 기업정보</h3>
        <ul class="description">
          <li class="keyword">
            <div class="keyword__title">기업구분</div>
            <div class="keyword__contents">일반기업</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">사업장주소</div>
            <div class="keyword__contents">서울 어디구 저기로 111</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">국민연금 가입자수</div>
            <div class="keyword__contents">25</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">월 가입자수</div>
            <div class="keyword__contents">2</div>
          </li>
          <li class="keyword">
            <div class="keyword__title">월 탈퇴자수</div>
            <div class="keyword__contents">1</div>
          </li>
        </ul>
      </section>
    </v-container>

    <modalUpdate />
  </div>
</template>

<script>
import mobile from '@/plugins/mobile'
import modalUpdate from '~/components/jobs/modalUpdate'

export default {
  name: 'JobsDetail',
  components: {
    modalUpdate
  },
  mixins: [mobile],
  data() {
    return {
      map: null
    }
  },
  computed: {
    companyName() {
      return this.$route.query.name
    },
    latlng() {
      switch (this.companyName) {
        case '야놀자':
          return '37.5067804,127.0640373'
        case '엔에이치엔고도':
          return '37.4828634,126.8946148'
        default:
          return '37.4828634,126.8946148'
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.initMap()
    this.initMarker()
  },
  methods: {
    initMap() {
      const latlng = this.latlng.split(',')
      this.map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(latlng[0], latlng[1]),
        zoom: 15
      })
    },
    initMarker() {
      const latlng = this.latlng.split(',')
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latlng[0], latlng[1]),
        map: this.map
      })
    },
    onModalUpdate() {
      this.$store.commit('SET_MODAL_JOBS_UPDATE', true)
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

.section {
  margin-bottom: 2rem;

  .section__title {
    margin-bottom: 1rem;
  }
}

.section__company {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .company__name {
    font-size: 2rem;
  }
}

.description {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .keyword {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    margin-bottom: 0.5rem;
  }

  .keyword__title {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-weight: 700;

    &::after {
      content: '';
      margin-top: 2px;
      margin-left: 0.5rem;
      width: 2px;
      height: 16px;
      background-color: $primary;
    }
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}
</style>
