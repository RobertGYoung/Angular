import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name : 'concat'
})
export class ConcatPipes implements PipeTransform {
    transform(val : string, val2:string) :string{
        return (val+" "+val2);
    }
}