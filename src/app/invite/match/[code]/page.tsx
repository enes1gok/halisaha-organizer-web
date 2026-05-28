import { InviteFallbackCard } from "@/components/invites/InviteFallbackCard";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  return {
    title: "Maç Daveti",
    description: `Halısaha maç daveti: ${code}`,
    robots: { index: false },
  };
}

export default async function MatchInvitePage({ params }: PageProps) {
  const { code } = await params;
  const decoded = decodeURIComponent(code);

  return (
    <div className="relative flex min-h-screen items-center justify-center p-6">
      <div className="field-bg" />
      <InviteFallbackCard
        kind="match"
        code={decoded}
        icon="⚽"
        title="MAÇA DAVET EDİLDİN!"
        subtitle="Maça katılmak için uygulamayı aç veya aşağıdan indir."
        codeLabel="Maç Kodu"
      />
    </div>
  );
}
