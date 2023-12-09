var appConfig = {
  defaultLanguage: "en",

  creditsText: "OCPP Central System © 2023",
  creditsShortText: "Central System",

  signIn: "/signin",
  signUp: "/signup",

  confAuthorize: false,
  confCrm: false,
  confDriver: false,
  confOcpp: true,
  confAdmin: false,
  googleAuthorize: false,

  mapLanguage: "en_US",

  googleClientId: null,

  ocppApiDomain: "http://localhost:9220",
  ocppApiPath: "/api/v1",
  ocppApiClientId: "web-ocpp-css.com",

  apiTokenUrl: "/oauth2/token",
  apiDomain: "http://localhost:4977",
  wsDomain: "ws://localhost:4977",
  apiPath: "/api/v1",
  apiClientId: "web-ocpp-css.com",

  adminReferences: {
    model: {
      extraFields: {
        vendor: {
          type: "reference",
          path: "/vendor/list",
          required: true,
        },
      },
    },
    vendor: {},
    network: {},
  },

  maxFileSize: 512000
};
