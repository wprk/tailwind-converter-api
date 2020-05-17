import { Module } from '@nestjs/common'
import { ComponentResolver } from './component.resolver'
import { ComponentService } from './component.service'

@Module({
  imports: [],
  providers: [ComponentResolver, ComponentService],
})
export class ComponentModule {}