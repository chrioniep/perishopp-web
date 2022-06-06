import firebase from "../firebase/config";

const db = firebase.firestore();
const storage = firebase.storage();

export const getSubCategoryList = () => {
  return new Promise((resolve, reject) => {
    db.collection("SubCategory")
      .where("flag", "==", true)
      .get()
      .then((snapshot) => {
        let categories = [];
        let count = 0;
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            db.collection("Categorie")
              .doc(doc.data().category)
              .get()
              .then((catDoc) => {
                categories.push({ ...doc.data(), category: catDoc.data() });
                count++;
                if (count === snapshot.size) {
                  console.log(categories);
                  resolve({
                    state: true,
                    data: categories,
                    message: "category list",
                  });
                }
              });
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

export const getSubCategoryDetail = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("SubCategory")
      .doc(id)
      .get()
      .then((doc) => {
        let subCategory = {};
        if (doc.exists) {
          db.collection("Categorie")
            .doc(doc.data().category)
            .get()
            .then((snapshot) => {
              subCategory = {
                ...doc.data(),
                category: snapshot.data(),
              };
              resolve({
                state: true,
                data: subCategory,
                message: "category detail",
              });
            });
        } else {
          resolve({ state: false, data: {}, message: "no category found" });
        }
      })
      .catch((err) => {
        resolve({ state: false, data: [], message: err });
      });
  });
};

export const getSubCategoryProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("subCategory", "==", id)
      .get()
      .then((snapshot) => {
        let products = [];
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            products.push(doc.data());
          });
          console.log(products);
          resolve({ state: true, data: products, message: "product list" });
        } else {
          resolve({ state: false, data: [], message: "no products found" });
        }
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};

export const CreateSubCategory = (data) => {
  return new Promise((resolve, reject) => {
    const id = db.collection("SubCategory").doc().id;
    db.collection("SubCategory")
      .doc(id)
      .set({
        id: id,
        name: data.name,
        category: data.category,
        flag: true,
      })
      .then(() => {
        resolve({ state: true, data: null, message: "subcategory created" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};
export const UpdateSubCategory = (id, data) => {
  return new Promise((resolve, reject) => {
    db.collection("SubCategory")
      .doc(id)
      .update({
        name: data.name,
        category: data.category.id ? data.category.id : data.category,
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
export const DeleteSubCategory = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("SubCategory")
      .doc(id)
      .update({
        flag: false,
      })
      .then((doc) => {
        resolve({ state: true, data: {}, message: "subcategory deleted" });
      })
      .catch((err) => {
        resolve({ state: false, data: {}, message: err });
      });
  });
};
