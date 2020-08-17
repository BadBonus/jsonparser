<template>
  <table v-on="$listeners" class="table">
    <thead>
    <tr>
      <th v-for="(column, name) in columnsArr" :key="name" :style="{ width: column.width + '%' }">{{column.title}}</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="row in dynamicData" :key="row.join('')" @dblclick="onRowDblClick(row)">
      <td v-for="(data, n) in row" :key="''.concat(n,data)">
        <input v-if="editRow === row.id" v-model="editObject.id" @blur="onBlurClick"/>
        <span v-else>{{data}}</span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Table",
    props: {
      columns: Array,
      data: Object
    },
    data() {
      return {
        columnsArr: this.columns.map(c => Object.values(c)[0]),
        dynamicData: [],
        editRow: -1,
        editObject: {}
      }
    },
    beforeMount: async function () {
      if (this.data.type === 'dynamic') {
        //this.dynamic = await axios.get(data.source);
        this.dynamicData = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
          .then(res => res.data.map(p => Object.values(p)))
      } else {
        this.dynamicData = this.data.source;
      }

      for (let i = 0; i < this.columnsArr.length; i++) {
        if (this.columnsArr[i].sort === "alphabetically") {
          this.dynamicData.sort((a, b) => {
            const nameA = a[i].toUpperCase(); // ignore upper and lowercase
            const nameB = b[i].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0; // names must be equal
          })
        }
      }


    },
    methods: {
      onRowDblClick(row) {
        this.editRow = row.id;
        for (const prop in row) {
          this.editObject[prop] = row[prop];
        }
      },
      onBlurClick() {
        this.editRow = -1;
        this.editObject = {};
      }
    }
  }
</script>

<style scoped>
  .table {

  }
</style>
