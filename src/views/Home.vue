<template>
  <div class="home">
    <HomeContent msg="脑残探测器"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HomeContent from '@/components/HomeContent.vue' // @ is an alias to /src

@Options({
  components: {
    HomeContent
  }
})
export default class Home extends Vue {}
</script>
