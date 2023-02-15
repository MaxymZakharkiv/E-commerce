<template>
  <div>
    <input
      :value="value"
      v-bind="$attrs"
      :style="{ width: `${width}px` }"
      :type="type"
      :placeholder="placeholder"
      @input="modelValue"
    />
  </div>
</template>

<script>
export default {
  name: 'MInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
      default: 100,
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    modelValue(e) {
      this.$emit('update:value', e.target.value)
    },
  },
}
</script>

<style scoped></style>
