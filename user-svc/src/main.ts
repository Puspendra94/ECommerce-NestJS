import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './cluster.service';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, () => console.log('listening on port 3000'));
}

bootstrap();

// ClusterService.clusterize(bootstrap);
