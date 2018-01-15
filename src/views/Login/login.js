import login from '../../firebase/login';

export default {
  name: 'Login',
  props: ['returnTo'],
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      error: {
        message: ''
      }
    };
  },
  methods: {
    async handleEmailAndPasswordSignIn () {
      this.loading = true;

      try {
        // Send sign in request
        await login('local', this.user);
        this.loading = false;

        // Redirect to previous location if there is one otherwise to homepage.
        this.$router.push(this.returnTo ? this.returnTo : '/');
      } catch (e) {
        this.loading = false;
        if (e.code) {
          this.error.message = e.message;
        } else {
          this.error.message = "Something went wrong !";
        }

      }
    },
    async signInWithAuth (provider) {
      try {
        const res = await login(provider);
        console.log(res);

        // Redirect to previous location if there is one otherwise to homepage.
        this.$router.push(this.returnTo ? this.returnTo : '/');
      } catch (e) {
        if (e.code) {
          window.alert(e.message);
        } else {
          window.alert('Something went wrong !');
        }
      }
    }
  }
};
