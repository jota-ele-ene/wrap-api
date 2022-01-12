# Using Netlify serverless functions for wrapping 3rd. party APIs [![Netlify Status](https://api.netlify.com/api/v1/badges/aecac50a-bebe-4399-969e-43b66dcad90b/deploy-status)](https://app.netlify.com/sites/wrap-api/deploys)

[![GitHub license](https://img.shields.io/github/license/jota-ele-ene/wrap-api)](https://github.com/jota-ele-ene/wrap-api/blob/main/LICENSE)
[![GitHub release (latest by date)](https://img.shields.io/badge/release-v1.0--alpha.1-lightgrey)](https://github.com/jota-ele-ene/wrap-api/releases)
[![GitHub issues](https://img.shields.io/github/issues/jota-ele-ene/wrap-api)](https://github.com/jota-ele-ene/wrap-api/issues)

This repo implements [Netlify serverless functions](https://docs.netlify.com/functions/overview/) to wrap third party APIs. After deploying, you can invoke an endpoint. The app builds and invokes a new URL concatenating two strings retrieved from environment variables and the original query string params. You can deploy yourself to manage sensitive information such as secret API keys without exposing them in your public repos or client side code. It is set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

## Table of Contents

- [Demo site](#demo-site)
- [How it works](#how-it-works)
- [Using this repo](#using-this-repo)
- [Roadmap](#roadmap)
- [Suggestions, bugs and whatever](#suggestions-bugs-and-whatever)
- [License](#license)
- [Additional Learning materials](#additional-learning-materials)
- [Author](#author)

## Demo Site

  To see this function in action, here is deployed a live [demo site](https://wrap-api.netlify.app/api) that retrieves a JSON demo obj from [REG|RES service](https://reqres.in) for testing purpose.

  Deploy and configure your own site in the simplest and quickest way possible by clicking this button:

  [![Netlify Deploy Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jota-ele-ene/wrap-api#MY_API_URL=https://reqres.in/api/users&MY_PARAM=page=2)

  If you do that, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## How it works

Once deployed, default behaviour is this:

1. You invoke your site's URL in that way: https://your-site-url.netlify.com/api?param1=value1&param2=value2&....&paramN=valueN

2. The site builds a new Endpoint by concatenating

    ```bash
    <MY_API_URL> + "?" + <MY_PARAM> + "param1=value1&param2=value2&....&paramN=valueN"
    ```
3. The site invokes the new Endpoint

4. The site responses you with the response served in that endpoint

In the example, the built endpoint is https://reqres.in/api/users?page=2. You can set the values for environment variables `MY_API_URL` and `MY_PARAM` that fit your case navigating to your site's deploys and build environment settings in Netlify.

You can use the variables to set the endpoint and the secret API KEYS for third party APIs without publicly exposing them in your code.

## Using this repo

Easiest way to deploy your own wrap is to click on the above **Netlify Deploy Button** and follow the guided steps. Once deployed, you will have to navigate to your new site's deploys and build environment settings in Netlify to set the environment variables that will make your case.

If you prefer do it manually, follow these few steps:

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

3. **Configure your own function**.

    Review the function code in `functions/api.js` file and check if it meets your needs. Commit your changes.

    You can see how we access the environment variables on the `process.env` object by `process.env.MY_API_URL` and `process.env.MY_PARAM`.

    After deploying the site in Netlify, you can set the values required for fitting your case.

4. **Login to your [Netlify](https://app.netlify.com/) site**. If you don't already have an Netlify account, let's get one setup.

    Create and deploy a new site by importing your new repo. Navigate to deploys and build environment settings. Here we need to set the environment variables we will access through our function. In the example, we use the [REG|RES service](https://reqres.in) to test:

    * `MY_PARAM` = `page=2`

    * `MY_API_URL` = `https://reqres.in/api/users`    

    See the [build environment variable docs](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables). These values are pre-filled if you chose to deploy with the Netlify Deploy button above.

5. Finally, **verify the your function**

    Invoke the function to verify it is returning the expected response values

    Open your terminal and run the following command:

    ```bash
    curl -X GET https://your-site-url.netlify.com/api
    ```

    Or visit the URL in your browser

    It should redirect your request to the URL build by concatenating the values of `MY_API_URL` and `MY_PARAM` and get its response. In the example, the invoked URL should be `https://reqres.in/api/users?page=2`.

## Roadmap

Visit the [To-do column](https://github.com/users/jota-ele-ene/projects/1) in the basic kanban-style board open to manage this repo roadmap.

## Suggestions, bugs and whatever

All feedback is welcome! Head over to the [issue tracker](https://github.com/jota-ele-ene/wrap-api/issues).

## License

This repo is licensed under the **MIT** license. Check the [LICENSE file](https://github.com/jota-ele-ene/wrap-api/blob/main/LICENSE) for details.

Thanks to the authors of following resources, among others, used for developing this code:

- [Netlify Functions Serverless Workshop](https://github.com/DavidWells/netlify-functions-workshop)
- [REG|RES service](https://reqres.in)

## Additional Learning materials

- [Netlify Functions Docs](https://www.netlify.com/docs/functions/)
- [Netlify Functions Examples](https://functions.netlify.com/examples)
- [Netlify Functions Tutorials](https://functions.netlify.com/tutorials)
- [Netlify Functions Serverless Workshop](https://github.com/DavidWells/netlify-functions-workshop)

## Author

José Luis Núñez [https://joseluisnuñez.es](https://joseluisnuñez.es)

if you find this repo useful, enjoy it and please consider buying me a coffee ☕️.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U7U27W8VV)

Thanks! ❤️
