<template>
<div>
  <h3>Contact List</h3>
  <table border=1>
    <thead>
      <th>KEY</th>
      <th>Firt Name</th>
      <th>Last Name</th>
      <th>email</th>
    </thead>
    <tbody>
      <tr v-for="(contact, index) in contacts" :key="index">
        <td>{{ index }}</td>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.email }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
export default{
  data() {
    return{
      contacts: [

        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},


      ]
    }
  }
}
</script>

<style scoped>
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
