import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
/**
 * ItemListComponent
 */
export class ItemListComponent implements OnInit {

  items: any;
  alreadyVoted = false;
  itemsCopy: any;
  status = false;
  constructor(private itemService: ItemService) { }

  /**
   * Init life cycle hook
   */
  ngOnInit(): void {
    this.getItems();
  }
  /**
   * Get Items
   * @returns {void}
   */
  getItems():void {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data.response;
      this.itemsCopy = Object.assign({}, this.items);

    })
  }
  /**
   * Perform voting
   * @param id 
   * @param voteType 
   * @param index 
   * @returns {void}
   */
  doVote(id: any, voteType: any, index: any): void {
    this.alreadyVoted = false;
    this.getFromLocalStorage(id).then((res) => {
      if (Math.abs(res + voteType) >= 2) {
        this.alreadyVoted = true;
      }
      else {
        this.updateVote(id, voteType, index);

      }
    }).catch(() => {
      this.updateVote(id, voteType, index);

    })

  }
  /**
   * Update vote to DB
   * @param id 
   * @param voteType 
   * @param index 
   */
  updateVote(id: any, voteType: any, index: any): void {
    this.setToLocalStorage(id, voteType);
    let updatedVote = this.items[index].votes = this.items[index].votes + voteType;
    this.itemService.updateVote(id, updatedVote).subscribe((data: any) => {
      if (data.response) {
        this.status = true;
      }
    });
  }
  /**
   * Get the indication from local storage that indicate user is already voted.
   * @param id 
   * @returns {Promise}
   */
  getFromLocalStorage(id: any) {
    return new Promise((resolve, reject) => {
      let localStorageString = localStorage.getItem("votes");
      if (localStorageString) {
        let votes = JSON.parse(localStorageString);
        if (votes.hasOwnProperty(id)) {
          resolve(votes[id]);
        }
        else {
          reject('');
        }
      }
      reject('');
    });
  }
  /**
   * Set indication for already voted to local storage
   * @param id 
   * @param voteType
   * @returns {void} 
   */
  setToLocalStorage(id: any, voteType: any): void {
    let localStorageString = localStorage.getItem("votes");
    if (localStorageString) {
      let votes = JSON.parse(localStorageString);
      votes[id] = votes[id] + voteType;
      localStorage.setItem("votes", JSON.stringify(votes));
    } else {
      let vote: any = {};
      vote[id] = voteType;
      let voteString = JSON.stringify(vote);
      localStorage.setItem("votes", voteString);
    }
  }
}
