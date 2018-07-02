<template>
  <div>
    <p>日均阅读:<input v-model.number="indata.RpD"/></p>
    <p>日均点赞:<input v-model.number="indata.ZpD"/></p>
    <p>篇均阅读:<input v-model.number="indata.RpN"/></p>
    <p>篇均点赞:<input v-model.number="indata.ZpN"/></p>
    <p>头条日均:<input v-model.number="indata.RtpD"/></p>
    <p>头条点赞:<input v-model.number="indata.ZtpD"/></p>
    <p>最高阅读:<input v-model.number="indata.Rmax"/></p>
    <p>最高点赞:<input v-model.number="indata.Zmax"/></p>
    <button v-on:click="getwci">计算</button>
    <h2>{{result}}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    getwci: function (data) {
      this.$axios({
        method: 'get',
        params: this._data.indata,
        url: 'https://api.lkfun.cc/guoguo/',
        responseType: 'stream'
      })
        .then((response) => {
          this.result = response.data
        })
    }
  },
  data () {
    return {
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
