<script>
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon
  },
  data() {
    return {
      icons: [
        "skill-icons:react-light",
        "skill-icons:nodejs-light",
        "skill-icons:laravel-light",
        "skill-icons:nestjs-light",
        "skill-icons:nextjs-light",
        "skill-icons:postgresql-light",
        "skill-icons:vuejs-light",
        "skill-icons:expressjs-light",
        "skill-icons:react-light",
        "skill-icons:nodejs-light",
        "skill-icons:laravel-light",
        "skill-icons:nestjs-light",
        "skill-icons:nextjs-light",
        "skill-icons:postgresql-light",
      ]
    };
  }
};
</script>

<template>
  <!-- Hero -->
  <main class="flex flex-row items-center justify-center w-full mt-[116px] gap-10">
    <img src="@/assets/avatar.png" alt="avatar-hero"/>
    <div class="flex flex-col items-start justify-start gap-0">
      <div class="text-[48px] font-lalezar m-0"><span class="text-cream underline">Fullstack</span> <span class="text-red underline">Programmer</span></div>
      <div class="font-lato font-semibold italic text-[20px] text-white m-0">“Transforming Ideas into Interactive Digital Realities”</div>
      <div class="marquee flex flex-row items-start justify-start max-w-[450px] overflow-hidden mt-5">
      <div v-for="(icon, index) in icons" :key="index" class="text-[4.5rem] icon-container">
        <Icon :icon="icon" />
      </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.marquee .icon-container {
  display: inline-block;
  margin-right: 20px; /* Adjust as needed */
  animation: marquee 10s linear infinite;
  width: 10000px;
}

@keyframes marquee {
  100% {
    transform: translateX(-735px);
  }
}
</style>