<template>
    <div class="col-md-4 offset-4">
        <h1 align="center">Task Detail</h1>
        <form @submit.prevent="handdleUpdate()" class="card card-body bg-white">
            <input type="text" placeholder="Title" v-model="currentTask.title" class="form-control mb-1" autofocus>
            <textarea cols="30" rows="10" v-model="currentTask.description" class="form-control mb-1"></textarea>
            <button class="btn btn-primary">Actualizar</button>
        </form>
        <button type="button" @click="handdleDeleteTask()" class="btn btn-danger">Eliminar</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { deleteTask, getTaskById, updateTask } from '@/services/TaskService';
    import { Task } from '@/interfaces/Task';

    export default defineComponent({
        data() {
            return {
                currentTask: {} as Task,
                id: this.$route.params.id as string
            }
        },
        methods: {
            async loadTasks(id: string) {
                const res = await getTaskById(id);

                this.currentTask = res.data;
            },
            async handdleUpdate() {
                const res = await updateTask(this.id, this.currentTask);
                console.log(this.currentTask)
                console.log(res);
                this.$router.push('/');
            },
            async handdleDeleteTask() {
                const res = await deleteTask(this.id);
                console.log('deleted', res);
                this.$router.push('/');
            }
        },
        mounted() {
            this.loadTasks(this.id);
        }
    });
</script>
