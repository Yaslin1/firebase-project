import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "../credential.js";

initializeApp({credential: cert(creds)
});

export const db = getFirestore();