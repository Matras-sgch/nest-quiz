import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'KaktusKaktus',
      database: 'nest-db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true
    }),
    QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
