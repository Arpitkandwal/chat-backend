    module.exports = {
        // other plugin configurations...
        'users-permissions': {
        enabled: true,
        config: {
            jwt: {
            // @ts-ignore
            jwtSecret: crypto.randomBytes(16).toString('base64'), // Replace this with your generated secret
            },
        },
        },
    };
    