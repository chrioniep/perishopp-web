import firebase from "../firebase/config";

const db = firebase.firestore();

export const login = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    db.collection("Admin")
      .where("username", "==", data.username)
      .where("password", "==", data.password)
      .get()
      .then((snapshot) => {
        let user = {};
        if (snapshot.size > 0) {
          snapshot.forEach((doc) => {
            user = {
              id: doc.id,
              ...doc.data(),
            };
            localStorage.setItem("user-perish-auth", JSON.stringify(user));
            resolve({
              state: true,
              data: user,
              message: "successfuly authenticated",
            });
          });
        } else {
          resolve({
            state: false,
            data: {},
            message:
              "nom d'utilisateur ou mot de passe incorrect veuillez réessayer",
          });
        }
      })
      .catch((err) => {
        reject({ state: false, data: {}, message: err });
      });
  });
};
export const logout = () => {
  localStorage.removeItem("user-perish-auth");
};
