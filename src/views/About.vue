<template>
<div>
<h1>Counter: {{ counter.count }}</h1>
<button @click="counter.increment">Increment</button>
<button @click="counter.decrement">Decrement</button>
<p>Double count: {{ counter.doubleCount }}</p>
</div>
</template>
<script>
// Mengimpor store yang sudah dibuat
import { useCounterStore } from '../stores/counter';

export default {
setup() {
// Menggunakan store yang sudah dibuat
const counter = useCounterStore();
return { counter };
}
};
</script>