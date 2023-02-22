import DoorModel from "model/DoorModel";

export function CreateDoors(
  quantities: number,
  doorWithGift: number
): DoorModel[] {
  return Array.from({ length: quantities }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorWithGift;
    return new DoorModel(number, haveGift);
  });
}

export function UpdateDoors(
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
