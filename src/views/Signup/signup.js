import register from '../../firebase/signup';

export default {
  name: 'Login',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      error: {
        message: ''
      }
    };
  },
  methods: {
    async handleRegisterWithEmailAndPassword () {
      this.loading = true;
      try {
        const res = await register('local', this.user);
        this.loading = false;
        console.log(res);

        // Redirect
        this.$router.push('/');
      } catch (e) {
        console.error(e);
        this.loading = false;
        if (e.code) {
          this.error.message = e.message;
        } else {
          this.error.message = "Something went wrong !";
        }
      }
    },
    async signUpWithProv (provider) {
      try {
        const res = await register(provider);
        console.log(res);

        // Redirect
        this.$router.push('/');
      } catch (e) {
        console.error(e);
        if (e.code) {
          window.alert(e.message);
        } else {
          window.alert("Something Went wrong");
        }
      }
    }
  }
};
