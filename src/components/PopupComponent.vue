<template>
  <div
    v-if="props.isVisible"
    class="fixed top-0 left-0 right-0 bottom-0 bg-gray-500/75 flex justify-center items-center"
  >
    <div class="w-full xl:w-3/5 mx-2.5 sm:mx-10 xl:mx-0 bg-white rounded-lg p-6 xl:pb-0 relative">
      <button
        class="bg-red-500 rounded-md font-inter text-white w-16 ml-auto absolute right-6 hover:opacity-80 transition-opacity"
        @click="handleClose"
      >
        Close
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  handleClose: {
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
