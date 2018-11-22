<template>
<div class="container">
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
  <ContactsTable :contactsList='contacts'/>

</div>
</template>


<script>
import ContactsTable from './ContactsTable'
export default{
  components: {
    ContactsTable
  },
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
