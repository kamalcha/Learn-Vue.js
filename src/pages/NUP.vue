<template>
	<v-slide-y-transition mode="out-in">
		<v-layout>
			<v-flex>

				<h1 class="page-heading mb-3">NUP
					<v-btn color="primary">Add New</v-btn>
				</h1>

                <!-- <v-layout row wrap class="mb-5">
                    <v-flex md12>
                        <v-card class="pa-3">
                            <h2>Test</h2>
                            <ul v-if="posts && posts.length">
                                <li v-for="post of posts" :key="post.id">
                                    <p><strong>{{post.name}}</strong></p>
                                    <p>{{post.email}} - {{post.phone}}</p>
                                    <p>{{post.address.city}}</p>
                                </li>
                            </ul>
                        </v-card>
                    </v-flex>
                </v-layout> -->

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
				    :items="posts"
				    :search="search"
				    v-model="selected"
				    select-all
					>
					    <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
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
                                <td>{{ props.item.website }}</td>
                                <td>{{ props.item.company.name }}</td>
                            </tr>
					    </template>

                        <template slot="expand" slot-scope="props">
                            <v-card flat>
                                <v-card-text>
                                    <dl>
                                        <dt class="d-inline">Name</dt>
                                        <dd>{{props.item.name}}</dd>

                                        <dt>Email</dt>
                                        <dd>{{props.item.email}}</dd>
                                    </dl>
                                </v-card-text>
                            </v-card>
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
import axios from "axios";

export default {
    data () {
        return {
            posts: [],
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
                { text: 'Website', value: 'website' },
                { text: 'Company', value: 'company' },
            ],
        }
    },

    // Fetches posts when the component is created.
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>

<style scoped>

</style>