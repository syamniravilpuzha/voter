import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

/**
 * AddItemComponent
 */
export class AddItemComponent {
  title='';
  description='';
  price = '';

  /**
   * constructor
   * @param itemService 
   * @param router 
   */
  constructor(private itemService:ItemService,private router:Router) { }

  /**
   * Save Item
   * @returns {void}
   */
  saveItem():void{
    let body ={
      title: this.title,
      description:this.description,
      price: this.price
    };
      this.itemService.saveItem({data:body}).subscribe((res)=>{
        this.router.navigateByUrl('/item-list');
    })
  }
}
