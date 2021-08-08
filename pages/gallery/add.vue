<template>
  <div class="add-member">
    <v-container>
      <Title :title="gallery"></Title>
      <v-row justify="center">
        <v-col sm="12">
          <v-row>
            <v-col sm="12">
              <v-form
                ref="register_form"
                v-model="registerValid"
                lazy-validation
              >
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="title"
                      label="動画のタイトル"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="top_url"
                      label="サムネイルのURL"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="youtube_url"
                      label="YouTubeのURL"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="iframe_url"
                      label="iframeタグのURL"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>

                <v-row
                  ><v-col
                    ><v-select
                      v-model="video_type"
                      :items="videos"
                      label="動画のタイプ" /></v-col
                  ><v-col
                    ><v-select
                      v-model="single_type"
                      :items="singles"
                      label="シングルタイプ" /></v-col
                ></v-row>
                <v-select v-model="unit" :items="units" label="担当ユニット" />
                <div class="register-btn">
                  <v-btn
                    :disabled="!registerValid"
                    block
                    color="#2BB7A4"
                    class="mr-4 white--text"
                    outlined
                    @click="gallery_add"
                  >
                    ギャラリー登録
                  </v-btn>
                </div>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
import Title from '~/components/Atoms/Title.vue';
export default {
  components: {
    Title,
  },
  data() {
    return {
      gallery: 'GALLERY追加ページ',
      title: '',
      top_url: '',
      youtube_url: '',
      iframe_url: '',
      video_type: '',
      single_type: '',
      unit: '',
      registerValid: false,
      videos: ['single', 'coupling', 'trailer', 'その他'],
      singles: [
        '1st',
        '2nd',
        '3rd',
        '4th',
        '5th',
        '6th',
        '7th',
        '8th',
        '真っ白',
        '永遠',
        '共和国',
        'その他',
      ],
      units: [
        'フルメンバー',
        'ゆいちゃんず',
        'てちねる',
        'てちねるゆいちゃんず',
        '青空とMARRY',
        'FIVE CARDS',
        '五人囃子',
        '156',
        '線香姉妹',
        '少女フレンズ',
        'てちソロ',
        'ねるソロ',
        'ずーみんソロ',
        'その他',
      ],
    };
  },
  methods: {
    gallery_add() {
      console.log('処理スタート');
      const db = firebase.firestore();
      const gallery = db.collection('Gallery');
      const timestamp = firebase.firestore.Timestamp.now();
      console.log(timestamp);
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      // const uid = user.uid;
      gallery
        .add({
          title: this.title,
          src: this.top_url,
          video_src: this.youtube_url,
          iframe_url: this.iframe_url,
          video_type: this.video_type,
          single_type: this.single_type,
          unit: this.unit,
          createdAt: timestamp,
          updateAt: timestamp,
        })
        .then((ref) => {
          // (this.kanjiFirst = ''),
          //   (this.kanjiSecond = ''),
          //   (this.hiraganaFirst = ''),
          //   (this.hiraganaSecond = ''),
          //   (this.memberUrl = ''),
          //   (this.memberBirth = ''),
          //   (this.memberFrom = ''),
          //   (this.memberNow = ''),
          //   (this.memberColorFirst = ''),
          //   (this.memberColorSecond = ''),
          //   (this.memberUnitFirst = ''),
          //   (this.memberUnitSecond = ''),
          //   (this.memberUnitThird = ''),
          alert('galleryを登録しました');
          console.log('推してますね');
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
.add-member {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  max-width: 800px;
  z-index: 100;
}
.container {
  margin-left: auto;
  margin-right: auto;
}
.register-btn {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 40vw;
}
</style>
