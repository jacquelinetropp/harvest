// import clientPromise from "@/libs/mongoConnect";
// import {UserInfo} from "@/models/UserInfo";
// import bcrypt from "bcrypt";
// import * as mongoose from "mongoose";
// import {User} from '@/models/User';
import NextAuth, {getServerSession} from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { isAdmin, authOptions } from "../../../authUtils";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

// Exporting the isAdmin function if needed elsewhere
export { isAdmin, authOptions };