import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertToSpace",
    standalone: true
})
export class ConvertToSpacePipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, " ");
  }
}
