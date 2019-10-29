<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <div class="mx-auto order-0">
      <nuxt-link to="/">
        <img
          height="70"
          src="~/assets/img/logo.png"
          alt=""
        >
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".dual-collapse2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li
          class="nav-item"
          style="margin:15px"
        >
          <nuxt-link
            to="#!"
            class="nav-link"
            style="border:solid 1px white;border-radius: 4px"
          >Qui Sommes nous ?</nuxt-link>
        </li>
        <li
          class="nav-item"
          style="margin:15px"
        >
          <nuxt-link
            to="/auth"
            class="nav-link"
          >Se connecter</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  height: 70px;
  width: 100%;
  background: #222338;
  color: black;
  box-shadow: 0px 0px 3px 1.5px #d7d9f1;
}
nav a,
a:hover {
  color: white;
  text-decoration: none;
}
.wrapper .hamburger {
  height: 3px;
  width: 37px;
  display: block;
  position: relative;
  margin: 20px 0;
  background: black;
  border-radius: 0;
  transition: all 0.3s ease;
}
.wrapper .hamburger::after,
.wrapper .hamburger::before {
  content: "";
  height: 3px;
  width: 37px;
  display: block;
  position: absolute;
  background: black;
  border-radius: 0;
  transition: all 0.3s ease;
}
.wrapper .hamburger::before {
  top: -11px;
}
.wrapper .hamburger::after {
  top: 11px;
}
.wrapper:hover > .hamburger {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  animation: rotate infinite 1s linear 0.3s;
}
.wrapper:hover > .hamburger::after,
.wrapper:hover > .hamburger::before {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.wrapper:hover > .hamburger::before {
  top: -13px;
}
.wrapper:hover > .hamburger::after {
  top: 13px;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
