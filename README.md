<p align="center">
  <a href="https://letmeask-f0bbd.web.app/">
    <img src="https://github.com/andreseichi/letmeask/blob/master/src/assets/images/logo.svg" height="150" width="175" alt="LetMeAsk" />
  </a>
</p>

<h1 align="center">Let Me Ask</h1>
<p align="center">A ReactJS project that allow you to create and use rooms to ask and answer questions</p>

<p align="center">
 <a href="#techs">Techs</a> • 
 <a href="#install">Install</a> •
 <a href="#firebase">Firebase</a> •
 <a href="#deployment">Deployment</a>
</p>

<img src="https://github.com/andreseichi/letmeask/blob/master/src/assets/images/screenshot.png">

## Techs

<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Typescript"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" alt="Sass"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"/></code>
<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" alt="Firebase"/></code>

## Install

<p>Clone the project</p>

```
git clone https://github.com/andreseichi/letmeask
```

```
cd letmeask/
```

<p>Install the yarn package manager</p>

```
yarn install
```

## Firebase

<p>You need to create a realtime database with the <a href="https://console.firebase.google.com/"> Google Firebase </a></p>
<p>Also, you need to create the rules for that database:</p>

```
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
          }
        }
      }
    }
  }
}
```

## Deployment

<p>To make the deploy using the firebase, first you need to install globally the firebase-tools package</p>

```
npm install -g firebase-tools
```

<p>and then make the deploy</p>

```
firebase login
```

```
firebase init
```
