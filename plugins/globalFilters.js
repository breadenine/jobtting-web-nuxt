import Vue from 'vue'

Vue.filter('comma', (value) => {
  const val = parseInt(value || 0)
  return val.toLocaleString()
})
