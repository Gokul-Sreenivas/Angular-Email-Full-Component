import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipeFilter',
})
export class emailPipeFilter implements PipeTransform {
  transform(items: Array<any>, formEmail: string): Array<any> {
    return formEmail
      ? items.filter(function (item) {
          return -1 !== item.formEmail.indexOf(formEmail);
        })
      : items;
    //   return items.filter((item) => item.formEmail.startwith(formEmail));
  }
}
