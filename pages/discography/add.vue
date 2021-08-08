<template>
  <div class="add-member">
    <v-container>
      <Title :title="discography"></Title>
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
                    ><v-select
                      v-model="single"
                      label="シングル"
                      :items="singles"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-select
                      v-model="type"
                      label="タイプ"
                      :items="types"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="first"
                      label="楽曲①"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="second"
                      label="楽曲②"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="third"
                      label="楽曲③"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="fourth"
                      label="楽曲④"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="fiveth"
                      label="楽曲⑤"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="sixth"
                      label="楽曲⑥"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-text-field
                  v-model="url"
                  label="画像のURL"
                  required
                  validate-on-blur
                />
                <div class="register-btn">
                  <v-btn
                    :disabled="!registerValid"
                    block
                    color="#2BB7A4"
                    class="mr-4 white--text"
                    outlined
                    @click="discography_add"
                  >
                    ディスコグラフィー登録
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
      discography: 'DISCOGRAPHY登録ページ',
      single: '',
      type: '',
      first: '',
      second: '',
      third: '',
      fourth: '',
      fiveth: '',
      sixth: '',
      url: '',
      registerValid: false,
      types: ['TYPE-A', 'TYPE-B', 'TYPE-C', 'TYPE-D', '通常盤'],
      singles: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    };
  },
  methods: {
    discography_add() {
      console.log('処理スタート');
      const db = firebase.firestore();
      const discography = db.collection('Discography');
      const timestamp = firebase.firestore.Timestamp.now();
      console.log(timestamp);
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      // const uid = user.uid;
      discography
        .add({
          single: this.single,
          type: this.type,
          first: this.first,
          second: this.second,
          third: this.third,
          fourth: this.fourth,
          fiveth: this.fiveth,
          sixth: this.sixth,
          url: this.url,
          songs: [
            this.first,
            this.second,
            this.third,
            this.fourth,
            this.fiveth,
            this.sixth,
          ],
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
          alert('ディスコグラフィーを登録しました');
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
.desc {
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.register-btn {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 40vw;
}
</style>
