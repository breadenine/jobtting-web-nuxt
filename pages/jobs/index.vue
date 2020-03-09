<template>
  <v-container fluid>
    <div class="contents__top">
      <btn @click="onModalColumnFilter" color="primary" outlined>
        컬럼설정
      </btn>
      <v-spacer />
      <btn @click="onModalCreate" color="primary">
        기업등록
      </btn>
    </div>

    <v-simple-table fixed-header height="100%" class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="item in headers" :key="item.text" class="text-left">
              {{ item.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in desserts" :key="index" @click="goDetail(item.name)">
            <td>{{ item.name }}</td>
            <td>{{ item.team }}</td>
            <td>{{ item.closingDate }}</td>
            <td>{{ item.applyDate }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.distance }}</td>
            <td>{{ item.pay }}</td>
            <td>{{ item.review }}</td>
            <td>{{ item.recruitsite }}</td>
            <td>{{ item.etc }}</td>
            <td>{{ item.jobplanet }}</td>
            <td>{{ item.homepage }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <modalCreate />
  </v-container>
</template>

<script>
import modalCreate from '~/components/jobs/modalCreate'

export default {
  name: 'Jobs',
  head() {
    return {
      title: '기업목록'
    }
  },
  components: {
    modalCreate
  },
  data() {
    return {
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        {
          text: '기업명',
          align: 'left',
          sortable: false,
          value: 'name',
          fixed: true
        },
        {
          text: '팀',
          align: 'left',
          sortable: false,
          value: 'team'
        },
        {
          text: '마감일',
          align: 'center',
          sortable: true,
          value: 'closingDate'
        },
        {
          text: '지원일',
          align: 'center',
          sortable: true,
          value: 'applyDate'
        },
        {
          text: '상태',
          align: 'center',
          sortable: true,
          value: 'status'
        },
        {
          text: '거리/시간',
          align: 'left',
          sortable: true,
          value: 'distance'
        },
        {
          text: '연봉',
          align: 'left',
          sortable: true,
          value: 'pay'
        },
        {
          text: '지원검토',
          align: 'center',
          sortable: true,
          value: 'review'
        },
        {
          text: '지원사이트',
          align: 'left',
          sortable: false,
          value: 'recruitsite'
        },
        {
          text: '기타',
          align: 'center',
          sortable: false,
          value: 'etc'
        },
        {
          text: '잡플래닛',
          align: 'center',
          sortable: true,
          value: 'jobplanet'
        },
        {
          text: '홈페이지',
          align: 'left',
          sortable: false,
          value: 'homepage'
        }
      ]
    }
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi().then((data) => {
          this.desserts = data.items
          this.totalDesserts = data.total
        })
      },
      deep: true
    }
  },
  created() {
    this.getSample()
  },
  mounted() {
    this.getDataFromApi().then((data) => {
      this.desserts = data.items
      this.totalDesserts = data.total
    })
  },
  methods: {
    getDataFromApi() {
      this.loading = true
      return new Promise((resolve, reject) => {
        // const { sortBy, sortDesc, page, itemsPerPage } = this.options
        const { page, itemsPerPage } = this.options

        let items = this.getDesserts()
        const total = items.length

        /* if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy[0]]
            const sortB = b[sortBy[0]]

            if (sortDesc[0]) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        } */

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total
          })
        }, 1000)
      })
    },
    getDesserts() {
      const data = [
        {
          name: '엔에이치엔고도',
          team: '',
          closingDate: '2020-02-29',
          applyDate: '2020-02-05',
          status: '서류지원',
          distance: '구디역 / 1h',
          pay: '',
          review: '5',
          recruitsite: '원티드',
          etc: '잡플래닛 평점이 2.6이긴 한데 it평점은 좋으니까..',
          jobplanet: '2.6',
          homepage: ''
        },
        {
          name: '야놀자',
          team: 'SOS유닛',
          closingDate: '상시',
          applyDate: '2019-12-20',
          status: '면접탈락',
          distance: '삼성역 / 1h 30m',
          pay: '',
          review: '',
          recruitsite: '원티드',
          etc: '',
          jobplanet: '2.7',
          homepage: ''
        },
        {
          name: '미식의시대',
          team: '',
          closingDate: '상시',
          applyDate: '2020-01-30',
          status: '서류지원',
          distance: '종각역 / 1h 30m',
          pay: '',
          review: '5',
          recruitsite: '원티드',
          etc: '모회사: 코스콤, 모회서에서 분리된 초기 스타트업',
          jobplanet: '',
          homepage: ''
        }
      ]
      return [...data, ...data, ...data, ...data]
    },
    goDetail(companyName) {
      this.$router.push({
        path: `/jobs/detail`,
        query: {
          name: companyName
        }
      })
    },
    onModalCreate() {
      this.$store.commit('SET_MODAL_JOBS_CREATE', true)
    },
    onModalColumnFilter() {
      this.$store.commit('SET_MODAL_JOBS_COLUMN_FILTER', true)
    },
    async getSample() {
      // const data = await this.$axios.get('/api/sample')
      // console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.contents__top {
  margin-bottom: 1rem;
  display: flex;
}
.table tbody tr td {
  cursor: pointer;
}
</style>
