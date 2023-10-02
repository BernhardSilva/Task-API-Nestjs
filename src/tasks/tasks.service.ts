import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll() {
    await this.taskModel.find();
  }
  async findOne(id: string) {
    return await this.taskModel.findById(id);
  }

  async create(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return await newTask.save();
  }

  async update(id: string, updateTask: UpdateTaskDto) {
    return await this.taskModel.findByIdAndUpdate(id, updateTask);
  }

  async delete(id: string) {
    return await this.taskModel.findByIdAndDelete(id);
  }
}
