<template>
    <main class="main">
        <div class="product">
            <div class="product__primary-information">
                <h2 class="product__primary-information--title">Pegamento en barra UHU stic X 40G</h2>
                <h2 class="product__primary-information--brand">UHU</h2>
            </div>
            <div class="product__illustration">
                <img class="product__illustration--img" src="@/assets/imgs/img-example.png" alt="">
            </div>
            <div class="product__secondary-information">
                <p class="product__secondary-information--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quos officiis nobis enim! Vel eveniet quaerat iusto voluptatibus laboriosam</p>
                <button class="product__secondary-information--button">Consulta por este producto</button>
            </div>
        </div>
    </main>
</template>
<style>
.main {
    padding-top: 180px;
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
.product__primary-information{
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