import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import {
  acceptHMRUpdate,
  defineStore,
} from 'pinia';
import { useRouter } from 'vue-router'; // Import useRouter

import {
  auth,
  db,
} from '../firebaseConfig';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    registerLoading: false,
    loginLoading: false,
    registerError: "",
    loginError: "",
  }),

  actions: {
    async registerUser(username, email, password) {
      const router = useRouter(); // Get router instance
      this.registerLoading = true;
      this.registerError = "";

      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", response.user.uid), {
          uid: response.user.uid,
          username,
          email,
          avatar: "",
          avatarPath: "",
          bio: "",
          createdAt: Timestamp.fromDate(new Date()),
          online: true,
        });

        this.user = response.user;
        this.registerLoading = false;
        
        // Use try-catch for navigation
        try {
          await router.push('/chat');
        } catch (navError) {
          console.error("Navigation error:", navError);
        }

      } catch (err) {
        this.registerError = err.message;
        this.registerLoading = false;
        console.error("Registration error:", this.registerError);
      }
    },

    async loginUser(email, password) {
      const router = useRouter(); // Get router instance
      this.loginLoading = true;
      this.loginError = "";

      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateDoc(doc(db, "users", response.user.uid), {
          online: true,
        });

        this.user = response.user;
        this.loginLoading = false;
        sessionStorage.setItem('userEmail', response.user.email);

        // Use try-catch for navigation
        try {
          await router.push('/');
        } catch (navError) {
          console.error("Navigation error:", navError);
        }

      } catch (err) {
        this.loginError = err.message;
        this.loginLoading = false;
        console.error("Login error:", this.loginError);
      }
    },

    async logOut() {
      const router = useRouter(); // Get router instance
      try {
        // Update online status before signing out
        if (this.user?.uid) {
          await updateDoc(doc(db, "users", this.user.uid), {
            online: false,
          });
        }

        await signOut(auth);
        this.user = null;
        sessionStorage.removeItem('userEmail');

        // Use try-catch for navigation
        try {
          await router.push('/');
        } catch (navError) {
          console.error("Navigation error:", navError);
        }

      } catch (err) {
        console.error("Error logging out:", err);
      }
    },

    initUser() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.user = user;
          // Update online status when user is initialized
          await updateDoc(doc(db, "users", user.uid), {
            online: true,
          });
        } else {
          this.user = null;
        }
      });
    },
  },
});

// Add route guards
export const setupAuthGuards = (router) => {
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = authStore.user !== null;

    if (requiresAuth && !isAuthenticated) {
      next('/login');
    } else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
      next('/chat');
    } else {
      next();
    }
  });
};

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}