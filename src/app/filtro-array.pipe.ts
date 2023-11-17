import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  //Pipwe Puro do angular, ele não olha as modificações realizadas.
  transform(value: any, args?: any): any {

    if(value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();

    return value.filter(
      (v: any) => v.toLocaleLowerCase().indexOf(filter) != -1
    )


  }

}
