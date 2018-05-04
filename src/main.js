// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/vuetify/src/stylus/app.styl'

import {
    Vuetify,
    VAlert,
    VApp,
    VAvatar,
    VBadge,
    VBottomNav,
    VBottomSheet,
    VBreadcrumbs,
    VBtn,
    VBtnToggle,
    VCard,
    VCarousel,
    VCheckbox,
    VChip,
    VDataTable,
    VDatePicker,
    VDialog,
    VDivider,
    VExpansionPanel,
    VFooter,
    VForm,
    VGrid,
    VIcon,
    VList,
    VMenu,
    VNavigationDrawer,
    VPagination,
    VParallax,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VSelect,
    VSlider,
    VSnackbar,
    VSpeedDial,
    VStepper,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTextField,
    VTimePicker,
    VToolbar,
    VTooltip,
    transitions
} from 'vuetify'

Vue.use(Vuetify, {
    components: {
        Vuetify,
        VAlert,
        VApp,
        VAvatar,
        VBadge,
        VBottomNav,
        VBottomSheet,
        VBreadcrumbs,
        VBtn,
        VBtnToggle,
        VCard,
        VCarousel,
        VCheckbox,
        VChip,
        VDataTable,
        VDatePicker,
        VDialog,
        VDivider,
        VExpansionPanel,
        VFooter,
        VForm,
        VGrid,
        VIcon,
        VList,
        VMenu,
        VNavigationDrawer,
        VPagination,
        VParallax,
        VProgressCircular,
        VProgressLinear,
        VRadioGroup,
        VSelect,
        VSlider,
        VSnackbar,
        VSpeedDial,
        VStepper,
        VSubheader,
        VSwitch,
        VSystemBar,
        VTabs,
        VTextField,
        VTimePicker,
        VToolbar,
        VTooltip,
        transitions
    },
    theme: {
        primary: '#3893d9',
        secondary: '#FF609C',
        accent: '#4cba7e',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
})

import './assets/scss/main.scss'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})