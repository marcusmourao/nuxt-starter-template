<template>
  <section class="container">
    <div>
      <p>{{ $t('title') }}</p>
      <generic-input
        :initialValue="'Olá Mundo'"
        :enableValidation="true"
        :options="{label: 'Teste', id: 'test', validateFunctionSlug: 'text-exists'}"/>
    </div>
  </section>
</template>

<script>

import GenericInput from '../components/generic-input.vue';

export default {
  components: {GenericInput},
};
</script>
