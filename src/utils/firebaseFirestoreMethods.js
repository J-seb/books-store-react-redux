import firebase from "./firebaseConnection";

const createDoc = (collection, obj) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(obj._id.toString())
    .set(obj);
  return result;
};

const readAllDocs = (collection) => {
  const result = firebase.firestore().collection(collection).doc().get();
  return result;
};

const readDoc = (collection, id) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .get();

  return result;
};

const deleteDoc = (collection, id) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .delete();

  return result;
};

const updateDoc = (collection, id, updateData) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .update(updateData);
  return result;
};

export { readAllDocs, updateDoc, createDoc, readDoc, deleteDoc };
