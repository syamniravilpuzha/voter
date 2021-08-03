import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = "http://localhost:3000/api";
@Injectable({
  providedIn: 'root'
})

/**
 * ItemService
 */
export class ItemService {

  /**
   * constructor
   * @param http 
   */
  constructor(private http:HttpClient) { }

  /**
   * Save Item
   * @param data 
   * @returns Observable
   */
  saveItem(data:any){
    return this.http.post(baseUrl+"/save-item",data);
  }

  /**
   * Get Items
   * @returns Observable
   */
  getItems(){
    return this.http.get(baseUrl+"/get-items");
  }

  /**
   * Update Vote to DB
   * @param id 
   * @param votes 
   * @returns Observable
   */
  updateVote(id:any,votes:any){
    return this.http.put(baseUrl + "/vote/" + id,{vote:votes});
  }
}
