import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: any,
  expireTime: string
): string => {
  console.log(payload, secret, expireTime);
  return jwt.sign(
    {
      data: payload,
    },
    secret,
    {
      expiresIn: expireTime,
    }
  );
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
