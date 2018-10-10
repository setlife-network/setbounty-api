require('@babel/polyfill')
require('@babel/register')({
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread"
    ]
})
require('./src/server.js')