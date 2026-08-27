import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const [email, password] = process.argv.slice(2);
const uri = process.env.MONGODB_URI;

if (!uri || !email || !password) {
  console.error("Missing MONGODB_URI, email, or password.");
  console.error("Add MONGODB_URI to .env.local, then run:");
  console.error("  npm run seed:admin -- your@email.com 'your-password'");
  console.error("PowerShell alternative:");
  console.error("  $env:MONGODB_URI='mongodb+srv://...'; npm run seed:admin -- your@email.com 'your-password'");
  process.exit(1);
}

const normalizedEmail = email.trim().toLowerCase();
await mongoose.connect(uri);
const passwordHash = await bcrypt.hash(password, 12);
await mongoose.connection.collection("adminusers").updateOne(
  { email: normalizedEmail },
  {
    $set: { email: normalizedEmail, passwordHash, updatedAt: new Date() },
    $setOnInsert: { createdAt: new Date() },
  },
  { upsert: true },
);
await mongoose.disconnect();
console.log(`Admin user ready: ${normalizedEmail}`);
