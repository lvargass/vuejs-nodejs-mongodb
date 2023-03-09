<template>
    <h1>
        Task List
    </h1>
    <ul class="list-group">
        <li v-for="(task, index) in tasks" :key="index" @click="$router.push(`/tasks/${task._id}`)" class="list-group-item list-group-item-action" style="cursor: pointer">
            {{ index + 1 }}. {{ task.title }}
        </li>
    </ul>
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task';
import { getTask } from '@/services/TaskService';
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        async loadData() {
            const res = await getTask();

            this.tasks = res.data;
        }
    },
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    mounted() {
         this.loadData();
    }
})
</script>
