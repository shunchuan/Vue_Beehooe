
<template>
    <div class="index-lang">
        <span @click="handleChangeLang">
            <template v-if="lang === 'zh-CN'">EN</template>
            <template v-else>中文</template>
        </span>
    </div>
</template>
<script>
export default {
  name: "lang",
  data() {
    // var l = bus.lang;
    var llist=this.$store.state.langList;
    return {
      lang: this.$lang
      // lang: bus.lang,
      // langlist:this.$store.state.langList
      // lang: l
    };
  },
  computed: {
    // suffix() {
    //   return this.lang === "zh-CN" ? "" : "-en";
    // }
  },
  methods: {
    /* 改变语言 */
    handleChangeLang() {
      const lang = this.lang === "zh-CN" ? "en-US" : "zh-CN";
      bus.$emit("on-change-lang", lang, "/");
    },
    mounted() {
      // this.lang = this.$lang;
    }
  }
};
</script>

            