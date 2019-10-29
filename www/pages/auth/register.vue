<template>

  <div id="root">
    <notifications group="auth" />
    <h3>Inscrivez vous en quelques clics avec l'un de vos reseaux social</h3>
    <form
      method="post"
      id="form"
      @submit.prevent="submit"
    >

      <div class="row">
        <div class='ui three buttons'>
          <button class="ui labeled facebook icon button">
            <i class="facebook icon"></i> Facebook
          </button>
          <button class="ui labeled twitter icon button">
            <i class="twitter icon"></i> Twitter
          </button>
          <button class="ui labeled google plus icon button">
            <i class="google plus icon"></i> Google
          </button>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col">
            <input
              v-model="prenom"
              required
              type='text'
              placeholder='Votre prénom'
            >
          </div>
          <div class="col">
            <input
              v-model="nom"
              required
              type='text'
              placeholder='Votre nom '
            ></div>
        </div>
        <div>
          <input
            v-model="email"
            required
            type='text'
            placeholder="Votre adresse email"
          >
        </div>
        <div class="row">
          <div class="col">
            <input
              v-model="password"
              required
              type='password'
              placeholder="Votre mot de passe"
            >
          </div>
          <div class="col">
            <input
              v-model="password_repeat"
              required
              type='password'
              placeholder="Confirmer votre mot de passe"
            >
          </div>
        </div>
        <p style="text-align:center">En vous inscrivant sur work-manager, vous reconnaissez avoir lu et approuvé notre politique d'utilisation</p>
        <div
          @click="submit"
          class="sb-btn"
        >S'inscrire</div>
      </div>
      <ul>
        <li style="margin:15px">
          <nuxt-link to="/auth/">J'ai déjà un compte</nuxt-link>
        </li>
      </ul>

    </form>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css"
      }
    ]
  },
  data() {
    return {
      prenom: "",
      nom: "",
      email: "",
      password: "",
      password_repeat: "",

      alert: null,
      loading: false,
      google_loading: false,
      google_ready: false
    };
  },
  computed: {
    user() {
      return this.$store.state.auth ? this.$store.state.auth.user : null;
    }
  },
  mounted() {
    /* window.gapiOnLoadCallback = () => {
      window.gapi.load("auth2", () => {
        window.google_auth2 = window.gapi.auth2.init({
          client_id: googleClientId,
          fetch_basic_profile: false,
          scope: "profile email"
        });
      });
      this.google_ready = true;
    };
    const installGoogleSdkScript = (d, s, id) => {
      if (d.getElementById(id)) {
        this.google_ready = true;
        return;
      }
      let fjs = d.getElementsByTagName(s)[0];
      let js = d.createElement(s);
      js.id = id;
      js.src =
        "https://apis.google.com/js/platform.js?onload=gapiOnLoadCallback";
      fjs.parentNode.insertBefore(js, fjs);
    };
    installGoogleSdkScript(document, "script", "google-jssdk");
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    */
  },
  methods: {
    submit() {
      this.alert = null;
      this.loading = true;
      this.$store
        .dispatch("auth/register", {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password,
          password_repeat: this.password_repeat
        })
        .then(result => {
          console.log("result", result);
          this.alert = {
            type: "success",
            message: result.data.message,
            class: "form-response-default"
          };
          this.$notify({
            type: result.data.type,
            duration: 15000,
            text: result.data.message,
            group: "auth"
          });
          this.loading = false;
          this.$router.push(result.data.account_type);
        })
        .catch(error => {
          this.loading = false;
          if (error.response && error.response.data) {
            this.$notify({
              type: error.response.data.type,
              group: "auth",
              duration: 10000,
              title: "Attention !",
              text: error.response.data.message
            });
          }
        });
    },
    /*  google_submit() {
      if (!this.google_ready) return;
      this.alert = null;
      this.google_loading = true;
      window.google_auth2
        .signIn()
        .then(() =>
          this.$store.dispatch(
            "auth/login_google",
            window.google_auth2.currentUser.get().Zi.access_token
          )
        )
        .then(result => {
          this.alert = { type: "success", message: result.data.message };
          this.google_loading = false;
          this.$router.push("/admin");
        })
        .catch(error => {
          this.google_loading = false;
          if (error.response && error.response.data) {
            this.alert = {
              type: "error",
              message: error.response.data.message || error.response.status,
              class: "form-response-default"
            };
          }
        });
    },*/
    fadeOutEffect() {
      var fadeTarget = document.getElementById("AlertServer");
      var fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 200);
    },
    logOut() {
      this.$store.dispatch("auth/reset").then(() => {
        this.alert = {
          type: "error",
          message: "Vous vous êtes déconnecté avec succès",
          class: "form-response-response-true"
        };
      });
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  text-align: center;
}
.sb-btn {
  cursor: pointer;
  font-size: 19px;
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 15px;
  background: transparent;
  border: solid 1px black;
  padding: 20px;
  border-radius: 4px;
  width: 250px;
  color: black;
}
form input {
  border: solid 1px #d6d7db;
  margin: 15px;
  border: none;
  height: 45px;
  width: 100%;
  padding: 15px;
}
form {
  padding: 75px;
}
</style>
