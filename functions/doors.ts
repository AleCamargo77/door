import DoorModel from "model/DoorModel";

export function createDoors(
  quantities: number,
  selection: number
): DoorModel[] {
  return Array.from({ length: quantities }, (_, i) => {
    const number = i + 1;
    const haveGift = number === selection;
    return new DoorModel(number, haveGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorModify: DoorModel
): DoorModel[] {
  return doors.map((doorActual) => {
    const isModify = doorActual.num === doorModify.num;

    if (isModify) {
      return doorModify;
    } else {
      return doorModify.openDoor ? doorActual : doorActual.deselected();
    }
  });
}
