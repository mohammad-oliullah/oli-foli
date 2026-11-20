import { PasskeyRegistrationForm } from "@/components/auth/passkey-registration-form";
import { connectToDatabase } from "@/lib/mongodb";
import { Passkey } from "@/lib/models/passkey";

export default async function DashboardPasskeysPage() {
  await connectToDatabase();
  const passkeyCount = await Passkey.countDocuments();

  return (
    <div className="max-w-2xl">
      <header className="mb-8 border-b pb-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Account security
        </p>
        <h1 className="mt-2 text-2xl font-semibold">Manage passkeys</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {passkeyCount} of 2 passkeys registered. A synced passkey may be
          available on more than one device.
        </p>
      </header>
      {passkeyCount < 2 ? (
        <section className="rounded-lg border p-6">
          <h2 className="font-semibold">Register another passkey</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add a second passkey as a backup sign-in method.
          </p>
          <PasskeyRegistrationForm
            requiresSetupSecret={false}
            successPath="/dashboard/passkeys"
          />
        </section>
      ) : (
        <p className="rounded-lg border p-5 text-sm text-muted-foreground">
          The two-passkey limit has been reached.
        </p>
      )}
    </div>
  );
}
