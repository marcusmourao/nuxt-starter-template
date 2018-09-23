<template>
  <div class="input-field">
    <input
      :placeholder="placeholder"
      :class="{'invalid': !isValueValid}"
      :autofocus="autofocus"
      :type="type"
      :id="id"
      :disabled="disabled"
      v-model="value"
    >
    <label :for="id">{{ label }}</label>
    <span
      :data-error="errorMessage"
      class="helper-text"/>
  </div>
</template>

<script>
export default {
  name: 'generic-input',
  props: {
    options: {
      type: Object,
      required: true,
    },
    initialValue: {
      type: String,
      default: null,
    },
    enableValidation: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    label() {
      return this.options.label || '';
    },
    id() {
      return this.options.id;
    },
    errorMessage() {
      return this.options.errorMessage || '';
    },
    type() {
      return this.options.type || 'text';
    },
    autofocus() {
      return this.options.autofocus || 'false';
    },
    mask() {
      return this.options.mask || '';
    },
    validateFunctionSlug() {
      return this.options.validateFunctionSlug || '';
    },
    disabled() {
      return this.options.disabled || false;
    },
    placeholder() {
      return this.options.placeholder || '';
    },
    // isValueValid() {
    //   if (this.enableValidation) {
    //     const genericValidateFunction = getValidateFunctionBySlug(this.validateFunctionSlug);
    //     if (genericValidateFunction) {
    //       return genericValidateFunction(this.value);
    //     }
    //   }
    //   return true;
    // },
  },
  watch: {
    value() {
      this.emitValue();
    },
    isValueValid() {
      this.emitValue();
    },
    initialValue() {
      this.value = this.initialValue;
    },
  },
  mounted() {
    if (this.initialValue) this.value = this.initialValue;
    this.emitValue();
  },
  methods: {
    emitValue() {
      this.$emit('input', {value: this.value, valid: this.isValueValid});
    },
  },
};
</script>

<style scoped>

</style>
