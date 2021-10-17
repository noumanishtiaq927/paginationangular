import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AirtableCrudService } from 'src/app/service/airtable-crud/airtable-crud.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  roleList: any = [];
  FcareList: any = [];
  postdata: any = [];
  postdataa = {
    Name: 'Eobard',
    userRoleId: ['recWDO6fvYLNV8ALE'],
    Status: 'NotActive',
    FcarerId: ['recqeObK4XwlkIGJc'],
    Password: '1234',
    OneTimePasswordFlag: 'No',
    PassCode: 9876,
  };

  constructor(private airtableCrud: AirtableCrudService) {}
  @ViewChild('f') formdata: any;
  ngOnInit(): void {
    this.airtableCrud.getCarerAirtable().subscribe((Cdata) => {
      this.FcareList = Cdata.records;
    });
    this.airtableCrud.getRoleAirtable().subscribe((Rdata) => {
      this.roleList = Rdata.records;
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.formdata.value);

    this.postdataa.Name = this.formdata.value.Name;
    this.postdataa.userRoleId = this.formdata.value.UserRoleId.split();
    this.postdataa.Status = this.formdata.value.Status;
    this.postdataa.FcarerId = this.formdata.value.FCarerList?.split();
    this.postdataa.Password = this.formdata.value.Password;
    this.postdataa.OneTimePasswordFlag =
      this.formdata.value.OneTimePasswordFlag;
    this.postdataa.PassCode = this.formdata.value.Passcode;

    this.postdata = this.postdataa;
    this.airtableCrud.postCarerData(this.postdata).subscribe((data) => {
      console.log(data);
    });
  }
}
