<template>
  <header class="header">
    <div class="header__information">
      <div class="information__location">
        <img class="information__location--icon" src="@/assets/icons/location.svg" alt="">
        <p class="information__location--information">ubicanos en: ejemplo</p>
      </div>
      <div class="information__schedule">
        <img class="information__schedule--icon" src="@/assets/icons/clock.svg" alt="">
        <p class="information__schedule--information">horario de atencion:<br> de 8:00 AM a 9:00 PM</p>
      </div>
      <div class="information__phone">
        <img class="information__phone--icon" src="@/assets/icons/phone.svg" alt="">
        <p class="information__phone--information">94120021 92737211</p>
      </div>
    </div>
    <div class="header__logo">
      <img class="header__logo--img" src="@/assets/imgs/logo.jpg" alt="">
    </div>
    <div class="header__navigation">
      <router-link to="/">
        <a class="header__navigation--inicio">inicio</a>
      </router-link>
      <router-link to="/productos">
        <a class="header__navigation--products">productos</a>
      </router-link>
      <router-link to="/carrito">
        <div class="navigation__cart">
          <img class="navigation__cart--img" src="@/assets/icons/shop-cart.svg" alt="">
          <div v-if="showCart" class="navigation__cart--quantity"> {{ cart.length }} </div>
        </div>
      </router-link>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['cart']),
    showCart() {
      return this.cart?.length !== 0
    }
  },
}
</script>
<style scoped>
.header{
  position: fixed;
  background-color: rgb(255, 239, 10);
  height: 180px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.193);
}

.information__location{
  width: 25%;
}
.information__schedule{
  width: 50%;
}
.information__phone{
  width: 25%;
  display: flex;
  justify-content: flex-end;
}

.information__location,
.information__schedule,
.information__phone{
  display: flex;
  align-items: center;
}

.information__location--information{
  border-right: 1px solid rgb(50, 46, 60);
  padding-right: 10%;
}

.information__location--icon,
.information__schedule--icon,
.information__phone--icon
{
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
}
.header__logo{
  padding-left: 15px;
  display: flex;
  align-items: center;
}
.header__logo--img{
  width: 90px;
  height: 70px;
}
.header__information{
  grid-row: 1;
  grid-column: span 2;
  display: flex;
  padding: 5px 0 5px 0;
  margin: 0 15px 0 15px;
  height: 90px;
  border-bottom: 1px solid black;
}
.header__navigation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}
.header__navigation--inicio,
.header__navigation--products{
  text-decoration: none;
  color: black;
}
.navigation__cart{
  position: relative;
}
.navigation__cart--img{
  width: 30px;
  height: 30px;
}
.navigation__cart--quantity{
  position: absolute;
  top: 15px;
  left: -5px;
  background-color: red;
  text-align: center;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 100px;
}

@media (min-width: 900px){
  .header {
    grid-template-columns: 2fr 1fr;
  }
}
</style>

