<template>
  <HeaderBlock/>
  <ProductMainBlock/>
  <FooterBlock/>
</template>
<script>
  import HeaderBlock from '@/components/header/HeaderBlock.vue'
  import ProductMainBlock from '@/components/main/ProductMainBlock.vue'
  import FooterBlock from '@/components/footer/FooterBlock.vue'
  export default {
    components: {
      HeaderBlock,
      ProductMainBlock,
      FooterBlock
    }
  }
</script>