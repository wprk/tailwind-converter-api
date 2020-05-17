import { Module } from '@nestjs/common';
import { ConvertController } fr./convert.controllerntroller';
import { ConvertService } from './convert.service';

@Module({
  imports: [],
  controllers: [ConvertController],
  providers: [ConvertService],
})
export class ConvertModule {}
