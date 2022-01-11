# Using Netlify serverless functions for wrapping 3rd. party APIs

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

This repo implements [Netlify serverless functions](https://docs.netlify.com/functions/overview/) to wrap third party APIs. After deploying, you can invoke an endpoint. The app builds and invoke a new URL concatenating two strings retrieved from environment variables and the original query string params. You can deploy yourself to manage sensitive information such as secret API keys without exposing them in your public repos or server side code. It is set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

[![Netlify Deploy Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jota-ele-ene/wrap-api)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Table of Contents

- [Using this repo](#using-this-repo)
- [Additional Learning materials](#additional-learning-materials)
  * [Netlify](#netlify)

## Using this repo

Easiest way to deploy your own wrap is to click on the above **Netlify Deploy Button**. However, if you prefer do it manually, follow these few steps:

1. **Verify you have [git](https://git-scm.com/downloads) on your machine**

    To verify you have `git`, open up your terminal and run:

    ```bash
    which git
    ```

    This should return a path of where git is installed. If the command returns `git not found`, we will need to install git on your machine.

2. **Clone this repo**.

    Open up your terminal and run:

    ```bash
    git clone https://github.com/jota-ele-ene/wrap-api.git  
    ```

3. **Login to your [Netlify](https://app.netlify.com/) site**. If you don't already have an Netlify account, let's get one setup.

    Create and deploy a new site by importing your new repo. Navigate to deploys and build environment settings

    Here we need to set the environment variables we will access through our function. In the example, we use the [REG|RES service](https://reqres.in) to test:

    * `MY_PARAM` = `page=2`

    * `MY_API_URL` = `https://reqres.in/api/users`    

    See the [build environment variable docs](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)

4. **Configure your own function**.

    Modify the code in `functions/api.js` file to meet your needs. Default behaviour is this:
    ```bash
    * You invoke https://your-site-url.netlify.com/.netlify/api?param1=value1&param2=value2&....&paramN=valueN
    * The app build a new endpoint concatenating <MY_API_URL> + "?" + <MY_PARAM> + "param1=value1&param2=value2&....&paramN=valueN"
    * The app invoke the new Endpoint
    * The app response you with the response served in that endpoint

    In the example, the built endpoint is https://reqres.in/api/users?page=2

    You can see how we access the newly created environment variables on the `process.env` object by `process.env.[YourEnvKeyName]`

    You can use the variables to set your the endpoint and the secret API KEYS for third party APIs without publicly exposing them in your code.

5. Now, if you modified the code, **deploy the site & functions**

6. Finally, **verify the your function**

    Invoke the function to verify it is returning the expected response values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/api
    ```

    Or visit the URL in your browser

    It should redirect your request to the URL build by concatenating `MY_API_URL`, the `queryparams` string and `MY_PARAM` and get its response. In the example, the invoked URL should be `https://reqres.in/api/users?page=2`.

## Additional Learning materials

### Netlify

- [Function Docs](https://www.netlify.com/docs/functions/)
- [Function Examples](https://functions.netlify.com/examples)
- [Function Tutorials](https://functions.netlify.com/tutorials)
