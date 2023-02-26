<template>
  <div v-for="i in listOptions" :key="i.id">
    <m-checkbox
      :label="i.value"
      :id="i.id"
      :name="name"
      :checked="value.includes(i.id)"
      @updateGroupCheckbox="check"
      group
    />
  </div>
</template>

<script>
export default {
  name: 'MCheckboxgroup',
  props: {
    value: {
      type: Array,
      required: false,
    },
    listOptions: {
      type: Array,
      required: false,
      validator: (val) => {
        const hasValueKey = val.every((opt) =>
          Object.keys(opt).includes('value')
        )
        const hasIdKey = val.every((opt) => Object.keys(opt).includes('id'))
        return hasValueKey && hasIdKey
      },
    },
    name: {
      type: String,
      required: false,
    },
  },
  methods: {
    check(params) {
      console.log(params)
      let updateValue = [...this.value]
      if (params.checked) {
        updateValue.push(params.optionId)
      } else {
        updateValue.splice(updateValue.indexOf(params.optionId), 1)
      }
      this.$emit('update:value', updateValue)
    },
  },
}
</script>

<style scoped></style>
