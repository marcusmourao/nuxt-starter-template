<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import {attachScript} from '../util/Util';

export default {
  mounted() {
    attachScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js');
  },
};

</script>
