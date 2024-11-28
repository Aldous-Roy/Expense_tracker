import { addDoc, collection, serverTimestampestamp } from "firebase/firestore";
import { db } from "../config/firebase_config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransaction = async ({ description, amount, type }) => {
    try {
      await addDoc(transactionCollectionRef, {
        userId,
        description,
        amount,
        type,
        createdAt: serverTimestamp(),
      });
      console.log("Transaction added successfully!");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };
  return { addTransaction };
};
