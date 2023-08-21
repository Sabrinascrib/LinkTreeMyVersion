import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";

const {
  FIREBASE_SERVICE_ACCOUNT,
  FB_PROJECT_ID,
  FB_CLIENT_EMAIL,
  FB_PRIVATE_KEY,
} = import.meta.env;

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (err) {
  if (!/already exists/u.test((err as Error).message)) {
    console.error("Firebase Admin Error: ", (err as Error).stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
