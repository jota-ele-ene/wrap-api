exports.handler = async (event, context) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR);
  return {
    statusCode: 200,
    body: JSON.stringify({message: event.queryStringParameters})
  };
}
