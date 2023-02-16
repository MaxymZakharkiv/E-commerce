<template>
  <div>
    <input
      v-bind="$attrs"
      :style="{ width: `${width}px` }"
      :type="type"
      :placeholder="placeholder"
      v-model="modelData"
    />
  </div>
</template>

<script>
export default {
  name: "MInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
      default: 100,
    },
    modelValue: {
      type: String,
    },
  },
  computed: {
    modelData: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit("update:modelValue", val)
      },
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("update:value", e.target.value)
    },
  },
}
</script>

<style scoped></style>
