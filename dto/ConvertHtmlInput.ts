import { Field, InputType } from '@nestjs/graphql';
import JSON from 'graphql-type-json';

@InputType()
export class ConvertHtmlInput {
  @Field()
  framework: 'react' | 'vue';

  @Field()
  html: string;

  @Field()
  parameters: JSON
}