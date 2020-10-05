import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe1'
})
export class EmailPipe1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
