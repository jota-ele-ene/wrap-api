exports.handler = async (event, context) => {

  const DEFAULT_MESSAGE = "It seems that the environment variables are not initialised.";

  console.log(event);

  let response;
  //const data = JSON.parse(event);
  if (process.env.MY_API_URL && process.env.MY_PARAM)
  {
    let myurl = process.env.MY_API_URL;
    let myparam = process.env.MY_PARAM;
    console.log('process.env.MY_API_URL read: ', myurl);
    console.log('process.env.MY_PARAM read: ',myparam);
    response = JSON.stringify({message: "Env variables process.env.MY_API_URL and process.env.MY_PARAM read"})
  }
  else {
    console.log('Either process.env.MY_API_URL or process.env.MY_PARAM are unset.'');
    response = JSON.stringify({message: DEFAULT_MESSAGE})
  }
  return {
    statusCode: 200,
    body: response
  };
}
