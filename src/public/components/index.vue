<template>
  <div>
      <blog-left></blog-left>
      <blog-right></blog-right>
  </div>
</template>

<script>
import blogLeft from './blogLeft.vue'
import blogRight from './blogRight.vue'
export default {
  components: {
    blogLeft,
    blogRight
  },
  
}
</script>
