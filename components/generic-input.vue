<template>
  <div class="input-field">
    <label :for="id">
      {{ label }}
      <input
        :class="{'invalid': !isValueValid}"
        :name="id"
        :id="id"
        v-bind="$attrs"
        v-model="value"
      >
    </label>
    <span
      :data-error="errorMessage"
      class="helper-text"/>
  </div>
</template>

<script>
import {getValidateFunctionBySlug} from '../validate/validate';

export default {
  name: 'generic-input',
  inheritAttrs: false,
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
    errorMessage() {
      return this.options.errorMessage || '';
    },
    mask() {
      return this.options.mask || '';
    },
    validateFunctionSlug() {
      return this.options.validateFunctionSlug || '';
    },
    id() {
      return this.options.id || this._uid;
    },
    isValueValid() {
      if (this.enableValidation) {
        const genericValidateFunction = getValidateFunctionBySlug(this.validateFunctionSlug);
        if (genericValidateFunction) {
          return genericValidateFunction(this.value);
        }
      }
      return true;
    },
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
