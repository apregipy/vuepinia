import { defineStore } from 'pinia';
// Define store untuk counter
export const useCounterStore = defineStore('counter', {
// State untuk menyimpan data
state: () => ({
count: 0
}),// Actions untuk merubah state
actions: {
increment() {
this.count++;
},
decrement() {
this.count--;
}
},
// Getters untuk mengakses state dengan format tertentu
getters: {
doubleCount: (state) => state.count * 2
}
});