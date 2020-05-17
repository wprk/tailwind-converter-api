import { Args, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { ComponentService } from './component.service';

import { Component } from '../../models/component.model';
import { ComponentArgs } from './dto/ComponentArgs';

@Resolver(() => Component)
export class ComponentResolver {
  constructor(private readonly componentService: ComponentService) {}

  @Query(() => Component)
  async component(@Args('componentArgs') params: ComponentArgs): Promise<Component> {
    const component = await this.componentService.findOneById(params.framework, params.id);
    
    if (!component) {
      throw new NotFoundException(params.id);
    }

    return component;
  }
}
