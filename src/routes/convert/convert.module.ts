import { Module } from '@nestjs/common'
import { ConvertResolver } from './convert.resolver'
import { ConvertService } from './convert.service'

@Module({
  imports: [],
  providers: [ConvertResolver, ConvertService],
})
export class ConvertModule {}