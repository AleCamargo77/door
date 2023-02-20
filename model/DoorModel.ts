export default class DoorModel {
  #num: number;
  #haveGift: boolean;
  #selected: boolean;
  #openDoor: boolean;

  constructor(
    num: number,
    haveGift = false,
    selected = false,
    openDoor = false
  ) {
    this.#num = num;
    this.#haveGift = haveGift;
    this.#selected = selected;
    this.#openDoor = openDoor;
  }

  get num() {
    return this.#num;
  }

  get haveGift() {
    return this.#haveGift;
  }

  get selected() {
    return this.#selected;
  }

  get openDoor() {
    return this.#openDoor;
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.num, this.haveGift, selected, this.openDoor);
  }

  open() {
    const open = true;
    return new DoorModel(this.num, this.haveGift, this.selected, open);
  }

  deselected() {
    const selected = false;
    return new DoorModel(this.num, this.haveGift, selected, this.openDoor);
  }
}
