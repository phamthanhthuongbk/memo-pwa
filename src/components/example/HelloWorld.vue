<template>
  <div class="box-border border rounded-sm p-5">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
interface Hello {
  title: string,
  author: string,
  year: number
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    const a: Hello | null = null
    console.log(a);
    
    return {
      title: 'Vue 3 Guide',
      author: 'Vue Team',
      year: 2020
    }
  } 
}
</script>
