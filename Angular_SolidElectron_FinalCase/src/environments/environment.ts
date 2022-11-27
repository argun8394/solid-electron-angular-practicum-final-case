// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const baseUrl = 'http://localhost:3000';
export const  productsUrl =  baseUrl + '/products';

export const environment = {
  firebase: {
    projectId: 'angular-solid-electron',
    appId: '1:8458803923:web:30c174dfbca217c0eed226',
    storageBucket: 'angular-solid-electron.appspot.com',
    apiKey: 'AIzaSyCtdaaf6WnoI7bPNa0D3mfNRIpnec2BjV4',
    authDomain: 'angular-solid-electron.firebaseapp.com',
    messagingSenderId: '8458803923',
    measurementId: 'G-4H30SYBDMQ',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
