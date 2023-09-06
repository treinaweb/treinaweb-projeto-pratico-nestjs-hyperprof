import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ProfessoresModule } from './professores/professores.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }), ProfessoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
