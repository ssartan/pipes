import {PipeTransform, Pipe} from "@angular/core"

@Pipe ({
    name: 'degrees'
})

export class DegreesPipe implements PipeTransform {
    transform(radians : number, decimal: number) : any {
      // if decimal is not an integer greater than -1, we cannot do. quit with error "NaN"
      // if degrees is not a real number, we cannot do also. quit with error "NaN"
      if( !isNaN(decimal) &&  isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
          !isNaN(radians) &&  isFinite(radians)) { 
        var degrees = (radians * 180) / Math.PI;
        return Math.round(degrees * Math.pow(10,decimal)) / (Math.pow(10,decimal));
      } else {
        return "NaN";
      }
    }
}