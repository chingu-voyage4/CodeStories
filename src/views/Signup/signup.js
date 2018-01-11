import { auth, db } from '../../firebase';
import userSchema from '../../schema/user';

export default {
  name: 'Login',
  props: ['returnTo'],
  data () {
    return {
      user: {
        username: '',
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
    async handleRegister () {
      const { username, email, password } = this.user;
      this.loading = true;

      try {
        // Send register request
        const user = await auth.createUserWithEmailAndPassword(email, password);
        const { uid } = user;

        // Update username as display name
        await user.updateProfile({ displayName: username });

        // Get user ref
        const userRef = db.ref(`users/${uid}`);

        // Create a user
        await userRef.set({
          ...userSchema,
          uid,
          username
        });

        // Redirect to home
        this.$router.push('/');

        this.loading = false;
      } catch (err) {
        this.loading = false;
        this.error.message = err.message;
      }
    }
  }
};
