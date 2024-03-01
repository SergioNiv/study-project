<template>
    <main class="main">
        <div v-if="showProducts" class="cart__products">
          <ShopCartProductBlock v-for="product in cart" :key="product.id" :productData="product"/>
          <button class="cart__checkout">
            CONFIRMA TU COMPRA
          </button>
        </div>
        <div v-else class="cart__empty">
          oh! todavia no tienes ningun producto agregado
        </div>
    </main>
</template>
<script>
import { mapState } from 'vuex';
import ShopCartProductBlock from '@/components/ShopCartProductBlock.vue'
    export default {
      components: {
        ShopCartProductBlock
      },
      data() {
        return {
        }
      },
      computed: {
        ...mapState(['cart']),
        showProducts(){
          return this.cart?.length !== 0
        }
      },
    }
 
</script>
<style scoped>
.main{
  padding-top: 180px;
  margin-bottom: 20px;
  min-height: calc(100vh - 250px);
}
.cart__products{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.cart__checkout{
  margin-top: 20px;
  background-color: rgb(60, 60, 146);
  color: white;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
  height: 60px;
  text-align: center;
  font-size: 20px;
}
.cart__empty{
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: rgb(157, 157, 157);
}
</style>