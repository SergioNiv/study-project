<template>
    <div class="product">
        <div class="product__illustration">
            <img class="product__illustration--img" :src="getImage(productData.img)">
        </div>
        <div class="product__information">
            <h2 class="product__information--title">{{ productData.brand }}</h2>
            <p class="product__information--text">{{ productData.tag }}</p>
        </div>
        <div class="product__settings">
            <div class="settings__quantity">
                <button @click="decrement(this.productData)" class="settings__quantity--subtract">-</button>
                <p class="settings__quantity--show">{{productData.quantity}}</p>
                <button @click="increment(this.productData)" class="settings__quantity--plus">+</button>
            </div>
            <div class="settings__price">{{ 'S/.' + (productData.price * productData.quantity).toFixed(1) + '0'}}</div>
            <div class="settings__delete">
                <img @click="deleteProduct(this.productData)" class="settings__delete--icon" src="@/assets/icons/trash-can.svg">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ShopCartProductBlock',
        props: {
            productData: Object,
        },
        data() {
            return {
                productTotalPrice: [],
            }
        },
        methods: {
            getImage(img) {
                return require(`@/assets/imgs/products/${img}`)
            },
            increment(selectedData){
                this.$store.commit('incrementQuantity', selectedData)
            },
            decrement(selectedData){
                this.$store.commit('decrementQuantity', selectedData)
            },
            deleteProduct(selectedData){
                this.$store.commit('deleteElement', selectedData)
            },
            }

    }
</script>
<style scoped>
.product{
    background-color: rgb(244, 244, 251);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
    width: 90%;
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0 20px 0 20px;
    margin: 30px 0 5px 0;
}
.product__illustration{
    background-color: rgb(236, 235, 227);
    border-radius: 5px;
    width: 90px;
    height: 90px;
    min-width: 90px;
    display: flex;
    justify-content: center;
}
.product__illustration--img{
    width: 100%;
    height: 100%;
}
.product__information{
    margin: 0 15px 0 15px;
    display: flex;
    width: 400px;
    flex-direction: column;

}
.product__information--title{
    font-size: 16px;
}
.product__information--text{
    font-size: 14px;
}
.product__settings{
    display: flex;
    align-items: center;

}
.settings__quantity{
    display: flex;
    justify-content: center;
    align-items: center;
}
.settings__price{
    padding: 10px 10px;
}
.settings__quantity--subtract,
.settings__quantity--plus{
    background-color: rgb(255, 239, 10);
    width: 30px;
    height: 30px;
    border-radius: 5px;
}
.settings__quantity--show{
    padding: 0 10px 0 10px;
}
.settings__delete--icon{
    width: 30px;
    height: 30px;
    fill: white;
}
</style>
