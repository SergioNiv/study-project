<template>
    <HeaderBlock/>
    <CartBlock/>
    <FooterBlock/>
  </template>
  <script>
    import HeaderBlock from '@/components/header/HeaderBlock.vue'
    import CartBlock from '@/components/main/CartBlock.vue'
    import FooterBlock from '@/components/footer/FooterBlock.vue'
    export default {
      components: {
        HeaderBlock,
        CartBlock,
        FooterBlock
      }
    }
  </script>