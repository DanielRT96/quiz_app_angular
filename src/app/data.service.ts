import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectSource = new BehaviorSubject<boolean>(false);
  currentSelection = this.selectSource.asObservable();

  private idSource = new BehaviorSubject<number>(0);
  currentID = this.idSource.asObservable();

  constructor() {}

  changeSelect(selected: boolean) {
    this.selectSource.next(selected);
  }

  changeID(currentID: number) {
    this.idSource.next(currentID);
  }
}
