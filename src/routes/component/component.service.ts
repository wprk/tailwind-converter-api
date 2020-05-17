import { Injectable } from '@nestjs/common';
import { Component } from 'src/models/component.model';

@Injectable()
export class ComponentService {
  async findOneById(framework: string, id: string): Promise<Component> {
    return {
      id,
      component: `import React from 'react'

const Badge = () => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
    Badge
  </span>
)

export default Badge
`
    } as Component
    // Component.create({
    //   id,
    //   component: `import React from 'react'

    //   const Badge = () => (
    //     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
    //       Badge
    //     </span>
    //   )
      
    //   export default Badge
    //   `
    // })
  }
}
