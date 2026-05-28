import { AuthCallbackClient } from "@/components/auth/AuthCallbackClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doğrulama",
  robots: { index: false },
};

export default function AuthCallbackPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-6">
      <div className="field-bg" />
      <AuthCallbackClient />
    </div>
  );
}
