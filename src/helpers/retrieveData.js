export default function retrieveData(object) {
  let newObject = {};
  for (let key in object) {
    newObject = object[key];
  }
  return newObject;
}