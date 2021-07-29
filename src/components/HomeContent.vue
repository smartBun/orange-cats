<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col :span='8'>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='8'>
        <span>是不是脑残</span>
      </el-col>
      <el-col :span='8'>
        <el-button type='primary' @click="calc">Answer</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-input v-model="result" disabled></el-input>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String
  }
})
export default class HomeContent extends Vue {
  msg!: string
  value = ''
  options = [{
    value: '1',
    label: '你榕哥'
  }, {
    value: '2',
    label: '你洋哥'
  }, {
    value: '3',
    label: '你楠哥'
  }, {
    value: '4',
    label: '你雄哥'
  }]

  result = ''

  calc () : void {
    if (this.value === '1') {
      this.result = '那肯定啊'
    } else {
      this.result = '那绝逼不是'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
