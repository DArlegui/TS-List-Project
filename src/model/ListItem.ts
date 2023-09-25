export interface Item {
  id: string
  item: string
  checked: boolean
}

export default class ListItem implements Item {
  constructor(private _id: string = '', private _item: string = '', private _checked: boolean = false) {}

  //prettier-ignore
  get id(): string { return this._id }
  //prettier-ignore
  set id(id: string) {this._id = id}
  //prettier-ignore
  get item(): string {return this._item}
  //prettier-ignore
  set item(item: string) {this._item = item}
  //prettier-ignore
  get checked(): boolean {return this._checked}
  //prettier-ignore
  set checked(checked: boolean) {this._checked = checked}
}
