<template>
  <div :style="{ textAlign: align }">
    <button
      v-bind="$attrs"
      :disabled="disabled"
      :class="[classes, `btn-${color}`]"
      class="btn btn-size"
    >
      <slot>Default button label</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    color: {
      type: String,
      required: true,
      default: 'blue',
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    align: {
      type: String,
      required: false,
      default: 'center',
    },
    outline: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn-rounded': this.rounded,
        'btn-disabled': this.disabled,
        'btn-outline': this.outline,
      }
    },
  },
}
</script>

<style scoped>
.btn {
  margin-bottom: 5px;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  line-height: 1.5;
  border: none;
  box-shadow: 0 -2em 2em rgba(0, 0, 0, 0.1),
    0.2em 0.2em 0.5em rgba(0, 0, 0, 0.3);
}
.btn-rounded {
  border-radius: 10px;
}

.btn-blue {
  background: blue;
  color: white;
}

.btn-yellow {
  background: yellow;
  color: black;
}

.btn-red {
  background: red;
  color: white;
}

.btn-green {
  background: green;
  color: white;
}

.btn-grey {
  background: #9e9e9e;
  color: white;
}

.btn-orange {
  background: #ff5722;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}

.btn-disabled:disabled {
  background: grey;
  cursor: not-allowed;
}

.btn:focus {
  outline: none;
}

.btn-outline {
  border: 1px solid blue;
  box-shadow: none;
  color: black;
  background: none;
}
</style>
