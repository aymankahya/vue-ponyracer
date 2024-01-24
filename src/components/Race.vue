<template>
  <h2>{{ raceModel.name }}</h2>
  <p>{{ raceDate }}</p>
  <ul>
    <li v-for="pony in raceModel.ponies" :key="pony.id">{{ pony.name }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import fromNow from '@/utils/fromNow';

export default defineComponent({
  name: 'Race',
  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  },
  setup(props) {
    const raceDate = computed(() => fromNow(props.raceModel.startInstant));

    return { raceDate };
  }
});
</script>
