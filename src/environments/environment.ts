// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: process.env['NG_APP_FB_API_KEY'],
    authDomain: process.env['NG_APP_FB_AUTH_DOMAIN'],
    projectId: process.env['NG_APP_FB_PROJECT_ID'],
    storageBucket: process.env['NG_APP_FB_STORAGE_BUCKET'],
    messagingSenderId: process.env['NG_APP_FB_MESSAGING_SENDER'],
    appId: process.env['NG_APP_FB_APP_ID'],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
