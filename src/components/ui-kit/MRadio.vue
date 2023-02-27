<template>
  <div class="container">
    <input
      type="radio"
      :class="classes"
      :id="id"
      :checked="checked"
      :value="value"
      :name="name"
      :disabled="disabled"
      @input="changeChecked"
    />
    <label :class="{ 'disable-m-radio': disabled }" :for="id">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  name: 'MRadio',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classes() {
      return {
        'disable-m-radio': this.disabled,
      }
    },
  },
  methods: {
    changeChecked(event) {
      this.$emit('update:checked', event.target.checked)
    },
  },
}
</script>

<style scoped>
.disable-m-radio {
  cursor: not-allowed;
}
</style>
