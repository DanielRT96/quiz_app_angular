export class Category {
  public id: number;
  public name: string;
  public clueNumber: number;

  constructor(id: number, name: string, clue: number) {
    this.id = id;
    this.name = name;
    this.clueNumber = clue;
  }
}
