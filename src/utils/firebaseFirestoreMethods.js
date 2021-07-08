import firebase from "./firebaseConnection";

// Firebase methods

// To create a doc
const createDoc = (collection, obj) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(obj._id.toString())
    .set(obj);
  return result;
};

// To read all docs
const readAllDocs = (collection) => {
  const result = firebase.firestore().collection(collection).get();
  return result;
};

// To read a specific doc
const readDoc = (collection, id) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .get();

  return result;
};

// To delete a doc
const deleteDoc = (collection, id) => {
  const result = firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .delete();

  return result;
};

// To update a doc
const updateDoc = (collection, id, updateData) => {
  return firebase
    .firestore()
    .collection(collection)
    .doc(id.toString())
    .update(updateData);
};

export { readAllDocs, updateDoc, createDoc, readDoc, deleteDoc };
