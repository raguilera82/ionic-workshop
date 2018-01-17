import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorator',
})
export class DecoratorPipe implements PipeTransform {

  transform(value: string, ...args) {
    const deco = args[0];
    return deco + value + deco;
  }
}
