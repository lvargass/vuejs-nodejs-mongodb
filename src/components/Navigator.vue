<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vue TypeScript</router-link>
            <div class="">
                <ul class="navbar-nav">
                    <li class="navbar-item"><router-link to="/" class="nav-link">List Tasks</router-link></li>
                    <li class="navbar-item"><router-link to="/tasks/new" class="nav-link">Create Tasks</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavigatorT'
})
</script>
