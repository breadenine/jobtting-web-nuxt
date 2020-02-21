export default {
  computed: {
    isMobile() {
      const width = this.$vuetify.breakpoint.width
      const md = this.$vuetify.breakpoint.thresholds.md
      return width <= md
    }
  }
}
