import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {

  transform(relativeUrl: string): string {
    const baseUrl = 'http://localhost:5000/';
    return baseUrl + relativeUrl;
  }

}
