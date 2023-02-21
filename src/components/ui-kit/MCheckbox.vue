<template>
  <div class="container">
    <label
      v-if="labelLeft"
      :class="{ 'disable-m-checkbox': disabled }"
      class="m-checkbox m-checkbox-label"
      for="id-checkbox"
    >
      {{ label }}
    </label>
    <input
      :name="name"
      :class="classes"
      class="m-checkbox"
      v-model="model"
      :disabled="disabled"
      id="id-checkbox"
      type="checkbox"
    />
    <label
      v-if="!labelLeft"
      :class="{ 'disable-m-checkbox': disabled }"
      class="m-checkbox m-checkbox-label"
      for="id-checkbox"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'MCheckbox',
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    labelLeft: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
    classes() {
      return {
        'disable-m-checkbox': this.disabled,
      }
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-checkbox {
  cursor: pointer;
  height: 25px;
  width: 25px;
}

.m-checkbox-label {
  font-size: 18px;
  padding: 0 5px;
  user-select: none;
}

.disable-m-checkbox {
  cursor: not-allowed;
}
</style>
