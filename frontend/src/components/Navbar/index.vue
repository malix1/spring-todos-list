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
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.link {
  color: black;
  text-decoration-line: none;
}
</style>
