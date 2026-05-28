import { DEEP_LINK_SCHEME } from "@/lib/constants";
import type { InviteKind } from "./invite-links";

export function buildInviteDeepLink(kind: InviteKind, code: string): string {
  return `${DEEP_LINK_SCHEME}://invite/${kind}/${encodeURIComponent(code)}`;
}

export function openInviteInApp(kind: InviteKind, code: string): void {
  if (typeof window === "undefined") return;
  window.location.href = buildInviteDeepLink(kind, code);
}

export function openAppRoot(): void {
  if (typeof window === "undefined") return;
  window.location.href = `${DEEP_LINK_SCHEME}://`;
}
