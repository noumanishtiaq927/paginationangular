import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './airtable-crud/get-data/get-data.component';
import { PostDataComponent } from './airtable-crud/post-data/post-data.component';

const routes: Routes = [
  {
    path: 'postdata',
    component: PostDataComponent,
  },
  {
    path: 'getdata',
    component: GetDataComponent,
  },
  {
    path: 'editdata/:id',
    component: PostDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
