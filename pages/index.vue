<template>
  <section class="container">
    <div>
      <p>{{ $t('title') }}</p>
    </div>
  </section>
</template>

<script>

import GenericInput from '../components/generic-input.vue';

export default {
  components: {GenericInput},
};
</script>
