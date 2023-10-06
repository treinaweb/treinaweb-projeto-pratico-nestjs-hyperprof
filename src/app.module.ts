import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ProfessoresModule } from './professores/professores.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthModule } from './auth/auth.module';
import { MeModule } from './me/me.module';
import { TokenInvalidoModule } from './token-invalido/token-invalido.module';
import { FotoModule } from './foto/foto.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ProfessoresModule,
    AlunosModule,
    AuthModule,
    MeModule,
    TokenInvalidoModule,
    FotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
