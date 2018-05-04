<template>
	<v-slide-y-transition mode="out-in">
		<v-layout>
			<v-flex>

				<h1 class="page-heading mb-3">Users
					<v-btn color="primary" class="elevation-4">Add New</v-btn>
				</h1>

				<v-card>
					<v-card-title>
				      	<v-spacer></v-spacer>
				      	<v-text-field
				        append-icon="search"
				        label="Search"
				        single-line
				        hide-details
				        v-model="search"
				      	></v-text-field>
				    </v-card-title>

					<v-data-table
				    :headers="headers"
				    :items="items"
				    :search="search"
				    v-model="selected"
				    select-all
				    class="elevation-1"
					>
					    <template slot="items" slot-scope="props">
					    	<td>
					    		<v-checkbox
					    		primary
					    		hide-details
					    		v-model="props.selected"
					    		></v-checkbox>
					    	</td>
							<td>{{ props.item.id }}</td>
							<td>{{ props.item.name }}</td>
							<td>{{ props.item.email }}</td>
							<td>{{ props.item.phone }}</td>
					    </template>

					    <v-alert slot="no-results" :value="true" color="error" icon="warning">
					        Your search for "{{ search }}" found no results.
					    </v-alert>
					</v-data-table>
				</v-card>

			</v-flex>
		</v-layout>
	</v-slide-y-transition>
</template>

<script>
  export default {
    data () {
      return {
      	search: '',
      	selected: [],
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: true,
            value: 'id'
          },
          { text: 'Nama', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone Number', value: 'phone' },
        ],
        items: [
          {
          	value: false,
            id: 'usr0001',
            name: 'Daniel McDonald',
            email: 'mcdonald@99.co',
            phone: '(62) 8180 9494 658',
          },
          {
          	value: false,
            id: 'usr0002',
            name: 'Erica Romaguera',
            email: 'romaguera@99.co',
            phone: '(62) 347 8854',
          },
          {
          	value: false,
            id: 'usr0003',
            name: 'Carole Marvin',
            email: 'carolemarvin@99.co',
            phone: '(62) 134 9519',
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
