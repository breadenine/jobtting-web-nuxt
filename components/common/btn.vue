<template>
  <v-btn
    @click="$emit('click')"
    :color="color"
    :dark="dark"
    :outlined="outlined"
    :text="text"
    :disabled="disabled"
    depressed
    rounded
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
