import { onAuthStateChanged } from 'firebase/auth';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import { auth } from '../firebaseConfig';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path:"/",
    name: "chat",
    component: () => import("../views/Chat.vue"),
    meta: {
        auth: true,
    }
},
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            auth: false,
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            auth: false,
        }
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("../views/Profile.vue"),
        meta: {
            auth: true,
        }
    }
  
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


const currentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
      )
    })
  };
  
  router.beforeEach(async (to, from, next) => {
    const user = await currentUser();
    if (to.matched.some(record => record.meta.auth)) {
      if (user) {
        next();
      } else {
        next('/login');  // Redirect unauthenticated users to login
      }
    } else if ((to.path === '/login' || to.path === '/register') && user) {
      next('/chat');  // Redirect authenticated users away from login/register
    } else {
      next();  // Proceed to the route
    }
  });
export default router;