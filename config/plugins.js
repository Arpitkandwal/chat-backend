module.exports = {
    // other plugin configurations...
    'users-permissions': {
      enabled: true,
      config: {
        jwt: {
          jwtSecret: process.env.JWT_SECRET || 'axjnshh12321', // You can use an environment variable here
        },
      },
    },
  };
  