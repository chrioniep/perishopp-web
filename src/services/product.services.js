import firebase from "../firebase/config";

const db = firebase.firestore();
const storage = firebase.storage();

export const getProductList = () => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("flag", "==", true)
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
export const getProductDetail = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .doc(id)
      .get()
      .then((doc) => {
        let product = {};
        if (doc.exists) {
          db.collection("Categorie")
            .doc(doc.data().category)
            .get()
            .then((catDoc) => {
              db.collection("SubCategory")
                .doc(doc.data().subCategory)
                .get()
                .then((subDoc) => {
                  product = {
                    ...doc.data(),
                    category: catDoc.data(),
                    subCategory: subDoc.data(),
                  };
                  resolve({
                    state: true,
                    data: product,
                    message: "product detail",
                  });
                });
            });
        } else {
          resolve({ state: false, data: null, message: "product not found" });
        }
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("category", "==", category)
      .get()
      .then((query) => {
        if (query.size > 0) {
          let products = [];
          query.forEach((doc) => {
            products.push(doc.data());
          });
          resolve({ state: true, data: products, message: "product list" });
        } else {
          resolve({ state: false, data: [], message: "no products found" });
        }
      });
  });
};

export const getProductByHaveCategory = (category) => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("category", "==", category)
      .where("inCategory", "==", true)
      .get()
      .then((query) => {
        if (query.size > 0) {
          let products = [];
          query.forEach((doc) => {
            products.push(doc.data());
          });
          resolve({ state: true, data: products, message: "product list" });
        } else {
          resolve({ state: false, data: [], message: "no products found" });
        }
      });
  });
};

export const CreateProduct = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    const id = db.collection("Product").doc().id;
    db.collection("Product")
      .doc(id)
      .set({
        id: id,
        name: data.name,
        price: data.price,
        origin: data.origin,
        deliveryTime: data.deliveryTime,
        images: data.images,
        fakePrice: data.fakePrice,
        description: data.description,
        category: data.category,
        subCategory: data.subCategory,
        size: data.sizes,
        badge: data.badge,
        isTrending: data.isTrending,
        inCategory: data.inCategory,
        stock: data.stock,
        flag: true,
        createdAt: new Date(),
      })
      .then(() => {
        resolve({ state: true, data: null, message: "product created" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};
export const UploadImage = (data, callback) => {
  const id = db.collection("Products").doc().id;
  const file = data.file;
  const storageRef = storage.ref(`Products/${id}`);
  const task = storageRef.put(file);
  task.on("state_changed", (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    callback(false, progress, "uploading");
  }),
    (err) => {
      callback(false, null, err);
    };
};
export const UpdateProduct = (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    db.collection("Product")
      .doc(data.id)
      .update({
        images: data.images,
        name: data.name,
        price: data.price,
        deliveryTime: data.deliveryTime,
        origin: data.origin,
        fakePrice: data.fakePrice,
        description: data.description,
        category: data.category.id ? data.category.id : data.category,
        subCategory: data.subCategory.id
          ? data.subCategory.id
          : data.subCategory,
        size: data.size,
        badge: data.badge,
        isTrending: data.isTrending,
        inCategory: data.inCategory,
        stock: data.stock,
      })
      .then(() => {
        resolve({ state: true, data: data, message: "product updated" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};
export const DeleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .doc(id)
      .update({
        flag: false,
      })
      .then(() => {
        resolve({ state: true, data: id, message: "product deleted" });
      })
      .catch((err) => {
        resolve({ state: false, data: null, message: err });
      });
  });
};

export const getTrendingProducts = () => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("flag", "==", true)
      .where("isTrending", "==", true)
      .get()
      .then((query) => {
        if (query.size > 0) {
          let products = [];
          query.forEach((doc) => {
            products.push(doc.data());
          });
          resolve({
            state: true,
            data: products,
            message: "trending products",
          });
        } else {
          resolve({
            state: false,
            data: null,
            message: "no trending products",
          });
        }
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};

export const getMenProductCat = () => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("flag", "==", true)
      .where("inCategory", "==", true)
      .where("category", "==", "vHgIXAw8ilTjztphRqlt")
      .get()
      .then((query) => {
        if (query.size > 0) {
          let products = [];
          query.forEach((doc) => {
            products.push(doc.data());
          });
          resolve({
            state: true,
            data: products,
            message: "list of product cat men",
          });
        } else {
          resolve({ state: false, data: [], message: "Aucun produit trouvé" });
        }
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};

export const getWomanProductCat = () => {
  return new Promise((resolve, reject) => {
    db.collection("Product")
      .where("flag", "==", true)
      .where("inCategory", "==", true)
      .where("category", "==", "5rOJKSgcRepM3QDjeARC")
      .get()
      .then((query) => {
        if (query.size > 0) {
          let products = [];
          query.forEach((doc) => {
            products.push(doc.data());
          });
          resolve({
            state: true,
            data: products,
            message: "list of product cat woman",
          });
        } else {
          resolve({ state: false, data: [], message: "Aucun produit trouvé" });
        }
      })
      .catch((err) => {
        reject({ state: false, data: null, message: err });
      });
  });
};
