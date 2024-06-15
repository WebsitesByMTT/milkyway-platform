const _config = {
  server: process.env.NEXT_PUBLIC_SERVER_URL,
  secretKey: process.env.NEXT_PUBLIC_JWT_TOKEN,
  nodeEnv: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
