import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataComponent } from './airtable-crud/get-data/get-data.component';
import { PostDataComponent } from './airtable-crud/post-data/post-data.component';
import { AirtableCrudService } from './service/airtable-crud/airtable-crud.service';
import { NavBarComponent } from './headers/nav-bar/nav-bar.component';
import { CrudBarComponent } from './headers/crud-bar/crud-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { PaginationpipePipe } from './pipes/pagination/paginationpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,
    PostDataComponent,
    NavBarComponent,
    CrudBarComponent,
    SearchfilterPipe,
    PaginationpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AirtableCrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
