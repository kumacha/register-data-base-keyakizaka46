<template>
  <div>
    <p class="member-title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
.member-title {
  text-align: center;
  font-size: 20px;
}
</style>
