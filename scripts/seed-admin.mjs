import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const [email, password] = process.argv.slice(2);
const uri = process.env.MONGODB_URI;

if (!uri || !email || !password) {
  console.error("Usage: MONGODB_URI=... node scripts/seed-admin.mjs your@email.com 'your-password'");
  process.exit(1);
}

const normalizedEmail = email.trim().toLowerCase();
await mongoose.connect(uri);
const passwordHash = await bcrypt.hash(password, 12);
await mongoose.connection.collection("adminusers").updateOne(
  { email: normalizedEmail },
  { $set: { email: normalizedEmail, passwordHash, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
  { upsert: true },
);
await mongoose.disconnect();
console.log(`Admin user ready: ${normalizedEmail}`);
