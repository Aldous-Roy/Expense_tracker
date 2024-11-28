import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase_config";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

export const useAddTransactions = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();

  const addTransaction = async ({ description, amount, type }) => {
    try {
      await addDoc(transactionCollectionRef, {
        userId, // No need for {userId}
        description, // No need for {description}
        amount, // No need for {amount}
        type, // No need for {type}
        createdAt: serverTimestamp(),
      });
      console.log("Transaction added successfully!");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return { addTransaction };
};