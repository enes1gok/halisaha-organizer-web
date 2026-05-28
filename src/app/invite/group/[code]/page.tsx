import { InviteFallbackCard } from "@/components/invites/InviteFallbackCard";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  return {
    title: "Grup Daveti",
    description: `Halısaha grup daveti: ${code}`,
    robots: { index: false },
  };
}

export default async function GroupInvitePage({ params }: PageProps) {
  const { code } = await params;
  const decoded = decodeURIComponent(code);

  return (
    <div className="relative flex min-h-screen items-center justify-center p-6">
      <div className="field-bg" />
      <InviteFallbackCard
        kind="group"
        code={decoded}
        icon="👥"
        title="GRUBA DAVET EDİLDİN!"
        subtitle="Bir halısaha grubuna davet edildin. Katılmak için uygulamayı aç."
        codeLabel="Grup Kodu"
      />
    </div>
  );
}
