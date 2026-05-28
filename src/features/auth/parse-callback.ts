export type AuthCallbackView = "verifying" | "success" | "reset" | "error";

export type ParsedAuthCallbackParams = {
  type: string | null;
  accessToken: string | null;
  errorDescription: string | null;
  rawHashOrQuery: string;
};

export function parseAuthCallbackFromLocation(
  hash: string,
  search: string,
): ParsedAuthCallbackParams {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash || search.replace(/^\?/, "");
  const params = new URLSearchParams(raw || search.replace(/^\?/, ""));

  return {
    type: params.get("type"),
    accessToken: params.get("access_token"),
    errorDescription: params.get("error_description"),
    rawHashOrQuery: raw || search.replace(/^\?/, ""),
  };
}

export function resolveAuthCallbackView(params: ParsedAuthCallbackParams): AuthCallbackView {
  if (params.errorDescription) return "error";

  if (params.type === "recovery") return "reset";

  if (params.type === "signup" || params.type === "email_change" || params.accessToken) {
    return "success";
  }

  if (params.rawHashOrQuery) return "success";

  return "error";
}

export function buildAuthCallbackDeepLink(rawHashOrQuery: string): string {
  const fragment = rawHashOrQuery.startsWith("#") ? rawHashOrQuery : `#${rawHashOrQuery}`;
  return `halisaha://auth/callback${fragment}`;
}

export function decodeAuthError(description: string): string {
  return decodeURIComponent(description.replace(/\+/g, " "));
}
