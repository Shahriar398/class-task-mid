import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'faculty_db',
      autoLoadEntities: true,
      synchronize: true, // auto-creates the "faculties" table (dev only)
    }),
    FacultiesModule,
  ],
})
export class AppModule {}