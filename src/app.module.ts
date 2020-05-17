import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common'

import server from './config/server.config'
import { RoutesModule } from './routes/routes.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [server],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      introspection: true,
      playground: true,
    }),
    RoutesModule,
  ],
})
export class AppModule {}