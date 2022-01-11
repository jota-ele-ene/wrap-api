# Using Netlify serverless functions for wrapping 3rd. party APIs

This repo implements [Netlify serverless functions](https://docs.netlify.com/functions/overview/) that exposes an endpoint and adds a string retrieved from an environment variable values to the querystring params. You can deploy yourself to manage sensitive information such as secret API keys.

## Table of Contents

- [Using this repo](#using-this-repo)
- [Prerequisites & Setup Steps](#prerequisites--setup-steps)
- [Additional Learning materials](#additional-learning-materials)
  * [Netlify](#netlify)

## Using this repo

After following the [prerequisite setup steps](#prerequisites--setup-steps), work from the [**lessons**](./lessons) folders.

If you get stuck or want to look ahead checkout the [**lessons-code-complete**](./lessons-code-complete) directory for the completed code.

## Prerequisites & Setup Steps

1. **Verify you have [git](https://git-scm.com/downloads) on your machine**

    Most machines come pre-loaded with git. 🎉

    To verify you have `git`, open up your terminal and run:

    ```bash
    which git
    ```

    This should return a path of where git is installed. If the command returns `git not found`, we will need to install git on your machine.

2. **Clone this repo**. 

3. **Login to your [Netlify](https://app.netlify.com/) site**. If you don't already have an Netlify account, let's get one setup.

    Create and deploy a new site by importing your repo. Navigate to deploys and build environment settings

    Here we need to set the environment variables we will access through our function. In the example, we use the [REG|RES service](https://reqres.in) to test:
    
    * `MY_PARAM` = `page=2`

    * `MY_API_URL` = `https://reqres.in/api/users`    
    
    See the [build environment variable docs](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)

4. **Configure your own function**. 

    Modify the `functions/api.js` file in the functions directory and modify the code to meet your needs. In the example, we read 'MY_PARAM' and concatenate as a new param to the `MY_API_URL` variable. You can use the variables to set your secret API KEYS and add them to the query. 
    
    You can see how we access the newly created environment variables on the `process.env` object by `process.env.[YourEnvKeyName]`

5. Now **deploy the site & functions**

6. Finally, **verify the your function**

    Invoke the function to verify it is returning the expected response values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/api
    ```

    Or visit the URL in your browser

    It should redirect your request to the URL build by concatenating `MY_API_URL`, the `queryparams` string and `MY_PARAM' and get its response. In the example, the invoked URL should be `https://reqres.in/api/users?page=2`.

## Additional Learning materials

### Netlify

- [Function Docs](https://www.netlify.com/docs/functions/)
- [Function Examples](https://functions.netlify.com/examples)
- [Function Tutorials](https://functions.netlify.com/tutorials)
