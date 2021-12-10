export default {
  SERVER: {
    API_URL: process.env.API_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: Number(process.env.PORT),
  },
  MONGO: {
    URI: process.env.MONGO_URI,
  },
  AUTH: {
    SALT_ROUND: Number(process.env.SALT_ROUND),
    EXPIRES_IN_TOKEN: process.env.EXPIRES_IN_TOKEN,
    EXPIRES_IN_REFRESH_TOKEN: process.env.EXPIRES_IN_REFRESH_TOKEN,
  },
};
