<template>
    <main class="main">
        <div class="products-data">
            <div class="products-data__quantity">
                04 producto(s)
            </div>
        </div>
        <div class="products-container">
            <ProductBlock/>
            <ProductBlock/>
            <ProductBlock/>
            <ProductBlock/>
        </div>
    </main>
</template>
<script>
import ProductBlock from '@/components/ProductBlock.vue'
export default {
      components: {
        ProductBlock,
      }
    }
</script>
<style>
.main{
    padding-top: 180px;
    min-height: calc(100vh - 250px)
}
.products-data{
    display: flex;
    justify-content: center;
}
.products-data__quantity{
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 16px;
    text-align: center;
    color: rgb(127, 127, 127);
    border-bottom: 1px solid rgb(200, 200, 200);
    width: 400px;
}
.products-container{
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>