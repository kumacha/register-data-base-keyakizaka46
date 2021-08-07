<template>
  <v-app dark>
    <BackCover />
    <HamburgerMenu />
    <GlobalNavigation />
    <v-main>
      <v-container>
        <div v-if="$route.path === sakuraPath">
          <back-ground-video :video-src="sakuraSrc" :video-type="type" />
        </div>
        <div v-else>
          <back-ground-video :video-src="src" :video-type="type" />
        </div>
        <Nuxt class="nuxt" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BackCover from '~/components/Atoms/BackCover.vue';
import BackGroundVideo from '~/components/Atoms/BackGroundVideo.vue';
import HamburgerMenu from '~/components/Molecules/HamburgerMenu.vue';
import GlobalNavigation from '~/components/Molecules/GlobalNavigation.vue';
export default {
  components: {
    BackCover,
    BackGroundVideo,
    HamburgerMenu,
    GlobalNavigation,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      sakuraPath: '/history/sakurazaka',
      src: require('~/assets/video/keyaki-backmovie.mp4'),
      sakuraSrc: require('~/assets/video/sakura-backmovie.mp4'),
      type: 'video/mp4',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'keyakizaka46',
      arrays: [],
    };
  },
};
</script>
<style scoped>
.nuxt {
  z-index: 100;
}
.navi-btn {
  z-index: 1;
  right: 0;
}
</style>
