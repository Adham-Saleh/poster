<template lang="pug">
    .card.rounded-lg.flex.justify-center.items-center.w-screen.h-screen(class="p-[40px]")
      Alert(v-if="success || error" :success :error :message="msg")
      Form(:validationSchema="formSchema" @submit="handleSubmit")
        .flex.flex-col.gap-2(class="min-w-full lg:min-w-[300px] md:min-w-[200px]")
            button(@click="navigateTo('/')" type="button")
              Icon(name="BackArrow")
            Avatar.w-full.justify-center(src="/images/allShops.jpeg")
            h1.text-center.font-medium(class="text-[24px]") Welcome Back !
            
            InputText(type="text" placeholder="Email" name="email")
            InputText(type="text" placeholder="password" name="password")

            button.rounded-lg.px-3.py-1.w-full(class="bg-orange-500 text-white" type="submit") Sign in
            div.text-sm.text-center
                span Done have an account ? #[NuxtLink.text-orange-500(to="/auth/register") register now]

</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "~/store/auth";

definePageMeta({
  layout: "auth",
});

const auth = useAuthStore();
const token = useCookie("token");
const { error, success, msg, openAlert } = useAlert();

const formSchema = yup.object({
  email: yup.string().email().required().label("Email"),
  password: yup.string().required().label("Password"),
});

const handleSubmit = async function (values: any) {
  const { email, password } = values;
  const { data, message, success } = await auth.login(email, password);
  openAlert({ type: success ? "success" : "error", message });
  // if (!success) return;
  // auth.setData(data);
  token.value = data?.token;
  navigateTo("/");
};
</script>

<style scoped></style>
