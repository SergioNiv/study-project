<template>
    <HeaderBlock/>
    <ProductDetailsMainBlock/>
    <FooterBlock/>
  </template>
  <script>
    import HeaderBlock from '@/components/header/HeaderBlock.vue'
    import ProductDetailsMainBlock from '@/components/main/ProductDetailsMainBlock.vue'
    import FooterBlock from '@/components/footer/FooterBlock.vue'
    export default {
      components: {
        HeaderBlock,
        ProductDetailsMainBlock,
        FooterBlock
      }
    }
  </script>