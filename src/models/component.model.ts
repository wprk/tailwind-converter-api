import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Component {
  @Field(type => ID)
  id: string

  @Field()
  component: string
}
