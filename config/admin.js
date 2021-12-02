module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4495d9a980e164a664df9582ae7a8a3'),
  },
});
