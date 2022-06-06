import firebase from "../firebase/config";

const db = firebase.firestore();
const storage = firebase.storage();

export const getGalleryList = () => {
  return new Promise((resolve, reject) => {
    db.collection("Gallery")
      .where("flag", "==", true)
      .get()
      .then((snapshot) => {
        let galleries = [];
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            galleries.push(doc.data());
          });
          resolve({ state: true, data: galleries, message: "gallery list" });
        } else {
          resolve({
            state: false,
            data: [],
            message: "no gallery photo found",
          });
        }
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};
export const createNewGallery = (data) => {
  return new Promise((resolve, reject) => {
    const id = db.collection("Gallery").doc().id;
    db.collection("Gallery")
      .doc(id)
      .set({
        id: id,
        url: data.image,
        flag: true,
      })
      .then(() => {
        db.collection("Gallery")
          .doc(id)
          .get()
          .then((doc) => {
            resolve({
              state: true,
              data: doc.data(),
              message: "gallery created",
            });
          });
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};
export const DeleteGallery = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Gallery")
      .doc(id)
      .update({
        flag: false,
      })
      .then(() => {
        resolve({ state: true, data: id, message: "gallery's photo deleted" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};
