import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(AirTableData: any[], searchValue: string): any[] {
    console.log(searchValue);
    if (!AirTableData || !searchValue) {
      return AirTableData;
    }
    return AirTableData.filter(
      (x: any) =>
        x.id.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        x.fields.Name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        x.fields.userId
          .toString()
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        x.fields.userRole
          .toString()
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        x.fields.PassCode.toString()
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
    );
  }
}
