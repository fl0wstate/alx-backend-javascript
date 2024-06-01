import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const obj = [19, 20, 34];

  obj.forEach((element) => {
    arr.push(new ClassRoom(element));
  });
  return arr;
}
