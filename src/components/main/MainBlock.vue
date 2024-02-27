<template>
    <main class="main">
        <div class="about-us">
            <div class="about-us__information">
                <h2 class="about-us__information--title">Acerca De Nosotros</h2>
                <p class="about-us__information--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button class="about-us__information--button">contactanos aqui</button>
            </div>
        </div>
        <div class="our-service">
            <div class="our-service__introduction">
                <h4 class="our-service__introduction--title">Nuestros Servicios</h4>
                <p class="our-service__introduction--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="our-service__blocks">
                    <div class="our-service__blocks--first">
                        <div class="service-blocks">
                            <h4 class="service-blocks__title">Lorem ipsum dolor sit</h4>
                            <p class="service-blocks__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="our-service__blocks--second">
                        <div class="service-blocks">
                            <h4 class="service-blocks__title">Lorem ipsum dolor sit</h4>
                            <p class="service-blocks__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="our-service__blocks--third">
                        <div class="service-blocks">
                            <h4 class="service-blocks__title">Lorem ipsum dolor sit</h4>
                            <p class="service-blocks__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div class="our-service__blocks--fourth">
                        <div class="service-blocks">
                            <h4 class="service-blocks__title">Lorem ipsum dolor sit</h4>
                            <p class="service-blocks__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="our-brands">
            <div class="our-brands__information">
                <h4 class="our-brands__information--title">Marcas que manejamos</h4>
                <p class="our-brands__information--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis consequatur libero veritatis</p>
            </div>
            <div class="our-brands__images">
                <div class="our-brands__images--first">
                    <img src="@/assets/imgs/artesco.png" alt="">
                </div>
                <div class="our-brands__images--second">
                    <img src="@/assets/imgs/faber.png" alt="">
                </div>
                <div class="our-brands__images--third">
                    <img src="@/assets/imgs/maped.png" alt="">
                </div>
            </div>
        </div>
        <div class="our-location">
                <div class="our-location__information">
                    <h1 class="our-location__information--title">
                        Encuentra nuestro local en:
                    </h1>
                    <p class="our-location__information--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vero expedita non distinctio.</p>
                </div>
                <div class="our-location__map">
                    <img class="our-location__map--img" src="@/assets/imgs/map.jpg" alt="">
                </div>
        </div>
    </main>
</template>
<style scoped>
.main{
  padding-top: 180px;
  min-height: calc(100vh - 250px);
}
.about-us{
    width: 100%;
    height: 250px;
    background-image: linear-gradient(to right, rgb(230, 159, 7), rgba(117, 19, 93, 0)), 
    url('~@/assets/imgs/store.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
}
.about-us__information{
    width: 50%;
    padding-left: 20px;
}
.about-us__information--title{
    color: rgb(65, 65, 143);
}
.about-us__information--text{
    color: rgb(247, 247, 247);
    padding: 10px 0 10px 0;
}
.about-us__information--button{
    background-color: rgb(65, 65, 143);
    color: rgb(247, 247, 247);
    border: none;
    border-radius: 3px;
    width: 140px;
    font-size: 14px;
    height: 40px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
}
.our-service__introduction{
    margin: 30px 0 20px 0;
}
.our-service__blocks{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.our-service__introduction--title{
    font-size: 16px;
    text-align: center;
}
.our-service__introduction--text{
    font-size: 14px;
    text-align: center;
}
.our-service__blocks--first,
.our-service__blocks--second,
.our-service__blocks--third,
.our-service__blocks--fourth {
    background-color: rgb(244, 244, 251);
    min-width: 470px;
    margin: 13px 0 13px 0;
    height: 100px;
    border-radius: 3px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
    background-image: url("~@/assets/imgs/service.png");
    background-size: 360px;
    background-position: 150px 10px;
    background-repeat: no-repeat;
}
.service-blocks{
    width: 80%;
    padding: 10px;
}
.our-brands{
    padding: 30px 15px 20px 15px;
}
.our-brands__information--title{
    font-size: 16px;
    text-align: center;
}
.our-brands__information--text{
    font-size: 14px;
    text-align: center;
}
.our-brands__images{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}
.our-brands__images--first img,
.our-brands__images--second img,
.our-brands__images--third img{
    width: 100px;
}
.our-location__information{
    display: flex;
    padding: 20px 0 20px 0;
    flex-direction: column;
}
.our-location__information--title{
    color: black;
    font-size: 16px;
}
.our-location__information--text{
    color: black;
    font-size: 14px;
}
.our-location__map{
        display: flex;
        justify-content: center;
        background-color: rgb(243, 236, 236);
}
.our-location__map--img{
    width: 520px;
    height: 330px;
}
@media (min-width: 900px){
    .about-us{
        width: 100%;
        height: 250px;
        background-image: linear-gradient(to right, rgb(230, 159, 7), rgba(117, 19, 93, 0)), 
        url('~@/assets/imgs/store.jpg');
        background-repeat: no-repeat;
        background-size: 100% 500px;
        display: flex;
        align-items: center;
    }
    .our-service__blocks{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .our-brands__images{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20% 20px 20%;
}
}
</style>