<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="info">
      <b-navbar-brand>
        <router-link class="link" to="/">Home Page</router-link>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link class="link" to="/todos">Todos</router-link>
        </b-nav-item>
        <b-nav-item class="link" v-on:click="logout" v-if="isLoggedIn">Logout</b-nav-item>
        <b-nav-item v-else>
          <router-link class="link" to="/login">Login</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: mapGetters({
    isLoggedIn: "users/isLoggedIn"
  }),
  methods: mapActions({
    logout: "users/logout"
  })
};
</script>

<style scoped>
.link {
  color: black;
  text-decoration-line: none;
}
</style>
