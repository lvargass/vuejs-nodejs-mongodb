import { Task } from "@/interfaces/Task";
import { AxiosResponse } from "axios";
import axiosInstance from "./axios";

export const createTask = async (task: Task) => await axiosInstance.post('/tasks', task);
export const getTask = async (): Promise<AxiosResponse<Task[]>> => await axiosInstance.get('/tasks');
export const getTaskById = async (id: string): Promise<AxiosResponse<Task>> => await axiosInstance.get(`/tasks/${id}`);
export const updateTask = async (id: string, task: Task): Promise<AxiosResponse<Task>> => await axiosInstance.put(`/tasks/${id}`, task);
export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> => await axiosInstance.delete(`/tasks/${id}`);