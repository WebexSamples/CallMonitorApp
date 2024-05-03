# Sidebar Embedded App

This Webex Sample App showcases the [Embedded App Sidebar](https://developer.webex.com/docs/embedded-apps-framework-sidebar-api-quick-start) feature.
This application is a mock customer relationship manager tool that utilizes the Embedded App SDK to look up customer data of an incoming Webex Call.

## Setup

Follow these steps to set up and run this project:

1. **Clone the repository**: First, clone this repository to your local machine using `git clone git@github.com:WebexSamples/CallMonitorApp.git`.

2. **Install dependencies**: Navigate to the project directory and run `npm install` to install the necessary dependencies.

3. **Start Server**: Run the server for the application with `npm start`.

4. **Add Webex Embedded App**: Follow the instructions [here](https://developer.webex.com/docs/embedded-apps-guide) to create a new Webex Embedded App with the Start URL configured as your server's address.

## Code Formatting

This project uses [Prettier](https://prettier.io/) to maintain code consistency. To format your code, run:

```bash
npm run format
```

## Github Actions

This project uses a GitHub Actions workflow to check if the code is formatted correctly with Prettier. The workflow runs on every pull request.

Here's a brief overview of the steps in the workflow:

1. Check out code: This step checks out your repository's code so the workflow can access it.

1. Use Node.js: This step sets up a specific version of Node.js on the runner. In this case, it's version 20.

1. Install dependencies: This step installs the project's dependencies using npm ci.

1. Check formatting: This step runs npx prettier --check . to check if all files are formatted correctly. If any files are not formatted correctly, this command will fail, and so will the GitHub Action, causing the PR to be marked as failed.

To see the results of the workflow, navigate to the "Actions" tab in your GitHub repository.

## Don't be a Stranger

- https://developer.webex.com/docs
- https://developer.webex.com/blog
- https://developer.webex.com/support
- @WebexDevs: https://twitter.com/webexdevs

Made with <3 by the Webex Developer Evangelism Team at Cisco
