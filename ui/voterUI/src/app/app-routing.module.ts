import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {
      path:'',redirectTo: 'item-list', pathMatch: 'full' 
  },
  {
    path: 'add-item',
    component: AddItemComponent
  },
  { path: 'item-list', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
