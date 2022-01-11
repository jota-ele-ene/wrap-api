exports.handler = async (event, context) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR);
  const myurl = process.env.MY_API_URL;
  const myparam = process.env.MY_PARAM;
  if (myurl)
    console.log('process.env.MY_API_URL set: ', myurl);
  else {
    myurl = process.env.MY_API_URL_DEFAULT;
    console.log('process.env.MY_API_URL unset. Reading DEFAULT ', myurl);
  }
  if (myparam)
    console.log('process.env.MY_PARAM set: ', myparam);
  else {
    myurl = process.env.MY_PARAM_DEFAULT;
    console.log('process.env.MY_PARAM unset. Reading DEFAULT ', myparam);    
  }
  return {
    statusCode: 200,
    body: JSON.stringify({message: event.queryStringParameters})
  };
}
