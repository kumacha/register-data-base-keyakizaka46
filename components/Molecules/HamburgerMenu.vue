<template>
  <div class="hamburger-menu">
    <div class="manu-wrap">
      <!-- <button type="button" class="menu-btn" @click="open = !open">
        <v-icon>mdi-menu</v-icon>
      </button> -->
      <button
        v-show="isMobile"
        :class="{ active: active }"
        class="menu-trigger"
        @click="active = !active"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="menu" :class="{ 'is-active': active }">
      <div v-for="(menu, index) in menus" :key="index" class="menu__item">
        <nuxt-link
          class="menu-parts"
          :to="`/${menu.path[0]}`"
          event=""
          @click.native.prevent="trigger"
          v-text="menu.name"
        ></nuxt-link>
        <div v-if="menu.sub">
          <nuxt-link
            class="sub-parts"
            :to="`/${menu.path[1]}`"
            event=""
            @click.native.prevent="trigger"
            v-text="menu.sub[0]"
          ></nuxt-link>
          <nuxt-link
            class="sub-parts"
            :to="`/${menu.path[2]}`"
            event=""
            @click.native.prevent="trigger"
            v-text="menu.sub[1]"
          ></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      windowWidth: 900,
      menus: [
        { id: 1, name: 'TOP', path: [''] },
        { id: 2, name: 'ABOUT', path: ['about'] },
        {
          id: 3,
          name: 'HISTORY',
          sub: ['- SAKURAZAKA'],
          path: ['history', 'history/sakurazaka'],
        },
        { id: 4, name: 'DISCOGRAPHY', path: ['discography'] },
        {
          id: 5,
          name: 'MEMBER',
          sub: ['- 1期生', '- 2期生'],
          path: ['member', 'member/first', 'member/second'],
        },
        { id: 6, name: 'GALLERY', path: ['gallery'] },
        { id: 7, name: 'LINK', path: ['link'] },
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
    trigger() {
      if (this.isMobile) {
        this.active = false;
        this.$router.push({ path: event.target.pathname });
      } else {
        this.$router.push({ path: event.target.pathname });
      }
    },
  },
};
</script>

<style>
.hamburger-menu {
  margin: 0 0 0 auto;
  padding: 0px 10px;
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  z-index: 110;
}
.menu-trigger {
  position: relative;
  width: 20px;
  height: 16px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 7px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(7px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  left: 50%;
  opacity: 0;
  animation: active-menu-bar02 0.8s forwards;
}
@keyframes active-menu-bar02 {
  100% {
    height: 0;
  }
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-7px) rotate(45deg);
}
/*----------------------------
* メニュー開閉ボタン
*----------------------------*/
.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
/*----------------------------
* メニュー本体
*----------------------------*/
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(3, 0, 0, 0.85);
}
.menu__item {
  width: 100%;
  height: auto;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
}
.menu-parts a {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  right: 0;
  text-decoration: none;
  font-size: 18px;
  color: #ffffff;
}
.sub-parts {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 12px;
}
/*----------------------------
* アニメーション部分
*----------------------------*/
/* アニメーション前のメニューの状態 */
.menu {
  transform: translateX(100vw);
  transition: all 0.2s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active {
  transform: translateX(0);
}
</style>
