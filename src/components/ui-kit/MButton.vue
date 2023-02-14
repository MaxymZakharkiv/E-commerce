<template>
  <button
    v-bind="$attrs"
    :class="{
      'rounded-btn': rounded,
      'border-btn': border,
    }"
    class="btn outline-btn"
  >
    <slot>Default label</slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    color: {
      type: String,
      required: false,
      default: 'blue',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: 'md',
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.btn {
  box-sizing: border-box;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
}
.rounded-btn {
  border-radius: 10px;
}
.border-btn {
  border: 0;
}
</style>
