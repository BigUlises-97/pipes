import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, act:boolean): string {
    let retorno=value;
    if(act){
      retorno="";
      for(let i=0;i<=value.length-1;i++){
        retorno+="*";
      }
    }
    
    console.log("original: "+value.length);
    console.log("retorno: "+retorno.length);
      
    return retorno;
  }

}
