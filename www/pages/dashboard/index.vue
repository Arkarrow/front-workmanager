<template>
  <section>
    <div
      id="dashbord"
      v-if="user"
    >
      <nav class="navbar sticky-top navbar-light bg-light navDashboardShadow">
        <img
          src="~/assets/img/logo.png"
          style="height: 50px;"
          class="img-nav-fixedbar Cpointer"
        >
        <div>
          <i
            class="far fa-bell fa-2x Cpointer"
            style="color:black;line-height:40px"
          ></i>
        </div>
        <div style="color:black">
          <img
            src="https://img.icons8.com/bubbles/2x/user.png"
            alt=""
            class="userpreview Cpointer"
            v-on:click="NavShow"
          >
        </div>
      </nav>
      <div class="d-notifs">
        <div class="row">
          <table>
            <tr>
              <th>Type</th>
              <th>content</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="content">

        <transition name="fade">
          <div
            v-if="isDisplay"
            class="subnav"
          >
            <i
              class="far fa-times-circle fa-2x"
              v-on:click="NavHide"
            ></i>
            <ul class="d-ul">
              <li class="Cpointer">Profil</li>
              <hr>
              <li class="Cpointer">une option</li>
              <hr>
              <li class="Cpointer">une option</li>
              <hr>
              <li class="Cpointer">une option</li>
              <hr>
              <li class="Cpointer">Parametre</li>
            </ul>
            <hr>
            <ul
              class="Cpointer"
              v-on:click="logOut"
            >
              <li>Déconnexion</li>
            </ul>
          </div>
        </transition>

        <div class="row">
          <div
            class="col"
            style="height:250px;"
          >
            {{user}}
            <chartjs-line
              v-bind:option="tab.data.a.option"
              v-bind:beginzero="true"
              v-bind:datalabel="tab.data.a.datalabel"
              v-bind:labels="tab.data.a.labels"
              v-bind:data="tab.data.a.data"
              v-bind:fill="tab.data.a.fill"
              v-bind:backgroundcolor="tab.data.a.backgroundcolor"
              v-bind:bordercolor="tab.data.a.bordercolor"
              style="width:100%;height:250px;"
            ></chartjs-line>
          </div>
        </div>
        <div class="row">
          <div
            class="col"
            style="height:200px"
          >
            <i class="fas fa-users fa-4x"></i>
            <hr class="mainHR">
            <nuxt-link to="/account/test"> Mes annonces </nuxt-link>
          </div>
          <div
            class="col"
            style="height:200px"
          >
            <i class="fas fa-user-plus fa-4x"></i>
            <hr class="mainHR">
            <span>Ajouter un membre a ma workteam</span>
          </div>
          <div
            class="col"
            style="height:200px"
          >
            <i class="fas fa-piggy-bank fa-4x"></i>
            <hr class="mainHR">
            <span>XX€ en attente</span>
          </div>
          <div
            class="col"
            style="height:200px"
          >
            <i class="far fa-credit-card fa-4x"></i>
            <hr class="mainHR">
            <span>Emettre une facture</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <chartjs-line
              v-bind:beginzero="tab.beginZero"
              v-bind:datalabel="tab.datalabel"
              v-bind:labels="tab.labels"
              v-bind:data="tab.data"
              v-bind:fill="tab.fill"
              v-bind:backgroundcolor="tab.bgcolor"
              v-bind:bordercolor="tab.bordercolor"
              v-bind:height="tab.height"
              v-bind:scales="tab.scales"
            >
            </chartjs-line>
          </div>
          <div class="col">

          </div>
          <div class="col">
            <chartjs-bar
              v-bind:datalabel="tabTh.label"
              v-bind:labels="tabTh.labels"
              v-bind:data="tabTh.data"
            >
            </chartjs-bar>
          </div>
        </div>

        <div class="row">
          <div
            class="col"
            style="height: 500px"
          >
            <h3>Une section</h3>
          </div>
          <div
            class="col"
            style="height: 500px"
          >
            <h3> Une autre section</h3>

            Vous avez pour id : {{user.id}}
            <br>
            vous etes : {{user.email}}

          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p style="color:black">Vous n'etes pas connecté</p>
      <nuxt-link :to="`${this.$router.push('/auth/login')}`">Se connecter</nuxt-link>
    </div>
    <footer style="background:transparent;color:black">
      &copy; 2019 Tsaei - Tous droits réservés
    </footer>
  </section>
</template>
<style>
:root {
  --or: #f3cb5a;
}
.d-ul {
  text-align: left;
  margin: 10px;
  list-style: none;
}
.d-ul li {
  left: 10px;
  top: 1px;
}
.mainHR {
  background: var(--or);
}
i {
  color: #e5f3f3;
}
nav img {
  width: 200px;
  height: auto;
}
nav {
  height: 80px;
  background: white;
}
.navDashboardShadow {
  box-shadow: 0px 0px 6px 2px #e5f3f3;
}
.subnav {
  box-shadow: 0px 0px 6px 2px #d3e2e2;
  border-radius: 7px;
  background: white;
  margin-top: -38vh;
  margin-right: 15px;
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 999;
  width: 180px;
}
.userpreview {
  width: 65px;
}
#dashbord {
  color: #636269;
  background: #f5f9fa;
}
.col {
  color: #636269;
  box-shadow: 0px 0px 6px 2px #e5f3f3;
  margin: 12px;
  border-radius: 7px;
  background: white;
}
.content {
  padding: 40px;
  text-align: center;
}
.Cpointer {
  cursor: pointer;
}
.d-notifs {
  background: white;
  width: 50%;
  margin: 0 auto;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 6px 2px #e5f3f3;
}
.d-notifs table {
  width: 90%;
  margin: 0 auto;
  text-align: left;
}
.d-notifs tr {
  text-align: left;
}
.d-notifs tr:hover {
  background: red;
  transition: 0.5s;
}
.d-notifs th {
  padding: 10px;
  padding-bottom: 20px;
  padding: 25px;
}
/******* vue ***/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
export default {
  head: {
    title: "Work-manger - Dashboard",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity:
          "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
        integrity:
          "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        src: "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js"
      }
    ]
  },
  layout: "fullscreen",

  data() {
    return {
      isDisplay: false,
      beginZero: true,
      datalabel: "Nombres de projets validé",
      labels: ["2017", "2018", "2019"],
      data: [0, 2, 3],
      fill: true,
      bgcolor: "transparent",
      bordercolor: "#f3cb5a",
      height: "40",
      tab: {
        data: {
          a: {
            beginzero: true,
            datalabel: "nbs d'impressions de vos offres en fct de l'heure",
            labels: [
              "00:00",
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
              "20:00",
              "21:00",
              "22:00",
              "23:00"
            ],
            data: [
              15,
              2,
              8,
              12,
              56,
              284,
              1589,
              908,
              8059,
              9800,
              77059,
              70000,
              85000,
              360000,
              289000,
              158999,
              56894,
              70053,
              89555,
              289368,
              378956,
              142895,
              56268,
              14365
            ],
            fill: true,
            backgroundcolor: "rgb(243,203,90,0.2)",
            bordercolor: "rgb(243, 203, 90)",
            option: {
              responsive: true,
              maintainAspectRatio: false,
              title: {
                display: false,
                position: "left",
                text: "Custom Chart Title"
              },
              scales: {
                yAxes: [
                  {
                    display: false,
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ],
                xAxes: [
                  {
                    display: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          }
        }
      },
      second: {
        beginZero: true,
        datalabel: "Nombres de projets validé",
        labels: ["2017", "2018", "2019"],
        data: [0, 2, 3],
        fill: true,
        bgcolor: "transparent",
        bordercolor: "#f3cb5a",
        height: "40"
      },
      tabTh: {
        label: " ...",
        labels: ["...", "...", "..."],
        data: [53, 20, 10]
      },
      circle: {
        background: "red",
        bordercolor: "blue",
        hoverbordercolor: "yellow",
        data: [100, 40, 60],
        mylabel: "TestDataLabel",
        mylabels: ["happy", "myhappy", "hello"]
      }
    };
  },
  computed: {
    user() {
      return this.$store.state.auth ? this.$store.state.auth.user : null;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  methods: {
    NavShow() {
      this.isDisplay = true;
    },
    NavHide() {
      this.isDisplay = false;
    },
    checkMe() {
      this.$store.dispatch("auth/fetch").then(result => {
        console.log("Check Me Result:", result.data.message);
      });
    },
    logOut() {
      this.$store.dispatch("auth/reset").then(() => {
        this.$router.push("/auth");
      });
    }
  }
};
</script>
