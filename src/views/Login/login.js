import { auth } from '../../firebase';

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
    async handleLogin () {
      const { email, password } = this.user;
      this.loading = true;

      try {
        // Send sign in request
        await auth.signInWithEmailAndPassword(email, password);
        this.loading = false;

        // Redirect to previous location if there is one otherwise to homepage.
        this.$router.push(this.returnTo ? this.returnTo : '/');
      } catch (err) {
        this.loading = false;
        this.error.message = err.message;
      }
    }
  }
};
