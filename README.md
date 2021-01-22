
# React Boilerplate

[![loomi](https://i.imgur.com/vTJZSja.png)](http://loomi.com.br)

React boilerplate project. Changed Readme.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have NodeJS installed on your computer to run this project. For that, visit [nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installing

Clone the GitHub repository

```
git clone https://github.com/loomi/react_boilerplate
```
Enter the react project folder

```
cd react_boilerplate
```

Install and start the npm project

```
yarn install
yarn start
```

Now, you can see the app running at [localhost:3000](http://localhost:3000)


## Running the project

To run the project (if already installed), just follow this simple commands:

```
yarn start
```

## Built With

* **React** - _for front-end_.

## GitHub

### Branches

The branch name must follow the structure: `<type>/<scope>`

**Possible types:**

1. **feature**: are used when developing a new feature or enhancement which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known;
2. **fix**: differ from feature branches only semantically. They will be created when there is a bug on the live site that should be fixed and merged into the next deployment. For that reason, a bug branch typically will not last longer than one deployment cycle;
3. **upgrade**: comes from the need to act upon an undesired state of a live production version. Additionally, sometimes, because of the urgency, a hotfix is not required to be be pushed during a scheduled deployment. Due to these requirements, a upgrade branch is always branched from a tagged stable branch.

**Scope:** Name of functionality or enhancement, based on the issue. Can have up to three words, in lower case, with a hyphen as the word separator.

### Commits

The commit name must follow the structure: `<branch type>(<branch scope>): <message>`

**Message:** should be clear and meaningful. Lowercase, short (50 chars or less) summary, using imperative, like "fix bug" and not "fixed bug" or "fixes bug" - this convention matches up with commit messages generated
by commands like `git merge` and `git revert`.

### Pull Requests

**Name**: Branch name

**Body**: Use this template:

```markdown
**Feature**

***What I did:***

- <thing I’ve done>
   - <detailing>
---
***How to test:***

1. In your browser go to [http://localhost:3000/](http://localhost:3000/)
2. Check if the component/view looks just like the [mockup](<mockup link>) in different screen sizes (width between 1024px and 1920px)
3. <issue specific action test>
4. Test the things that you think are worth testing, even the ones that are not in this description
```
