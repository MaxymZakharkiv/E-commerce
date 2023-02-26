<template>
  <div class="container">
    <label
      v-if="labelLeft"
      :class="{ 'disable-m-checkbox': disabled }"
      class="m-checkbox m-checkbox-label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :class="classes"
      class="m-checkbox"
      :checked="checked"
      :value="value"
      :disabled="disabled"
      type="checkbox"
      @input="changeChecked"
    />
    <label
      v-if="!labelLeft"
      :class="{ 'disable-m-checkbox': disabled }"
      class="m-checkbox m-checkbox-label"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'MCheckbox',
  props: {
    id: {
      type: Number,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      default: '',
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
    checked: {
      type: Boolean,
      required: false,
    },
    group: {
      type: Boolean,
      required: false,
    },
    // modelValue: {
    //   type: Boolean,
    //   required: false,
    // },
  },
  computed: {
    //   model: {
    //     get() {
    //       return this.modelValue
    //     },
    //     set(val) {
    //       this.$emit('update:modelValue', val)
    //     },
    //   },
    classes() {
      return {
        'disable-m-checkbox': this.disabled,
      }
    },
  },
  methods: {
    changeChecked(event) {
      if (this.group) {
        this.$emit('updateGroupCheckbox', {
          optionId: this.id,
          checked: event.target.checked,
        })
      } else {
        this.$emit('update:checked', event.target.checked)
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
  margin-bottom: 20px;
}
.m-checkbox {
  cursor: pointer;
  height: 25px;
  width: 25px;
}

.m-checkbox-label {
  font-size: 14px;
  padding: 0 5px;
  user-select: none;
}

.disable-m-checkbox {
  cursor: not-allowed;
}
</style>
