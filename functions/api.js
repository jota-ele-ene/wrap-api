const fetch = require('node-fetch')

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

  let response = "";
  try {
    const res = await fetch(endpoint);
    const jsonResult = await res.json();
    response = JSON.stringify(jsonResult, null, 2);
    console.log("Successful fetch:"+ response);
  } catch (error) {
    response = JSON.stringify({error: error});
    console.log("Fetch error:"+error);
  }

  return {
    statusCode: 200,
    body: response
  }

}
