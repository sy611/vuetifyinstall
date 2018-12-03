const app = new Vue({
  el: '#app',
  data: {
    text: 'Finder',
    message: 'Msg',
    valid: false,
    caseNum: '',
    rippleCat: {
      class: 'primary--text'
    },
    caseNumRules: [
      v => !!v || '案件管理番号を入力してください',
      v => /^[0-9]{6}-[0-9]{3}$/.test(v) || '形式が正しくありません'
    ],
    panel: [true],
    show: false
  },
  components: {
    'component-header': ComponentHeader,
    'text-anime': TextAnime
  },
  methods: {
    execForm() {
      //Enter入力時にフォームがsubmitされるのを止めるためのmethod
    },
    clickSearch(caseNum, valid) {
      console.log(valid)
      console.log('search clicked. : ' + caseNum)
    }
  }
})