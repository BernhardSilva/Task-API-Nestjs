import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://bernhardsilva:J4KX35m4TkfRrvEf@cluster0.d1msdta.mongodb.net/task-api',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
