<template>
    <div>aaa
      <input v-model="msg2"/>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      <hr/>
      <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
      <hr/>
      <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <hr/>
      <div id="example-6">
        <select v-model="selected" multiple style="width: 50px;">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
      </div>
      <hr/>
      <select v-model="selected_1">
        <option v-for="option in options" v-bind:value= "option.value" v-bind:key="option.text">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected_1 }}</span>
      <hr/>
      <input v-model.number="age" type="number">
      <button v-on:click="clickfunction2">lkfun</button>
      <hr/>
      <input v-model="city"/>
      <button v-on:click="clickfunction">搜索</button>
      <p>{{jsondata.result.city}}</p>
      <p>{{jsondata.result.date}}</p>
      <p>{{jsondata.result.weather}}</p>
      <p>{{jsondata.result.templow}}~{{jsondata.result.temphigh}}</p>
      <div v-for="da in jsondata.result.daily" v-bind:key="da.date">
        <span> {{da.date}}</span>
        <span> {{da.week}}</span>
        <span> 日出{{da.sunrise}}</span>
        <span> 日落{{da.sunset}}</span>
      </div>
    </div>
</template>
<script>
import jsondata from '../assets/weather.json'
var data = {
  msg: '777',
  msg2: '777',
  checked: true,
  checkedNames: [],
  picked: '',
  selected: [],
  selected_1: [],
  options: [
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
  ],
  age: 0,
  city: '北京',
  jsondata,
  jsondata2: jsondata
}
export default {
  data () {
    return data
  },
  methods: {
    clickfunction: function (data) {
      let rand = Math.random()
      this.msg = rand.toFixed(3)
      this.age = 100
      this.$axios({
        method: 'get',
        url: 'https://bird.ioliu.cn/weather?city=' + this.city,
        responseType: 'stream'
      })
        .then((response) => {
          this.jsondata = response.data
        })
    },
    clickfunction2: function (data) {
      this.$axios({
        method: 'get',
        url: 'http://lkfun.cc:81/api/guoguo',
        responseType: 'stream'
      })
        .then((response) => {
          alert(response.data)
        })
    }
  }
}
</script>
