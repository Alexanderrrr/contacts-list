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
  <ContactDetail :contact="routeContact"/>
  <ContactsTable :contactsList='contacts'/>

</div>
</template>


<script>
import ContactsTable from './ContactsTable';
import ContactDetail from './ContactDetail';

export default{
  components: {
    ContactsTable,
    ContactDetail,
  },
  data() {
    return{
      newContact: {
        firstName: '',
        lastName: '',
        email: '',
      },
      contacts: [
        {id: 1,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {id: 2,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {id: 3,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {id: 4,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {id: 5,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
        {id: 6,firstName: "Saban",lastName: "Saulic",email: "saban@saulic.grand"},
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

  computed: {
    routeContact(){
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  }
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
