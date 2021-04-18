<template>
<div class="max-w-3xl m-auto p-2">
  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Welcome to Your PWA Vue.js App" />
  <div class="update-dialog" v-if="prompt">
    <div class="update-dialog__content">
      A new version is found. Refresh to load it?
    </div>
    <div class="update-dialog__actions">
      <button
        class="update-dialog__button update-dialog__button--confirm"
        @click="update"
      >
        Update
      </button>
      <button
        class="update-dialog__button update-dialog__button--cancel"
        @click="prompt = false"
      >
        Cancel
      </button>
    </div>
  </div>
</div>
</template>

<script>
import HelloWorld from "./components/example/HelloWorld.vue";
import wb from "./registerServiceWorker";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    if (wb) {
      wb.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  },
  data() {
    return {
      prompt: false,
    };
  },
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    },
  },
};
</script>