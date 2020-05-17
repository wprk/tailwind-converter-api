import { Module } from '@nestjs/common'

import { ComponentModule } from './component/component.module'
import { ConvertModule } from './convert/convert.module'

@Module({
  imports: [
    ComponentModule,
    ConvertModule,
  ],
})
export class RoutesModule {}