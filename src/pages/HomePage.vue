<template>
  <HeaderBlock/>
  <MainBlock/>
  <FooterBlock/>
</template>
<script>
  import HeaderBlock from '@/components/header/HeaderBlock.vue'
  import MainBlock from '@/components/main/MainBlock.vue'
  import FooterBlock from '@/components/footer/FooterBlock.vue'
  export default {
    components: {
      HeaderBlock,
      MainBlock,
      FooterBlock
    }
  }
</script>