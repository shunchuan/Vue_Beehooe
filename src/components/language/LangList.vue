<template>
    <Select v-model="lang" size="small" @on-change="changeLang"
        style="width:80px;position:relative;margin-top: -8px">
        <Option v-for="item in langList" :value="item.value" :key="item.value">{{ item.text }}</Option>
    </Select>
</template>
<script>
export default {
  data() {
    return {
      langList: [
        ss
        {
          value: "zh-CN",
          text: "中文简体"
        },
        {
          value: "zh-TW",
          text: "中文繁体"
        },
        {
          value: "en-US",
          text: "English"
        }
      ],
      lang: "zh-CN"
    };
  },
  created() {
    this.lang = this.$store.state.lang.lang;
  },
  computed: {
    state() {
      return this.$store.state.app;
    }
    // ,
    // langList() {
    //   return this.$store.state.app.langList;
    // }
  },
  methods: {
    /* 改变语言 */
    changeLang(obj) {
      // window.localStorage.setItem("language", this.lang);
      this.$store.state.lang.commit("SET_LANG", this.lang)
      window.location.reload();
    }
  }
};
</script>

