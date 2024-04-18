const admin = require('firebase-admin');
const serviceAccount = require("./key.json");
const data = require("./data_list.json");
const collectionKey = "dataList"; // Nombre de la colección
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if  (data && (typeof data === "object")) {
    firestore.collection(collectionKey).doc(docKey).set(data{docKey}).then((res) => {
        console.log("Documnent " + docKey + " successfully written");
    }) .catch((error) => {
        console.error("Error writing document: ", error);
    })
}