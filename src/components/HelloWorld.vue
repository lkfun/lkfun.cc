<template>
  <div class="hello">
    <div class="groupitem" v-for="(i) in a" :key="i.title" >
      <a :href="i.address"  :title="i.title" target="_blank">{{i.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a: [{
        address: 'https://kook.top/w9LbfM',
        title: '开黑房间'
      }, {
        address: 'https://www.huya.com/qifei',
        title: 'dp直播间'
      }, {
        address: 'https://www.huya.com/20714626',
        title: '蝈蝈直播间'
      }, {
        address: 'https://live.acfun.cn/live/791849',
        title: 'LK直播间'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
    position: relative;
    display: block;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 1em;
  }
  a,a:visited {
    color: #474dff;
  }
  small{
    color: #999999;
    display:block;
    font-size:0.85em;
    padding: 0.3em 0.1em 0.3em 2em;
  }
  h2:before {
    content: "🔷";
    color: #474dff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    font-size: 1em;
    line-height: 1;
  }
  h2{
    margin: 0.2em auto;
   }
  h1{
    color: #474dff;
  }
  del{
    color:#ddddee;
  }
  del a{
    color:#a9a9dd;
  }
  .download{
    display: block;
    max-width: 80em;
    margin: 0 auto ;
    text-align: left;
  }
  .group{
    padding:1.5em 1.5em 3em 2em;
    line-height: 1.5em;
    font-size: 1em;
  }
  .groupitem{
    padding-bottom: 2em;
  }
  .groupitem span:before,.groupitem del:before{
    content: "⬜";
    color: #6b88ff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    line-height: 1em;
    font-weight: bold;
  }
</style>
