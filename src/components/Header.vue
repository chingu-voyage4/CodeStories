<template>
<v-layout row>
    <v-toolbar prominent app color="header-bg" class="header-content" height="75px">
        <v-flex sm4>
            <v-toolbar-title>Discover Stories</v-toolbar-title>
        </v-flex>
        <v-flex sm4 class="text-xs-center">
            <v-avatar size="125px">
                <img class='logo' src="~public/images/CHINGU_LOGO-04.png" alt="CodeStories logo" align="middle" />
            </v-avatar>
        </v-flex>
        <v-flex sm4>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat large left>Login</v-btn>
                <v-btn flat large left>Join</v-btn>
            </v-toolbar-items>
        </v-flex>
    </v-toolbar>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-bg{
    background: #395F5C;
}
.header-content{
    color: #5FD48A;
    text-transform: uppercase;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.logo{
    margin-top: 75px;    
}
</style>