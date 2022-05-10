import firebase from "../firebase/config";

const db = firebase.firestore();
const storage = firebase.storage();

export const getCategoryList = () => {
  return new Promise((resolve, reject) => {
    db.collection("Categorie")
      .where("flag", "==", true)
      .get()
      .then((snapshot) => {
        let categories = [];
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            categories.push(doc.data());
          });
          resolve({ state: true, data: categories, message: "category list" });
        } else {
          resolve({ state: false, data: [], message: "no categories found" });
        }
      });
  });
};
export const UploadImage = (callback) => {
  const id = db.collection("Categories").doc().id;
  const file = data.file;
  const storageRef = storage.ref(`Categories/${id}`);
  const task = storageRef.put(file);
  task
    .on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      callback(false, progress, "uploading...");
    })
    .then(() => {
      callback(null, null, "image uploaded");
    })
    .catch((err) => {});
};
export const getCategoryDetail = (id, callback) => {
  db.collection("Categories")
    .get(id)
    .then((doc) => {
      let category = {};
      if (doc.exists) {
        category = doc.data();
        callback(true, category, "category detail");
      } else {
        callback(false, null, "category not found");
      }
    })
    .catch((err) => {
      callback(false, null, err);
    });
};
export const CreateCategory = (callback) => {
  const id = db.collection("Categories").doc().id;
  db.collection("Categories")
    .set({
      id: id,
      name: data.name,
      image: data.image,
      flag: data.flag,
    })
    .then(() => {
      callback(true, null, "category created");
    })
    .catch((err) => {
      callback(false, null, err);
    });
};
export const UpdateCategory = (callback) => {
  db.collection("Categories")
    .doc(data.id)
    .update({
      name: data.name,
      image: data.image,
    })
    .then(() => {
      callback(true, null, "category updated");
    })
    .catch((err) => {
      callback(false, null, err);
    });
};
export const DeleteCategory = (callback) => {
  db.collection("Categories")
    .doc(data.id)
    .update({
      flag: false,
    })
    .then(() => {
      callback(true, null, "category deleted");
    })
    .catch((err) => {
      callback(false, null, err);
    });
};
