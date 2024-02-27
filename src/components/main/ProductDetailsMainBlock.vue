<template>
    <main class="main">
        <div class="product">
            <div class="product__primary-information">
                <h2 class="product__primary-information--title">{{ product.tag }}</h2>
                <h2 class="product__primary-information--brand">{{ product.brand }}</h2>
            </div>
            <div class="product__illustration">
                <img class="product__illustration--img" :src="getImage(product.img)" alt="">
            </div>
            <div class="product__secondary-information">
                <p class="product__secondary-information--text">{{ product.details}}</p>
                <button @click="sendProductToCart" class="product__secondary-information--button">Agregar al Carrito</button>
            </div>
        </div>
    </main>
</template>
<script>
import data from '@/data/data.js'
export default {

        data() {
            return {
                products: data,
                id: null,
                product: {}
            }
        },
        methods:{
            getProductById(id) {
                for (const i in this.products) {
                    const product = this.products[i];
                    if (product.id === id) {
                        return this.product = product;
                    }
                }
            },
            getImage(img) {
                return img ? require(`@/assets/imgs/products/${img}`) : ''
            },
            sendProductToCart(){
                window.alert('Producto agregado!')
                this.$store.commit('addProduct', this.product); 
            }
        },
        async mounted(){
            this.id = this.$route.params.id;
            this.id = parseInt(this.id, 10);
            await this.getProductById(this.id)
        }
}      
</script>
<style scoped>
.main{
  padding-top: 180px;
  min-height: calc(100vh - 250px);
}
.product__primary-information {
    padding: 40px 20px 10px 25px;
}
.product__primary-information--title {
    font-size: 23px;
    font-weight: 700;
    padding-bottom: 10px;
}
.product__primary-information--brand {
    font-size: 22px;
    font-weight: 500;
}
.product {
    margin-bottom: 20px;
}
.product__illustration{
    display: flex;
    justify-content: center;
    padding: 20px 0 20px 0;
}
.product__illustration--img{
    height: 350px;
}
.product__secondary-information{
    padding: 20px 20px 20px 25px;
}
.product__secondary-information--text{
    font-size: 16px;
}
.product__secondary-information--button{
    margin-top: 20px;
    background-color: rgb(60, 60, 146);
    color: white;
    border: none;
    width: 240px;
    height: 45px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
    font-size: 14px;
}
</style>