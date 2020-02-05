<template>
  <div>
    <nuxt-link to="/jobs/add"><a-button type="primary">기업등록</a-button></nuxt-link>
    <a-table
      :columns="columns"
      :rowKey="(record) => record.login.uuid"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: true,
          width: '20%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' }
          ],
          width: '20%'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        }
      ]
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch(params = {}) {
      this.loading = true
      this.$axios({
        method: 'get',
        url: 'https://randomuser.me/api',
        data: {
          results: 10,
          ...params
        },
        type: 'json'
      }).then((data) => {
        const pagination = { ...this.pagination }
        // pagination.total = data.totalCount;
        pagination.total = 200
        this.loading = false
        this.data = data.data.results
        this.pagination = pagination
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
