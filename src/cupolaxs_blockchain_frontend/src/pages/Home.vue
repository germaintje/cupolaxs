<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl mt-36 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Cupolaxs Cell Booking Hub
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          A simple cell booking service running on a innovative ICP chain. Start now with creating your account.</p>
        <Login />
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="@/assets/cupola.png" alt="mockup" class="h-max">
      </div>
    </div>
  </section>
</template>

<script setup>

import Login from "@/components/Login.vue";
</script>