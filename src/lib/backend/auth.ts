import jwt from "jsonwebtoken";

import type { LoginUser } from "./types";

type AuthPayload = {
  sub: string;
  email: string;
  nama: string;
  role: LoginUser["role"];
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET belum dikonfigurasi.");
  }
  return secret;
}

export function signAccessToken(payload: AuthPayload) {
  const expiresIn = (process.env.JWT_EXPIRES_IN ?? "1d") as jwt.SignOptions["expiresIn"];

  return jwt.sign(payload, getJwtSecret(), {
    expiresIn,
  });
}

export function verifyAccessToken(token: string) {
  try {
    const decoded = jwt.verify(token, getJwtSecret());
    return decoded as AuthPayload;
  } catch {
    return null;
  }
}

export function readBearerToken(req: Request) {
  const header = req.headers.get("authorization");
  if (!header) {
    return null;
  }

  const [type, token] = header.split(" ");
  if (type?.toLowerCase() !== "bearer" || !token) {
    return null;
  }

  return token;
}
