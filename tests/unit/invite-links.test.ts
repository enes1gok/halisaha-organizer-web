import {
  buildGroupInviteUrl,
  buildMatchInviteUrl,
  parseInviteUrl,
} from "@/features/invites/invite-links";
import { describe, expect, it } from "vitest";

describe("parseInviteUrl", () => {
  it("parses https match invite", () => {
    expect(parseInviteUrl("https://halisaha.cc/invite/match/HS-1234")).toEqual({
      kind: "match",
      code: "HS-1234",
    });
  });

  it("parses https group invite", () => {
    expect(parseInviteUrl("https://halisaha.cc/invite/group/GRP9")).toEqual({
      kind: "group",
      code: "GRP9",
    });
  });

  it("parses custom-scheme match invite", () => {
    expect(parseInviteUrl("halisaha://invite/match/ABC123")).toEqual({
      kind: "match",
      code: "ABC123",
    });
  });

  it("decodes URL-encoded codes", () => {
    expect(parseInviteUrl("https://halisaha.cc/invite/group/GRP%2D9")).toEqual({
      kind: "group",
      code: "GRP-9",
    });
  });

  it("returns null for non-invite https url", () => {
    expect(parseInviteUrl("https://halisaha.cc/match/some-id")).toBeNull();
  });

  it("returns null for auth callback url", () => {
    expect(parseInviteUrl("https://halisaha.cc/auth/callback?code=xyz")).toBeNull();
  });

  it("returns null for unknown invite kind", () => {
    expect(parseInviteUrl("https://halisaha.cc/invite/player/ABC")).toBeNull();
  });

  it("returns null when code segment is missing", () => {
    expect(parseInviteUrl("https://halisaha.cc/invite/match")).toBeNull();
  });

  it("returns null for garbage input", () => {
    expect(parseInviteUrl("not a url")).toBeNull();
  });
});

describe("build invite urls", () => {
  it("builds a clickable https match invite url", () => {
    const url = buildMatchInviteUrl("HS-1234");
    expect(url).toBe("https://halisaha.cc/invite/match/HS-1234");
    expect(parseInviteUrl(url)).toEqual({ kind: "match", code: "HS-1234" });
  });

  it("builds a clickable https group invite url", () => {
    const url = buildGroupInviteUrl("GRP9");
    expect(url).toBe("https://halisaha.cc/invite/group/GRP9");
    expect(parseInviteUrl(url)).toEqual({ kind: "group", code: "GRP9" });
  });
});
