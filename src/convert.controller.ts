import { Body, Controller, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller()
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Post()
  convertHtml(@Body(data): ConvertHtmlInput): string {
    switch(data.framework) {
      case 'react':
        return this.convertService.convertReact(data.html);
      case 'vue':
        return this.convertService.convertReact(data.html);
      default:
        throw new HttpException();
    }
    
  }
}
