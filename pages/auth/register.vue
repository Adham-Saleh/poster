<template lang="pug">
    .card.rounded-lg.flex.justify-center.items-center.w-screen.h-screen(class="p-[40px]")
        Alert(v-if="success || error" :success :error :message="msg")
        Form(:validationSchema="formSchema" @submit="handleSubmit")
          .flex.flex-col.gap-2(class="min-w-full lg:min-w-[300px] md:min-w-[200px]")
              .flex.gap-2.items-center
                button(@click="navigateTo('/')")
                  Icon(name="BackArrow")
                h1.font-medium(class="text-[24px]") Share your thoughts !
              Avatar.w-full(src="/images/allShops.jpeg" label="Adham Saleh" subText="U-1234567")
              
              InputText(placeholder="First name" name="firstName")
              InputText(placeholder="Last name" name="lastName")
              InputText(placeholder="Email" name="email")
              InputText(placeholder="password" name="password")

              button.rounded-lg.px-3.py-1.w-full(class="bg-orange-500 text-white") Sign in
              div.text-sm.text-center
                  span Already have an account ? #[NuxtLink.text-orange-500(to="/auth/login") sing in]

</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "~/store/auth";

interface createUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

definePageMeta({
  layout: "auth",
});

const auth = useAuthStore();
const { error, success, msg, openAlert } = useAlert();

const formSchema = yup.object({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Lase Name"),
  email: yup.string().email().required().label("Email"),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 letters")
    .label("Password"),
});

const handleSubmit = async function (values: createUser) {
  const { data, message, success } = await auth.signup(values);
  openAlert({ type: success ? "success" : "error", message });
  if (success) navigateTo("/login");
};
</script>

<style scoped></style>
