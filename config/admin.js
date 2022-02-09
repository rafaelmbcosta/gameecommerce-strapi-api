module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d422a189c518a75dae9276f3150a5c1'),
  },
});
