

import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name : 'mySquare'
})
export class MySquarePipe implements PipeTransform {
    transform(val : number) :number{
        return (val*val);
    }
}