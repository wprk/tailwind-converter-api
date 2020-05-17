import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class ComponentArgs {
  @Field(() => ID)
  id: string;

  @Field()
  framework: 'react' | 'vue';
}