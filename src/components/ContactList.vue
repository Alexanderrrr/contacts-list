<template>
<div>
  <h3>Add contact</h3>
  <form @submit.prevent="addContact">
    <label>First Name</label>
    <input v-model="newContact.firstName" placeholder="first name"><br>

    <label>Last Name</label>
    <input v-model="newContact.lastName" placeholder="last name"><br>

    <label>Email</label>
    <input v-model="newContact.email" placeholder="email"><hr>

    <button type="submit">ADD CONTACT</button>
  </form>
  <h3>Contact List</h3>

  <table border=1>
    <thead>
      <th>KEY</th>
      <th>Firt Name</th>
      <th>Last Name</th>
      <th>email</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="(contact, index) in contacts" :key="index">
        <td>{{ index }}</td>
        <td>{{ contact.firstName }}</td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.email }}</td>
        <td>
          <button @click='removeContact(contact)'>Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
export default{

  data() {
    return{
      newContact: {
        firstName: '',
        lastName: '',
        email: '',
      },
      contacts: [
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
      ]
    }
  },

  methods: {
    addContact() {
      this.contacts.push(this.newContact);
      this.newContact = {};
    },

    removeContact(contact){
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
      console.log(index);
    }
  },
}
</script>

<style scoped>
template {
  text-align: center;
}
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
