import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ConvertService } from './convert.service';

import { ConvertInput } from 'src/routes/convert/dto/ConvertInput';
import { Component } from '../../models/component.model';

@Resolver(() => Component)
export class ConvertResolver {
  constructor(private readonly convertService: ConvertService) {}

  @Mutation(() => Component)
  async convertHtml(@Args('convertInput') convertInput: ConvertInput): Promise<Component> {
    return await this.convertService.convert(
      convertInput.html,
      convertInput.framework,
      convertInput.parameters
    );
  }
}
