const sampleData = [
  {
    id: 1,
    name: '엔에이치엔고도',
    team: '',
    closingDate: '2020-02-29',
    applyDate: '2020-02-05',
    status: '서류지원',
    distance: '구디역 / 1h',
    pay: '6000',
    review: '5',
    recruitsite: '원티드',
    etc: '잡플래닛 평점이 2.6이긴 한데 it평점은 좋으니까..',
    jobplanet: '2.6',
    homepage: ''
  },
  {
    id: 2,
    name: '야놀자',
    team: 'SOS유닛',
    closingDate: '상시',
    applyDate: '2019-12-20',
    status: '면접탈락',
    distance: '삼성역 / 1h 30m',
    pay: '4000',
    review: '',
    recruitsite: '원티드',
    etc: '',
    jobplanet: '2.7',
    homepage: 'http://www.naver.com'
  },
  {
    id: 3,
    name: '미식의시대',
    team: 'ABC팀',
    closingDate: '상시',
    applyDate: '2020-01-30',
    status: '서류지원',
    distance: '종각역 / 1h 30m',
    pay: '2000',
    review: '5',
    recruitsite: '원티드',
    etc: '모회사: 코스콤, 모회서에서 분리된 초기 스타트업',
    jobplanet: '',
    homepage: 'http://www.naver.com'
  },
  {
    id: 4,
    name: '엔에이치엔고도',
    team: '',
    closingDate: '2020-02-29',
    applyDate: '2020-02-05',
    status: '서류지원',
    distance: '구디역 / 1h',
    pay: '3000',
    review: '5',
    recruitsite: '원티드',
    etc: '잡플래닛 평점이 2.6이긴 한데 it평점은 좋으니까..',
    jobplanet: '2.6',
    homepage: 'http://www.naver.com'
  },
  {
    id: 5,
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
    id: 6,
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
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
  },
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
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

const initialState = {
  jobs: [],
  page: 1,
  size: 0,
  filter: [],
  detail: {}
}

export const state = () => ({ ...initialState })

export const getters = {
  jobs(state) {
    return state.jobs
  },
  detail(state) {
    return state.detail
  }
}

export const mutations = {
  SET_JOBS(state, value) {
    state.jobs = value
  },
  SET_DETAIL(state, value) {
    state.detail = value
  }
}

export const actions = {
  init({ commit, dispatch, getters }) {
    // const { data } = await this.$axios.get('/api/jobs')
    const data = sampleData
    commit('SET_JOBS', data)
    return data
  },
  detail({ state, commit }, id) {
    console.log(id)
    const detail = state.jobs.find((item) => item.id === id)
    console.log(detail)
    commit('SET_DETAIL', detail)
  }
}
