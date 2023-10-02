import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://bernhardsilva:J4KX35m4TkfRrvEf@cluster0.d1msdta.mongodb.net/task-api',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
