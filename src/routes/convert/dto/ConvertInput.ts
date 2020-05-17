import { Field, InputType } from '@nestjs/graphql';
import JSON from 'graphql-type-json';

@InputType()
export class ConvertInput {
  @Field()
  framework: 'react' | 'vue';

  @Field()
  html: string;

  @Field(() => JSON, { nullable: true })
  parameters: any
}