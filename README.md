<h1>
  Social Lite &nbsp; <sup><i>Social Trainer App</i></sup><br>
  <a href="https://circleci.com/gh/kriasoft/react-firebase-starter"><img src="https://circleci.com/gh/kriasoft/react-firebase-starter.svg?style=svg" alt="Build Status" height="20" /></a>
  <img src="https://api.dependabot.com/badges/status?host=github&repo=kriasoft/react-firebase-starter" alt="Dependabot" height="20" />
  <a href="https://opencollective.com/react-firebase-starter"><img src="https://opencollective.com/react-firebase-starter/backers/badge.svg?maxAge=3600" height="20"></a>
  <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&amp;label=Follow&amp;maxAge=3600" alt="Twitter" height="20"></a>
  <a href="https://discord.gg/2nKEnKq"><img src="https://img.shields.io/badge/chat-Discord-green.svg?style=social&amp;maxAge=3600" height="20"></a>
</h1>

### What It Does

**Social Lite** is an app that helps those want to improve their social skills by 
suggesting events and challenges to the user. These challenges and events are suggested to help 
the user experience new things little by little. Once the user completes the challenge or goes to an event, 
they will be rewarded. 

Our webpage (<a heref="www.social-lite.tech">Social Lite</a>) contains user authentication, .....

<NOTE INSERT MORE HERE>

_for Firebase_ is a popular project template (aka, boilerplate) for building
modern, scalable web applications with React, Relay, and GraphQL using serverless infrastructure
provided by <a href="https://cloud.google.com/">Google Cloud</a> (Cloud SQL, Cloud Functions, CDN
hosting, and file storage). It allows you to save time and build upon a solid foundation and
design patterns.

<p align="center"><strong>View</strong> <a href="https://firebase.reactstarter.com">online demo</a> (<a href="https://firebase.reactstarter.com/graphql">API</a>, <a href="https://firebase.reactstarter.com/graphql/model">data model</a>) &nbsp;|&nbsp; <strong>Follow us</strong> on <a href="https://twitter.com/ReactStarter">Twitter</a> &nbsp;|&nbsp; <strong>Get FREE support</strong> on <a href="https://discord.gg/2nKEnKq">Discord</a> &nbsp;|&nbsp; <a href="https://angel.co/company/kriasoft/jobs/"><strong>We're hiring!</strong></a></p>

---

This project was bootstrapped with [React Starter Kit for Firebase][rfs] by [Kriasoft][kriasoft].

### What We Build (Tech Stack)

- [Create React App][cra] (★ 73k) for development and test infrastructure (see [user guide][cradocs])
- [Material UI][mui] (★ 52k) to reduce development time by integrating Google's [Material Design][material]
- [Passport.js][passport] (★ 17k) for authentication configured with stateless JWT tokens for sessions
- [GraphQL.js][gqljs] (★ 15k) and [Relay][relay] (★ 14k) for declarative data fetching and efficient client stage management
- [Universal Router][router] (★ 1k) + [history][history] (★ 6k) for declarative routing and client-side navigation optimized for [Relay][relay]
- [PostgreSQL][psql] database pre-configured with a query builder and migrations using [Knex.js][knex] (★ 11k)
- [Google Cloud][gcp] & [Firebase][firebase] for serverless architecture - Cloud SQL, Cloud Functions, CDN hosting, file storage ([docs][fbdocs])

Also, you need to be familiar with [HTML][html], [CSS][css], [JavaScript][js] ([ES2015][es2015]) and [React](https://reactjs.org/docs/).

### Challenges We Ran Into

### Accomplishments We Are Proud Of

### What We Learned

### What's Next for Social Lite?


### Prerequisites

- [Node.js][nodejs] v10.15 or higher + [Yarn][yarn] v1.17 or higher &nbsp; (_HINT: On Mac install
  them via [Brew][brew]_)
- [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins
- [Watchman][watchman] file watcher used by Relay Modern
- [PostgreSQL][postgres] v9.6 or newer, only if you're planning to use a local db for development

### Getting Started

Just clone the repo, update environment variables in `.env` and/or `.env.local` file, and start
hacking:

```bash
$ git clone https://github.com/jongan69/sociallite.git MyApp
$ cd MyApp
$ yarn setup                       # Installs dependencies; creates PostgreSQL database
$ yarn start                       # Compile the app and opens it in a browser with "live reload"
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

In order to re-compile GraphQL fragments, run `yarn relay` or `yarn relay --watch` (in watch mode).

[rfs]: https://github.com/kriasoft/react-firebase-starter
[kriasoft]: https://github.com/kriasoft
[telegram]: https://t.me/ReactStarter
[cra]: https://github.com/facebook/create-react-app
[cradocs]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
[psql]: https://www.postgresql.org/
[cloudsql]: https://cloud.google.com/sql/
[knex]: http://knexjs.org/
[gqljs]: http://graphql.org/graphql-js/
[relay]: http://facebook.github.io/relay/
[mui]: https://material-ui-next.com/
[material]: https://material.io/
[passport]: http://www.passportjs.org/
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[es2015]: http://babeljs.io/learn-es2015/
[react]: https://facebook.github.io/react/
[relay]: https://facebook.github.io/relay/
[gcp]: https://cloud.google.com/
[firebase]: https://firebase.google.com/
[fbdocs]: https://firebase.google.com/docs/web
[router]: https://github.com/kriasoft/universal-router
[history]: https://github.com/ReactTraining/history
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[brew]: https://brew.sh/
[wm]: https://facebook.github.io/watchman/
[relaycompiler]: http://facebook.github.io/relay/docs/relay-compiler.html
[vc]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[watchman]: https://github.com/facebook/watchman
[postgres]: https://www.postgresql.org/
[bc]: https://www.scootersoftware.com/
