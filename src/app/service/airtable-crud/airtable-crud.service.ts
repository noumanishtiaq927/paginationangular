import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAirTable } from 'src/app/interface/airtable';

@Injectable({
  providedIn: 'root',
})
export class AirtableCrudService {
  dataa: any | undefined;
  url = 'https://api.airtable.com/v0/appvfLsBbjJWhCMT1/ListofUsers';
  rolelist = 'https://api.airtable.com/v0/appvfLsBbjJWhCMT1/Roles';
  carerlist = 'https://api.airtable.com/v0/appvfLsBbjJWhCMT1/carerTable';
  token = 'Bearer ';
  rolelistdata: any | undefined;
  carerlistdata: any | undefined;
  responseofpost: any | undefined;
  records: any | undefined;

  constructor(private http: HttpClient) {}

  getDataAirtable(): Observable<any> {
    this.dataa = this.http.get(this.url, {
      headers: {
        Authorization: this.token,
      },
    });
    console.log(this.dataa);
    return this.dataa;
  }

  getRoleAirtable(): Observable<any> {
    this.rolelistdata = this.http.get(this.rolelist, {
      headers: {
        Authorization: this.token,
      },
    });
    return this.rolelistdata;
  }

  getCarerAirtable(): Observable<any> {
    this.carerlistdata = this.http.get(this.carerlist, {
      headers: {
        Authorization: this.token,
      },
    });
    return this.carerlistdata;
  }
  postCarerData(datatopost: any[]): Observable<any> {
    const dataair = {
      fields: datatopost,
    };

    this.responseofpost = this.http.post(this.url, dataair, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
      },
    });
    return this.responseofpost;
  }
}
