import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectSource = new BehaviorSubject<boolean>(false);
  currentSelected = this.selectSource.asObservable();

  private idSource = new BehaviorSubject<number>(null);
  currentID = this.idSource.asObservable();

  constructor() {}

  changeSelect(selected: boolean) {
    this.selectSource.next(selected);
  }

  changeID(currentID: number) {
    this.idSource.next(currentID);
  }
}
