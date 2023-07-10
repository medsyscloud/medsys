const mySettings = {
  // The API located at the URL below should be used only     
  // for software development and testing. 
  // ICD content at this location might not
  // be up to date or complete. 
  // For production, use the API located at
  // id.who.int with proper OAUTH authentication
  apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
  language: "es" // set the language to Spanish
};

// configure the ECT Handler
ECT.Handler.configure(mySettings);