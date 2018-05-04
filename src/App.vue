<template>
    <v-app>
        <v-navigation-drawer
        clipped
        app
        fixed
        v-model="drawer">
            <sidebar></sidebar>
        </v-navigation-drawer>

        <v-toolbar
        color="primary"
        dark
        app
        fixed
        clipped-left>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                99 ERP Agency
            </v-toolbar-title>
            <v-text-field
            flat
            solo-inverted
            prepend-icon="search"
            label="Search"
            class="hidden-sm-and-down"></v-text-field>
            <v-spacer></v-spacer>
            <v-badge color="red" overlap class="mr-2">
                <span slot="badge">3</span>
                <v-btn icon>
                    <v-icon medium>notifications</v-icon>
                </v-btn>
            </v-badge>
            <v-btn icon>
                <v-icon medium>account_circle</v-icon>
            </v-btn>
            <v-btn icon>
                <v-avatar size="24px" tile>
                    <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
                </v-avatar>
            </v-btn>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
    components: {
        AppHeader,
        Sidebar
    },
    data: () => ({
        drawer: true,
    }),
    props: {
        source: String
    }
}
</script>

<style>

</style>