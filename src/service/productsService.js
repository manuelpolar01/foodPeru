import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "./firebase";

export const uploadProducts = async (products) => {
  const batch = writeBatch(db);
  const productsRef = collection(db, "products");

  products.forEach((product) => {
    const newDoc = doc(productsRef);
    batch.set(newDoc, product);
  });

  await batch.commit();
};
