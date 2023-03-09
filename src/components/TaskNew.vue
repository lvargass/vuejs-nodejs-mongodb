<template>
    <div class="col-md-4 offset-4">
        <h1 align="center">Create Task</h1>
        <form @submit.prevent="saveTask()" class="card card-body bg-white">
            <input type="text" placeholder="Titulo" v-model="task.title" class="form-control mb-1" autofocus>
            <textarea cols="30" rows="10" placeholder="Descripcion" v-model="task.description" class="form-control mb-1"></textarea>
            <button
            type="submit"
            class="btn btn-primary"
            :disabled="!task.title || !task.description">Create Task</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '@/interfaces/Task';
import { createTask } from '@/services/TaskService';

export default defineComponent({
    data() {
        return {
            task: {} as Task
            // {
            //     title: '' as string,
            //     description: '' as string
            // }
        }
    },
    methods: {
        async saveTask() {
            console.log(this.task)
            const res = await createTask(this.task);
            console.log(res);
            
            this.$router.push({ name: 'tasks' })
        }
    }
})
</script>
