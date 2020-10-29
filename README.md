
# React Boilerplate

[![loomi](https://i.imgur.com/vTJZSja.png)](http://loomi.com.br)

React boilerplate project.

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
They can be:
+ main
+ develop
+ feature
+ fix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _"feature/name-of-feature rest of commit…"._

Must be simple and show briefly what you just did.

Ex: `git commit -m "feature/banner-parallax Added the parallax effect to the background"`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (develop ou master) with `git checkout develop` (or master)
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase develop` (or master)
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. Whan finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

If possible, use this template for the pull request body:

```
### Issue Name
**What I did:**

- First thing I did...

- Second thing I did...

**How to test:**

- Brief notes on how to check if the feature works correctly.
```
