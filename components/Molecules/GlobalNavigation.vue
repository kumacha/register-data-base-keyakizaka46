<template>
  <div v-show="!isMobile" class="site-header">
    <nav class="navigation">
      <ul class="global-navigation">
        <li v-for="(menu, index) in menus" :key="index">
          <p @click="pageJump({ path: menu.path })" v-text="menu.name"></p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 900,
      menus: [
        { id: 1, name: 'TOP', path: '/' },
        { id: 2, name: 'ABOUT', path: '/about' },
        { id: 3, name: 'HISTORY', path: '/history' },
        { id: 4, name: 'DISCOGRAPHY', path: '/discography' },
        { id: 5, name: 'MEMBER', path: '/member' },
        { id: 6, name: 'GALLERY', path: '/gallery' },
        { id: 7, name: 'LINK', path: '/link' },
      ],
    };
  },
  computed: {
    /**
     * スマホかどうかを判定する
     *
     * @return {Boolean}
     */
    isMobile() {
      return this.windowWidth < 900;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  methods: {
    pageJump(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Cinzel:wght@500&family=Open+Sans&display=swap');
.navigation {
  margin-bottom: 7%;
  z-index: 10000;
}
.global-navigation {
  margin-top: 2%;
  top: 0;
  right: 0;
  z-index: 10;
  position: fixed;
}
.global-navigation ul {
  list-style: none;
  float: left;
}
.global-navigation li {
  display: inline;
  color: white;
  margin: 0;
}
.global-navigation li p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  right: 0;
  display: inline;
  padding: 0px 0px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  margin: 0px 15px;
}
.global-navigation li p :hover {
  opacity: 70%;
}
.global-navigation li p::after {
  position: absolute;
  bottom: -1px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: white;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.4s;
}
.navigation li p:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
.navigation p {
  text-shadow: 5px 5px 2px #0f0f0f;
}
</style>
