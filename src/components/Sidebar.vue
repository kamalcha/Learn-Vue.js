<template>
<v-list dense>
    <!-- <v-list-tile to="/">
        <v-list-tile-action>
            <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile> -->

    <div class="subheader grey--text">Home</div>
    <v-list-tile to="/">
        <v-list-tile-action>
            <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>

    <v-spacer class="my-4"></v-spacer>

    <v-list-group prepend-icon="photo_library">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Media</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/media">
            <v-list-tile-title>Library</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/media/media-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group prepend-icon="business">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Projects</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/projects">
            <v-list-tile-title>All Projects</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/projects/project-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group prepend-icon="collections_bookmark">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>NUP</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/nup">
            <v-list-tile-title>All NUP</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/nup/nup-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group prepend-icon="account_balance_wallet">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Transactions</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/transactions">
            <v-list-tile-title>All Transactions</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/transactions/transaction-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group prepend-icon="payment">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Invoices</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/invoices">
            <v-list-tile-title>All Invoices</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/invoices/invoice-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-spacer class="my-4"></v-spacer>

    <v-list-group prepend-icon="work">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Developers</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/developers">
            <v-list-tile-title>All Developers</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/developers/developer-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group prepend-icon="person">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/users">
            <v-list-tile-title>All Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/users/user-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>
    
    <v-list-group prepend-icon="supervisor_account">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Agency Agents</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/agents">
            <v-list-tile-title>All Agents</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/agents/agent-new">
            <v-list-tile-title>Add New</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-tile to="/buyers">
        <v-list-tile-action>
            <v-icon>contacts</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>Buyers</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>

    <v-spacer class="my-4"></v-spacer>

    <v-list-tile to="/scheme">
        <v-list-tile-action>
            <v-icon>loyalty</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>Commission Scheme</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>

    <v-list-group prepend-icon="settings">
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/settings">
            <v-list-tile-title>General</v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/permissions">
            <v-list-tile-title>Permissions</v-list-tile-title>
        </v-list-tile>
    </v-list-group>
</v-list>
</template>

<script>
export default {
  
}
</script>


<style>
	
</style>