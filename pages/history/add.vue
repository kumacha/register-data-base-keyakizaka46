<template>
  <div class="add-member">
    <v-container>
      <Title :title="history"></Title>
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
                      label="タイトル"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="place"
                      label="場所"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="first"
                      label="開始日付（YYYY年MM月DD日）"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="second"
                      label="終了日付（YYYY年MM月DD日）"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-select
                  v-model="type"
                  label="タイプ"
                  :items="types"
                  required
                  validate-on-blur
                />
                <v-text-field
                  v-model="detail"
                  label="詳細"
                  required
                  validate-on-blur
                />
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
                    @click="history_add"
                  >
                    ヒストリー登録
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
      history: 'HISTORY登録ページ',
      title: '',
      place: '',
      first: '',
      second: '',
      type: '',
      detail: '',
      url: '',
      registerValid: false,
      types: ['Live', 'Single', 'Album', 'Announce', 'Drama', 'Other'],
      graduates: ['現役', '卒業済'],
    };
  },
  methods: {
    history_add() {
      console.log('処理スタート');
      const db = firebase.firestore();
      const history = db.collection('History');
      const timestamp = firebase.firestore.Timestamp.now();
      console.log(timestamp);
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      // const uid = user.uid;
      history
        .add({
          title: this.title,
          place: this.place,
          first: this.first,
          second: this.second,
          type: this.type,
          detail: this.detail,
          url: this.url,
          dates: [this.first, this.second],
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
          alert('プロジェクトを登録しました');
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
