# Coding test for Codere
This is an Ionic application that allows users to look for TV shows based on different genres (drama, comedy, sports, etc.). The data is served by the following open API: http://www.tvmaze.com/api

## Background
This app is part of a technical assessment. It has been code mostly following TDD approach.

## Prerequisites
- Node Version >= 18.13.0
- Npm Version >= 9.8.1

## Getting Started

### General Info
- This app was created using: `ionic start tvApp`. Choosing Angular Standalone Components and a Blank template
- We have you RXJS for requests

### Starting Application
- npm i > To install al node_modules required
- ionic serve > For stating the application


## Testing the application

At this time, we only have unit tests, we have make basic test for the coding test.

---

### `ng test`

This command, will launch a ChromeHeadless Browser (default in karma.conf.js) in watch mode. The runner will run all the tests whenever a change in your code happens.

### `ng lint`

We are using eslint with prettier in order to avoid typical issues and to have a common coding-style.
Feel free to configure your IDE prettier/eslint plugins to don't have the need to run this command.

## Building the application

### `ng build`

This command will generate the app production files, ready to be deployed.