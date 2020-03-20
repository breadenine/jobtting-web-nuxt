<template>
  <v-container fluid>
    <div class="contents__top">
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
          <tr v-for="(item, index) in jobs" :key="index" @click="goDetail(item.id)">
            <td>{{ item.name }}</td>
            <td>{{ item.team }}</td>
            <td>{{ item.closingDate }}</td>
            <td>{{ item.applyDate }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.distance }}</td>
            <td>{{ item.pay | comma }}</td>
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
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('jobs', {
      jobs: 'jobs'
    })
  },
  watch: {},
  fetch({ store, params }) {
    store.dispatch('jobs/init').then((item) => {})
  },
  created() {},
  mounted() {},
  methods: {
    goDetail(id) {
      this.$router.push({
        path: `/jobs/detail`,
        query: { id }
      })
    },
    onModalCreate() {
      this.$store.commit('SET_MODAL_JOBS_CREATE', true)
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
