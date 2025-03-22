import { defineStore } from "pinia";

interface createUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface response {
  data?: any;
  message?: string;
  success?: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: null,
      isLoggedIn: false,
    };
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const { data: login, error } = await useAsyncData("login", async () => {
          const res = await $fetch(
            "https://poster-api-yg1h.onrender.com/auth/login",
            { method: "POST", body: { email, password } }
          );
          return res;
        });
        const { data, message, success } = login?.value as response;
        return { data, message, success };
      } catch (error: any) {
        return { data: null, message: error.message, success: false };
      }
    },

    async signup(input: createUser) {
      try {
        const { firstName, lastName, email, password } = input;
        const { data: signup } = await useAsyncData("signup", async () => {
          const res = await $fetch(
            "https://poster-api-yg1h.onrender.com/users",
            {
              method: "POST",
              body: {
                firstName,
                lastName,
                email,
                password,
                fullName: firstName + " " + lastName,
              },
            }
          );
          return res;
        });
        const { data, message, success } = signup?.value as response;
        return { data, message, success };
      } catch (error: any) {
        return { data: null, message: error.message, success: false };
      }
    },
  },

  async me() {
    const { data: me } = await useAsyncData("getMe", async () => {
      const res = await $fetch("https://poster-api-yg1h.onrender.com/me");
      return res;
    });
    const { data, message, success } = me?.value as response;
    return { data, message, success };
  },

  setData(currentUser) {
    this.user = currentUser;
    this.isLoggedIn = true;
  },
});
