/**
 * Davet linkleri katılım kodunu (yetki sırrı) taşır. Paylaşılan link her zaman
 * `https://halisaha.cc/invite/<kind>/:code` formundadır.
 */

export type InviteKind = "match" | "group";

export interface ParsedInvite {
  kind: InviteKind;
  code: string;
}

const INVITE_HOST = "halisaha.cc";

function buildInviteUrl(kind: InviteKind, code: string): string {
  const path = `invite/${kind}/${encodeURIComponent(code)}`;
  return `https://${INVITE_HOST}/${path}`;
}

export function buildMatchInviteUrl(code: string): string {
  return buildInviteUrl("match", code);
}

export function buildGroupInviteUrl(code: string): string {
  return buildInviteUrl("group", code);
}

/** `invite/<kind>/<code>` formundaki path'i ayrıştırır. */
function matchInvitePath(rawPath: string): ParsedInvite | null {
  const segments = rawPath.replace(/^\/+|\/+$/g, "").split("/");
  const inviteIndex = segments.indexOf("invite");
  if (inviteIndex === -1) return null;
  const kindRaw = segments[inviteIndex + 1];
  const codeRaw = segments[inviteIndex + 2];
  if ((kindRaw !== "match" && kindRaw !== "group") || !codeRaw) return null;
  let code: string;
  try {
    code = decodeURIComponent(codeRaw);
  } catch {
    code = codeRaw;
  }
  if (!code.trim()) return null;
  return { kind: kindRaw, code };
}

/** Davet URL'sini ayrıştırır; davet linki değilse null döner. */
export function parseInviteUrl(url: string): ParsedInvite | null {
  if (url.startsWith("halisaha://")) {
    const rest = url.slice("halisaha://".length).replace(/^\/+/, "");
    const fromScheme = matchInvitePath(rest);
    if (fromScheme) return fromScheme;
  }

  try {
    const u = new URL(url);
    const fromStd = matchInvitePath(`${u.hostname}/${u.pathname}`);
    if (fromStd) return fromStd;
  } catch {
    /* ignore */
  }
  return null;
}
