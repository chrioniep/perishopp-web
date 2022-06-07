import firebase from "../firebase/config";

const db = firebase.firestore();
const storage = firebase.storage();

function remove_duplicate(arr) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

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

export const getCategoryHaveProductsInCat = () => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("flag", "==", true)
      .where("inCategory", "==", true)
      .get()
      .then((query) => {
        let categories = [];
        let count = 0;
        if (query.size > 0) {
          query.forEach((doc) => {
            db.collection("Categorie")
              .doc(doc.data().category)
              .get()
              .then((catDoc) => {
                if (catDoc.exists) {
                  categories.push(catDoc.data());
                  resolve({
                    state: true,
                    data: [...new Set(categories)],
                    message: "category list",
                  });
                }
              });
          });
        } else {
          resolve({ state: false, data: [], message: "no categories found" });
        }
      });
  });
};

export const getSubCategory = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("SubCategory")
      .where("category", "==", id)
      .get()
      .then((snapshot) => {
        let subCategories = [];
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            subCategories.push(doc.data());
          });
          resolve({
            state: true,
            data: subCategories,
            message: "sub category list",
          });
        } else {
          resolve({
            state: false,
            data: [],
            message: "no sub categories found",
          });
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
export const getCategoryDetail = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Categorie")
      .doc(id)
      .get()
      .then((doc) => {
        let category = {};
        if (doc.exists) {
          category = doc.data();
          resolve({ state: true, data: category, message: "category detail" });
        } else {
          resolve({ state: false, data: [], message: "no category found" });
        }
      })
      .catch((err) => {
        resolve({ state: false, data: [], message: err });
      });
  });
};
export const CreateCategory = (data) => {
  return new Promise((resolve, reject) => {
    const id = db.collection("Categorie").doc().id;
    db.collection("Categorie")
      .doc(id)
      .set({
        id: id,
        name: data.name,
        image: data.image,
        flag: true,
      })
      .then(() => {
        resolve({ state: true, data: null, message: "category created" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};
export const UpdateCategory = (id, data) => {
  return new Promise((resolve, reject) => {
    db.collection("Categorie")
      .doc(id)
      .update({
        name: data.name,
        image: data.image,
        flag: data.flag,
      })
      .then((doc) => {
        resolve({ state: true, data: data, message: "category updated" });
      })
      .catch((err) => {
        resolve({ state: false, data: [], message: err });
      });
  });
};
export const DeleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Categorie")
      .doc(id)
      .update({
        flag: false,
      })
      .then((doc) => {
        resolve({ state: true, data: {}, message: "category deleted" });
      })
      .catch((err) => {
        resolve({ state: false, data: [], message: err });
      });
  });
};
