import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log('cuerpo', req.body)
    
        const task = new Task({ title, description })
        // Guardando la tarea
        await task.save();
        // Imprimiendo en consola
        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); // Buscando por id
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }

        res.json(task); // retornando la tarea
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTaask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTaask);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) return res.status(404).json({ message: 'Task not found' });
    
        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;