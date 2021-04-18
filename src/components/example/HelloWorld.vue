<template>
  <div class="box-border border rounded-sm p-5">
    <h1>{{ msg }}</h1>
  </div>

  <input type="email" class="form-input mt-2 rounded-md">
  <br>
  <select class="form-select mt-2 rounded-md">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <br>
  <input type="checkbox" class="form-checkbox rounded text-pink-500" />
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
