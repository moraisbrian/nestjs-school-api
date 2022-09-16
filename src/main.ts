import { NestFactory, Reflector } from '@nestjs/core';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { RolesGuard } from './common/guards/roles.guard';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter);
  await app.listen(3000);
}
bootstrap();
