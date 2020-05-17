import { Injectable } from '@nestjs/common';
import { Component } from 'src/models/component.model';
import * as fs from 'fs'
import * as hasha from 'hasha'
import * as path from 'path'

@Injectable()
export class ConvertService {
  async convert(html: string, framework: string, parameters: any): Promise<Component> {
    return await this.getComponent(html, framework, parameters)
  }

  private async getComponent(
    html: string, framework: string, parameters: any
  ): Promise<Component> {
    const decodedHtml = decodeURI(html)
    const id = await hasha.async(decodedHtml, {algorithm: 'md5'})

    return {
      id,
      component: await this.buildComponentContents(decodedHtml, framework, parameters)
    } as Component
  }

  private async buildComponentContents(
    html: string,
    framework: string,
    parameters: any,
  ): Promise<string> {
    const htmlForFramework = this.convertHtmlToFramework(html, framework)
   
    let contents = await this.getStub(framework, parameters)

    contents = contents.replace(/\{\{HTML\}\}/g, htmlForFramework)
    contents = contents.replace(/\{\{CLASS_NAME\}\}/g, 'Component')

    return contents
  }

  private convertHtmlToFramework(
    html: string,
    framework: string,
  ): string {
    let htmlForFramework = html

    if (framework === 'react') {
      htmlForFramework = this.convertHtmlToReact(htmlForFramework)
    }

    if (framework === 'vue') {
      htmlForFramework = this.convertHtmlToVue(htmlForFramework)
    }

    return htmlForFramework
  }

  private convertHtmlToReact(
    htmlForFramework: string
  ): string {
    const attributesToReplace = [
      { find: /class\=/g, replace: 'className='},
      { find: /for\=/g, replace: 'htmlFor='},
      { find: /clip-rule\=/g, replace: 'clipRule='},
      { find: /fill-rule\=/g, replace: 'fillRule='},
      { find: /\<\!\-\-/g, replace: '{/*'},
      { find: /\-\-\>/g, replace: '*/}'},
      { find: /stroke-linecap\=/g, replace: 'strokeLinecap='},
      { find: /stroke-linejoin\=/g, replace: 'strokeLinejoin='},
      { find: /stroke-width\=/g, replace: 'strokeWidth='},
      { find: /href=\"\#\"/g, replace: 'href="/"'}
    ] 

    attributesToReplace.forEach(attribute => {
      htmlForFramework = htmlForFramework.replace(attribute.find, attribute.replace)
    })
    
    return htmlForFramework
  }

  private convertHtmlToVue(
    htmlForFramework: string
  ): string {    
    return htmlForFramework
  }

  private async getStub(
    framework: string,
    parameters: any,
  ): Promise<string> {
    let stubPath = `../../../dist/stubs/${framework}/default.stub`

    if (parameters && parameters.type) {
      stubPath = `../../../dist/stubs/${framework}/${parameters.type}.stub`
    }

    if (fs.existsSync(path.resolve(__dirname, stubPath))) {
      return fs.readFileSync(path.resolve(__dirname, stubPath), 'utf8')
    }

    return '{{HTML}}'
  }
}
