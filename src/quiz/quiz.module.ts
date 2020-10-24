import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { QuestionEntity } from './question.entity';
import { CategoryEntity } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity, CategoryEntity])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}
