<template>
  <div>
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
