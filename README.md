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

3. Login to your Netlify site

    Create and deploy a new site by importing your repo. Navigate to deploys and build environment settings

    Here we need to set the environment variables we will access through our function:
    
    * `MY_ENV_VAR` = `page=2`

    * `MY_API_URL` = `https://reqres.in/api/users`

    In the example, we use the [REG|RES service](https://reqres.in) to test.
    
    See the [build environment variable docs](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables)

4. **Configure your own function**. 

    Modify the `functions/api.js` file in the functions directory and modify the code to meet your needs. In the example, we read 'MY_ENV_VAR' and concatenate as a new param to the `MY_API_URL` variable. You can use the variables to set your secret API KEYS and add them to the query. 
    
    Access the newly created environment variables on the `process.env` object.

    `process.env.[YourEnvKeyName]`

5. Now deploy the site & functions

6. Verify the your function

    Invoke the functions to verify they are returning the expected response values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/.netlify/functions/api
    ```

    Or visit the URL in your browser


6. Invoke the function to ensure it's working properly

    Visit your site and the URL https://your-site-url.netlify.com/.netlify/functions/node-fetch

    It should redirect you to a new location.



3. **Setup a Netlify account**. 

    If you don't already have an Netlify account, let's get one setup.

    [Click here to setup a free Netlify account](http://app.netlify.com)

4. **[Install Netlify CLI](https://cli.netlify.com/)**

    Open up your terminal and run:

    ```bash
    npm install netlify-cli -g
    ```

5. **Connect the Netlify CLI with your Netlify account**. 

    Open up your terminal and run:

    ```bash
    netlify login
    ```

6. **Verify the Netlify CLI works on your machine**

    Open up your terminal and run:

    ```
    netlify --help
    ```

    This should return the list of commands from the CLI tool.

**Bonus setup:**

- Install [postman](https://www.getpostman.com/) for quick & easy testing of endpoints we deploy
- It's also recommended that you use [nvm](https://github.com/creationix/nvm) (node version manager) just in case you need to change versions of node for the workshop.


## Additional Learning materials

### Netlify

- [Function Docs](https://www.netlify.com/docs/functions/)
- [Function Examples](https://functions.netlify.com/examples)
- [Function Tutorials](https://functions.netlify.com/tutorials)
