import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversionService {
  getHello(): string {
    return 'Hello World!';
  }
}
