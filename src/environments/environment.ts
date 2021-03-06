// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    siteHeader: "Budgets",
    auth: {
        realm: "Test",
        domain: 'bgeo.auth0.com',
        clientID: 'LvwH7Wr1Iir3prvhmbvn4Qx6xDxz47JB',
        audience: 'localhost:5000/api'
    },
    apiEndpoint: 'http://localhost:5000/api'
};
