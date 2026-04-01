import { Classe } from './model/Classe.model';
import { Pipe, PipeTransform } from '@angular/core';

const CLASSE: Record<Classe,string >={
       L1:"Licence1",
       L2:"Licence2",
       L3:"Licence3",
       M1:"Master1",
       M2:"Master2",
}
@Pipe({
  name: 'classe',
})
export class ClassePipe implements PipeTransform {
  transform(value: Classe): string{
  return CLASSE[value];
  }
}
