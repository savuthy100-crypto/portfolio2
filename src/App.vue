<template>
    <div>
        <div>
            <Navbar class="sticky top-4 z-10"/>
            <Banner/>
            <sidebar
            :class="!sidebar.open ? '' : '-translate-x-full' " class="fixed top-0 left-0 shadow-xl transform transition-transform duration-300 z-50"/>
            <div v-if="!sidebar.open" @click="sidebar.toggleSidebar()" class="fixed inset-0 bg-black/60 z-20"></div>
        </div>
    </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Sidebar from "./components/Sidebar.vue";

import { useOpenStore } from "./store/OpenSidebar";
import { storeToRefs } from "pinia";

const sidebar = useOpenStore();
const { open } = storeToRefs(sidebar);
</script>