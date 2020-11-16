<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    ceshi
    <textarea name="details" :id="tinymceId"></textarea>
    <!-- <text></text> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import text from "../components/tinymce/index";
export default {
  // components: {
  //   text,
  // },
  data() {
    return {
      tinymceId:
        "vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "")
    };
  },

  mounted() {
    this.initTinymce();
  },
  // activated() {
  //   this.initTinymce();
  // },
  methods: {
    initTinymce() {
      const _this = this;
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        branding: false,
        language: "zh_CN",
        height: 550,
        body_class: "panel-body editor-content",
        object_resizing: false,
        plugins:
          "print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave   autoresize   ",
        toolbar:
          "code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                     styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                     table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs",
        fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        font_formats:
          "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif",

        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          /****改成了只绑定keyup事件   要不然编辑的时候一进来就走这个方法了*/

          editor.on("KeyUp", () => {
            _this.hasChange = true;
            _this.$emit("input", editor.getContent());
          });
        }
      });
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent() {
      return window.tinymce.get(this.tinymceId).getContent();
    }
  }
};
</script>
