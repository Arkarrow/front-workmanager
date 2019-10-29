<template>
  <div id="root">
    <client-only>
      <AppNavbar />
    </client-only>
    <client-only>
      <nuxt />
    </client-only>
    <client-only>
      <AppFooter />
    </client-only>
  </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNavbar from "~/components/AppNavbar.vue";
export default {
  components: {
    AppFooter,
    AppNavbar
  }
};
</script>
