<template>
  <div>
    <input
      class="defaulStyleInput"
      :class="classes"
      v-bind="$attrs"
      :disabled="readonly"
      :style="{ width: `${width}px`, height: `${height}px` }"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
    />
    <div class="input-errors" v-if="errors">
      <div class="input-error" v-for="i in errors" :key="i">{{ i }}</div>
    </div>
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
      default: 220,
    },
    height: {
      type: Number,
      default: 30,
    },
    modelValue: {
      type: String,
    },
    outline: {
      type: Boolean,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    errors: {
      type: Array,
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
        'input-outline': this.outline,
        'input-rounded': this.rounded,
        'input-readonly': this.readonly,
      }
    },
  },
}
</script>

<style scoped>
.defaulStyleInput {
  padding: 5px;
  outline: 0;
  border: none;
  border-bottom: 1px solid black;
}
.defaulStyleInput:not([disabled]):hover,
.defaulStyleInput:not([disabled]):focus {
  border-bottom: 1px solid blue;
}
.input-outline {
  border: 1px solid black;
}
.input-outline:hover,
.input-outline:focus {
  border: 1px solid blue;
}

.input-rounded {
  border-radius: 20px;
  text-indent: 5px;
  font-size: 16px;
}

.input-readonly {
  background: none;
  border-bottom: 1px dashed grey;
}

.input-readonly:hover {
  cursor: not-allowed;
}
</style>
