<template>
  <div class="backvideo">
    <video
      :src="videoSrc"
      :type="videoType"
      playsinline
      loop
      autoplay
      muted
    ></video>
  </div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      required: true,
      type: String,
    },
    videoType: {
      required: true,
      type: String,
      default: 'video/mp4',
    },
  },
};
</script>

<style>
video {
  position: fixed;
  display: block;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  width: auto;
  height: auto;
  justify-content: center;
  z-index: -1;
}
/*画面サイズが変わっても常に動画の中央が表示されるようにする*/
/*動画よりも画面が横に長くなるとき用*/
@media (aspect-ratio: 16/9), (min-aspect-ratio: 16/9) {
  video {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}

/*動画よりも画面が縦に長くなるとき用*/
@media (max-aspect-ratio: 16/9) {
  video {
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
