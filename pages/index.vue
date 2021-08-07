<template>
  <div class="add-member">
    <v-container>
      <Title></Title>
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
                      v-model="kanjiFirst"
                      label="氏（漢字）"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="kanjiSecond"
                      label="名（漢字）"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="hiraganaFirst"
                      label="氏（ひらがな）"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="hiraganaSecond"
                      label="名（ひらがな）"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-text-field
                  v-model="memberUrl"
                  label="画像のURL"
                  required
                  validate-on-blur
                />
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="memberFrom"
                      label="出身地"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="memberBirth"
                      label="生年月日"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row
                  ><v-col
                    ><v-select
                      v-model="memberNumber"
                      :items="items"
                      label="何期生" /></v-col
                  ><v-col
                    ><v-select
                      v-model="memberNow"
                      :items="graduates"
                      label="現在" /></v-col
                ></v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="memberColorFirst"
                      label="サイリウムカラー①"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="memberColorSecond"
                      label="サイリウムカラー②"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-text-field
                      v-model="memberUnitFirst"
                      label="所属ユニット①"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="memberUnitSecond"
                      label="所属ユニット②"
                      required
                      validate-on-blur
                  /></v-col>
                  <v-col
                    ><v-text-field
                      v-model="memberUnitThird"
                      label="所属ユニット③"
                      required
                      validate-on-blur
                  /></v-col>
                </v-row>
                <div class="register-btn">
                  <v-btn
                    :disabled="!registerValid"
                    block
                    color="#2BB7A4"
                    class="mr-4 white--text"
                    outlined
                    @click="project_add"
                  >
                    メンバー登録
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
      kanjiFirst: '',
      kanjiSecond: '',
      hiraganaFirst: '',
      hiraganaSecond: '',
      memberUrl: '',
      memberFrom: '',
      memberNow: '',
      memberBirth: '',
      memberNumber: '',
      memberColorFirst: '',
      memberColorSecond: '',
      memberUnitFirst: '',
      memberUnitSecond: '',
      memberUnitThird: '',
      registerValid: false,
      items: ['1期生', '2期生'],
      graduates: ['現役', '卒業済'],
    };
  },
  methods: {
    project_add() {
      console.log('処理スタート');
      const db = firebase.firestore();
      const member = db.collection('members');
      const timestamp = firebase.firestore.Timestamp.now();
      console.log(timestamp);
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      // const uid = user.uid;
      member
        .add({
          first: this.kanjiFirst,
          second: this.kanjiSecond,
          full: this.kanjiFirst + '' + this.kanjiSecond,
          firstName: this.hiraganaFirst,
          secondName: this.hiraganaSecond,
          fullName: this.hiraganaFirst + '' + this.hiraganaSecond,
          number: this.memberNumber,
          src: this.memberUrl,
          birth: this.memberBirth,
          from: this.memberFrom,
          now: this.memberNow,
          colors: [this.memberColorFirst, this.memberColorSecond],
          units: [
            this.memberUnitFirst,
            this.memberUnitSecond,
            this.memberUnitThird,
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
