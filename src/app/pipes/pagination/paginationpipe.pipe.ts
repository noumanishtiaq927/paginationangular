import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationpipe',
})
export class PaginationpipePipe implements PipeTransform {
  transform(Air: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
