<template lang="html">
<div class="">

  <h1>ContactsTable</h1>
  <table border=1>
    <thead>
      <th>KEY</th>
      <th>Firt Name</th>
      <th>email</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="(contact, index) in contactsList" :key="index">
        <td>{{ index }}</td>
        <td>
        <router-link :to="{ name: 'contact-details', params: {id: contact.id}}">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
        </td>
        <td>{{ contact.email }}</td>
        <td>
          <button class="btn btn-danger" @click='removeContact(contact)'>Remove</button>
        </td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>
export default {
  props: ['contactsList']
}
</script>

<style lang="css">
</style>
