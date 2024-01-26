<template>
    <footer class="footer">
        <div class="footer__information">
            <div class="our-contacts">
                <p class="our-contacts__title">contactanos al:</p>
                <div class="our-contacts__information">
                    <img class="our-contacts__information--icon" src="@/assets/icons/phone-alt.svg" alt="">
                    <p class="our-contacts__information--text">(+51) 96723930</p>
                </div>
            </div>
            <div class="our-location">
                <p class="our-location__title">encuentranos en:</p>
                <div class="our-location__information">
                    <img class="our-location__information--icon" src="@/assets/icons/location-alt.svg" alt="">
                    <p class="our-location__information--text">Av.los Incas 927</p>
                </div>
            </div>
            <div class="our-socials">
                <p class="our-socials__title">facebook:</p>
                <div class="our-socials__information">
                    <img class="our-socials__information--icon" src="@/assets/icons/facebook.svg" alt="">
                    <a class="our-socials__information--text" href="https://www.facebook.com/profile.php?id=100009402821329&mibextid=LQQJ4d">Ayd Libreria</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
.footer{
    background-color: rgb(33, 33, 33);
    height: 250px;
    display: flex;
}
.footer__information{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    border-bottom: 1px solid rgb(239, 239, 239);
    margin: 0 20px 0 20px;
    padding: 20px 10px 20px 10px;

}
.our-contacts{
    color: rgb(239, 239, 239);
    font-size: 12px;
}
.our-location{
    color: rgb(239, 239, 239);
    font-size: 12px;
}
.our-contacts__title,
.our-location__title,
.our-socials__title{
    padding-left: 3px;
    padding-bottom: 3px;
}
.our-location__information,
.our-contacts__information,
.our-socials__information{
    display: flex;
    align-items: center;
}
.our-socials__information--text{
    text-decoration: none;
    color: rgb(239, 239, 239);
}
.our-location__information--icon,
.our-contacts__information--icon,
.our-socials__information--icon{
    color: white;
    width: 20px;
    margin: 0 5px 0 0;
}
.our-socials{
    color: rgb(239, 239, 239);
    font-size: 12px;
}
</style>