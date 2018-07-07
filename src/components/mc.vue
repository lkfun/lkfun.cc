<template>
  <div>
    <h2>下载</h2>
    <p>{{msg[0]}}</p>
    <p>下载地址：<a :href="address">{{address}}</a></p>
    <p>{{msg[1]}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      address: 'http://pan.baidu.com/s/1pKDRTjH',
      msg: ['请先安装java', '下载解压安装后，在多人游戏中添加lkfun.cc:25565即可进入'],
      indata: {
        RpD: 0,
        ZpD: 0,
        RpN: 0,
        ZpN: 0,
        RtpD: 0,
        ZtpD: 0,
        Rmax: 0,
        Zmax: 0
      },
      result: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
