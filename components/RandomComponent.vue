<template>
  <div class="root" :class="{ dark }">
    <h2 class="heading">{{ message }}</h2>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    message: {
      type: String,
      default: 'test',
    },
    color: {
      type: String as PropType<'dark' | 'light'>,
      default: 'light',
      validator(value) {
        // type-check required in Vue Composition API.
        return typeof value === 'string' && ['dark', 'light'].includes(value)
      },
    },
  },
  computed: {
    dark(): boolean {
      return this.color === 'dark'
    },
  },
})
</script>
<style lang="scss" scoped>
.root {
  width: 300px;
  height: 300px;
  background: white;

  &.dark {
    color: white;
    background: black;
  }
}

.heading {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 96px;
  font-weight: normal;
}
</style>
