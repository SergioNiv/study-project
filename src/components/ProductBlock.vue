<template>
    <div class="block">
        <div class="block__img-container">
            <img class="block__image-container--img" src="@/assets/imgs/img-example.png" alt="">
        </div>
        <div class="block__information">
            <p class="block__information--brand">UHU</p>
            <p class="block__information--product">PEGAMENTO EN BARRA UHU STIC 40G</p>
            <button class="block__information--button">Ver producto</button>
        </div>
    </div>
</template>
<style scoped>
.block{
    background-color: rgb(244, 244, 251);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
    margin: 10px;
    width: 200px;
    height: 300px;
    border-radius: 3px;
}
.block__img-container{
    width: 40px;
    height: 60%;
    margin: 0 auto;
    padding: 20px 0 10px 0;
}
.block__image-container--img{
    width: 100%;
}
.block__information{
    background-color: rgb(236, 235, 227);
    height: 40%;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-left: 10px;
}
.block__information--brand{
    font-weight: 700;
    font-size: 14px;
    padding-bottom: 2px;
}
.block__information--product{
    padding-bottom: 5px;
    font-size: 12px;
}
.block__information--button{
    background-color: rgb(60, 60, 146);
    color: rgb(247, 247, 247);
    border-radius: 3px;
    font-size: 14px;
    width: 180px;
    height: 35px;
    border: none;
}
</style>