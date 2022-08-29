<template>
  <div class="footer">
    <hr/>
<div style="width:400px;margin:0 auto; padding:20px 0;">
    <small>Copyright&nbsp;&copy;&nbsp;{{Copyrighttime}}&nbsp;www.lkfun.cc&nbsp;版权所有 </small>
    <a target="_blank" href="https://beian.miit.gov.cn/" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">备案/许可证编号：闽ICP备16018642号-1</p></a>
  <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35010402351403" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img :src="beian" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">闽公网安备 35010402351403号</p></a>
  </div>
    <hr/>
  </div>
</template>

<script>
var Copyrighttime = new Date().getYear() + 1900
export default {
  name: 'footer',
  data () {
    return {
      Copyrighttime,
      beian: require('../assets/beian.png')
    }
  }
}
</script>

<style scoped>
  .footer{
    text-align: center;
    margin-top: 50px;
    line-height:20px
  }
  small{
    color: rgb(128, 128, 128)
  }
  hr {/*透明渐变水平线*/
    width:80%;
    margin:10px auto;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(184, 167, 245, 0.75), rgba(0, 0, 0, 0));
  }
</style>
