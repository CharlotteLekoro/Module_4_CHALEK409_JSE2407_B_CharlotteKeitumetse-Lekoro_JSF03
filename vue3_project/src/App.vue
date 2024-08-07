<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

/**
 * The root component of the application.
 *
 * This component serves as the main entry point for the application, rendering
 * the navigation bar and the router view where different pages will be displayed.
 *
 * @component
 */
export default {
  name: "App",
  components: {
    /**
     * Navbar component
     */
    Navbar,
  },
};
</script>

<style>
:root {
  --primary-dark: #04082e;
  --primary-medium: #634e4e;
  --primary-light: #c1e6f7;
  --primary-accent1: #7a0f3e;
  --primary-accent2: #efa512;
}

body {
  font-family: BDSans-Regular, sans-serif !important;
  background-color: var(--primary-light);
  min-height: 100vh;
}
* {
  --tw-ring-color: rgba(53, 209, 123, 0.5);
}
</style>
