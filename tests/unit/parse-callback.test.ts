import {
  buildAuthCallbackDeepLink,
  decodeAuthError,
  parseAuthCallbackFromLocation,
  resolveAuthCallbackView,
} from "@/features/auth/parse-callback";
import { describe, expect, it } from "vitest";

describe("parseAuthCallbackFromLocation", () => {
  it("parses hash session tokens", () => {
    const params = parseAuthCallbackFromLocation(
      "#access_token=abc&refresh_token=def&type=signup",
      "",
    );
    expect(params.accessToken).toBe("abc");
    expect(params.type).toBe("signup");
  });

  it("parses query pkce code", () => {
    const params = parseAuthCallbackFromLocation("", "?code=pkce-code");
    expect(params.rawHashOrQuery).toContain("code=pkce-code");
  });
});

describe("resolveAuthCallbackView", () => {
  it("returns error when error_description present", () => {
    expect(
      resolveAuthCallbackView({
        type: null,
        accessToken: null,
        errorDescription: "access_denied",
        rawHashOrQuery: "",
      }),
    ).toBe("error");
  });

  it("returns reset for recovery type", () => {
    expect(
      resolveAuthCallbackView({
        type: "recovery",
        accessToken: null,
        errorDescription: null,
        rawHashOrQuery: "type=recovery",
      }),
    ).toBe("reset");
  });

  it("returns success for signup with token", () => {
    expect(
      resolveAuthCallbackView({
        type: "signup",
        accessToken: "tok",
        errorDescription: null,
        rawHashOrQuery: "access_token=tok",
      }),
    ).toBe("success");
  });

  it("returns error when empty", () => {
    expect(
      resolveAuthCallbackView({
        type: null,
        accessToken: null,
        errorDescription: null,
        rawHashOrQuery: "",
      }),
    ).toBe("error");
  });
});

describe("buildAuthCallbackDeepLink", () => {
  it("builds halisaha callback deep link", () => {
    expect(buildAuthCallbackDeepLink("access_token=x&type=signup")).toBe(
      "halisaha://auth/callback#access_token=x&type=signup",
    );
  });
});

describe("decodeAuthError", () => {
  it("decodes plus as space", () => {
    expect(decodeAuthError("Email+already+registered")).toBe("Email already registered");
  });
});
