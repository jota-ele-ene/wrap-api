import fetch from "node-fetch";

exports.handler = async (event, context) => {

  const MY_URL_DEFAULT = "https://reqres.in/api/users";
  const MY_PARAM_DEFAULT = "page=2";
  //let myurl = `${process.env.MY_API_URL}?`;
  let myurl = process.env.MY_API_URL;
  let myparam = process.env.MY_PARAM;
  console.log("Variables: "+myurl+","+myparam);


  let message = "";
  let endpoint = "";

  console.log("Navigating to: " + event.rawUrl);
  console.log("--Path: " + event.path);
  console.log("--Query: " + event.rawQuery);
  console.log("--httpMethod: " + event.httpMethod);
  console.log("--queryStringParameters: " + event.queryStringParameters);

  //let response;
  //const data = JSON.parse(event);
  if (Boolean(myurl)==false) {
    myurl = MY_URL_DEFAULT;
  }
  if (Boolean(myparam)==false) {
    myparam = MY_PARAM_DEFAULT;
  }
  if (Boolean(event.rawQuery)) {
    myparam += `&${event.rawQuery}`;
  }
  endpoint = myurl + "?" + myparam;
  message = "URL set to " + endpoint;

  console.log("Endpoint set to "+ endpoint);

  let response
  try {
    response = await fetch(endpoint)
    // handle response
  } catch (err) {
    console.log("Fetch error:"+err);
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }
  console.log("Successful fetch:"+response);

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response
    })
  }

  //return {
  //  statusCode: 200,
  //  body: JSON.stringify({message: message})
  //};

}
