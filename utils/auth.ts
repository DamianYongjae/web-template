import cookie from "cookie";
import config from "../config";
export const cookieName = {
  token: "__session",
  authorization: "Authorization",
};
export const cookieOptions = {
  maxAge: 60 * 60 * 24,
  path: "/",
  domain: config.domain,
};
export const logout = async () => {
  if (typeof document !== "undefined") {
    document.cookie = `${cookieName.token}=; path=/; domain=${config.domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    document.cookie = `${cookieName.authorization}=; path=/; domain=${config.domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    window.location.reload();
  }
};
export const login = (token: any) => {
  document.cookie = cookie.serialize(
    cookieName.token,
    String(token),
    cookieOptions
  );
  document.cookie = cookie.serialize(
    cookieName.authorization,
    `Bearer ${token}`,
    cookieOptions
  );
};
