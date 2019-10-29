<template>

  <div id="rootShort">
    <notifications group="auth" />
    <h3>Reinitialisez votre mot de passe avec votre adresse email</h3>
    <form
      action=""
      method="post"
      id="form"
      @submit.prevent="submit"
    >
      <div>
        <div>
          <input
            v-model="email"
            required
            type='text'
            placeholder="Votre adresse email"
          >
        </div>
        <div
          @click="submit"
          class="sb-btn"
        >Reinitialiser le mot de passe </div>
      </div>
      <ul>
        <li style="margin:15px">
          <nuxt-link to="#!">Adresse email oublié</nuxt-link>
        </li>
        <li style="margin:15px">
          <nuxt-link to="#!">Code de sécurité oublié</nuxt-link>
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
      email: "jules.akimoto@sfr.fr",
      password: "Prosper29*",
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
    /*   window.gapiOnLoadCallback = () => {
      window.gapi.load("auth2", () => {
        window.google_auth2 = window.gapi.auth2.init({
          client_id: this.googleClientId,
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
        .dispatch("auth/login", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          console.log("result", result);
          this.alert = {
            type: "success",
            message: result.data.message,
            class: "form-response-default"
          };
          this.loading = false;
          this.$router.push(result.data.account_type);
        })
        .catch(error => {
          this.loading = false;
          if (error.response && error.response.data) {
            this.alert = {
              type: "error",
              message: error.response.data.message || error.response.status,
              class: "form-response-default"
            };
          }
        });
    },
    /*    google_submit() {
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
</style>
