<template>
  <div>
    <header-content/>
    <main class="main-content">
      <nuxt/>
    </main>
    <footer-content/>
  </div>
</template>

<script>
import FooterContent from "~/components/Footer.vue";
import HeaderContent from "~/components/Header/Header.vue";

export default {
  components: {
    FooterContent,
    HeaderContent
  }
};
</script>

<style>
.main-content {
  margin-top: 70px;
}
</style>
