// // Request data goes here
// // The example below assumes JSON formatting which may be updated
// // depending on the format your endpoint expects.
// // More information can be found here:
// // https://docs.microsoft.com/azure/machine-learning/how-to-deploy-advanced-entry-script
// const requestBody = "" ;

// const requestHeaders = new Headers({"Content-Type" : "application/json"});

// // Replace this with the primary/secondary key, AMLToken, or Microsoft Entra ID token for the endpoint
// const apiKey = "";
// if (!apiKey)
// {
// throw new Exception("A key should be provided to invoke the endpoint");
// }
// requestHeaders.append("Authorization", "Bearer " + apiKey)

// // This header will force the request to go to a specific deployment.
// // Remove this line to have the request observe the endpoint traffic rules
// requestHeaders.append("azureml-model-deployment", "braintumor-1");

// const url = "https://braintumor-workspace-guyap.eastus.inference.ml.azure.com/score";

// fetch(url, {
// method: "POST",
// body: JSON.stringify(requestBody),
// headers: requestHeaders
// })
// .then((response) => {
// if (response.ok) {
// return response.json();
// } else {
// // Print the headers - they include the request ID and the timestamp, which are useful for debugging the failure
// console.debug(...response.headers);
// console.debug(response.body)
// throw new Error("Request failed with status code" + response.status);
// }
// })
// .then((json) => console.log(json))
// .catch((error) => {
// console.error(error)
// });

const requestBody = {"image_url": "https://www.uniklinik-freiburg.de/fileadmin/mediapool/07_kliniken/nch_neurochir/bilder/gliom-gross.jpg"};  // Replace with your actual request body object

const requestHeaders = new Headers({
  "Content-Type": "application/json"
});

const apiKey = "6MUJqtpiLKfbYv3Hgn8OBcNr1ciaXjzd";  // Replace with your actual API key

if (!apiKey) {
  throw new Error("API key is required to invoke the endpoint");
}

requestHeaders.append("Authorization", "Bearer " + apiKey);

// This header specifies the deployment to which the request should go
requestHeaders.append("azureml-model-deployment", "braintumor-1");

const url = "https://braintumor-workspace-guyap.eastus.inference.ml.azure.com/score";  // Replace with your actual endpoint URL

fetch(url, {
  method: "POST",
  body: JSON.stringify(requestBody),
  headers: requestHeaders
})
.then(response => {
  if (!response.ok) {
    // If response is not ok (HTTP status is not in the range 200-299)
    console.debug("Response headers:", ...response.headers);  // Print headers for debugging
    return response.text().then(text => {
      console.debug("Response body:", text);  // Print response body for debugging
      throw new Error("Request failed with status code " + response.status);
    });
  }
  return response.json();  // Parse JSON from the response
})
.then(json => {
  console.log("Response JSON:", json);  // Handle successful response
})
.catch(error => {
  console.error("Fetch error:", error);  // Catch and log any fetch errors
});
