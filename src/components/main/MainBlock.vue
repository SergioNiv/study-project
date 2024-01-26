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
            <div class="our-location__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9226.289134551978!2d-71.9539328733997!3d-13.524743431951475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5fda428f43d%3A0xc20bf5ba40fd8f78!2sAv.%20los%20Incas%20927%2C%20Cusco%2008002!5e0!3m2!1sen!2spe!4v1702561387862!5m2!1sen!2spe" width="100%" height="300" style="border: 5px;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </main>
</template>
<style>
.main{
    padding-top: 180px;
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