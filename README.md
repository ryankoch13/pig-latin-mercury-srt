# Pig Latin Activity

In this activity we're going to create an application that translates regular English words into Pig Latin.  We'll use a React application as a template to run the code that we are going to write for Pig Latin.

We're going to use Mob Programming to practice our wireframing and programming skills while we build a Pig Latin translator application.  Not fluent in Pig Latin yet?  No problem, you'll pick it up in no time. [ How to speak Pig Latin. ](http://www.wikihow.com/Speak-Pig-Latin)

### Rules of Pig Latin
* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* "y" is treated like a vowel in appropriate circumstances.

There are many [ examples ](http://funtranslations.com/pig-latin) of Pig Latin translators out there on the Internet to give you inspiration.

### Mob Programming
"All the brilliant minds working together on the same thing, at the same time, in the same space, and at the same computer," [Mob Programming](http://mobprogramming.org/)

Mob programming is a scaled up version of pair programming. There is still a driver with their hands on the keyboard and a navigator that is directing the driver. The third person on the team can be researching as well as helping the navigator guide the driver. Everybody in the group contributes to the implementation.

**Mob Programming Best Practices**
* Change drivers every 30 minutes
* Make sure everyone understands what's going on at all times
* Take personal responsibility to stay engaged - ask questions, contribute ideas
* Take breaks together
* Help teammates stay engaged "Do you have any ideas.  Does that make sense to you?"

### Getting started

All the code you'll need to write for this app is going to be inside one function in the `/src/App.js` file.

After you accept the assignment, you'll want to install all the npm packages using Yarn:

```bash
$ cd ./Challenge-Pig-Latin-React
$ yarn install
```

If you get an error about Yarn not being found:
```bash
Command 'yarn' not found
```

You can install it with:

```bash
$ npm install -g yarn
```

Then you are ready to start a server to run the application:

```bash
$ yarn start
```

Now you're ready to code!

To get started, find the `myPigLatinCodeHere` function, and write your code.  Every time you save your updated file, the browser window displaying your app will reload.

**A note for Cloud 9 Users**
Once you run the `yarn start` command above,  You'll want to click the 'Preview' button to see your running application.



### Pig Latin Challenge
* Take the time to plan your approach.
* This is a difficult logic problem to solve, brainstorm with your team and create a road map for your approach.


**MVP - Minimum Viable Product**
* As a user, I can type a sentence of English words into the Pig Latin application.
* As a user, when I click Submit, I see a Pig Latin translation of the sentence I entered.
* As a user, the page is styled, and pleasing to use.

**User Stretch Goals**
- As a user, I can input a sentence that includes punctuation.
- As a user, I can input a sentence that includes lower and upper case words.
- As a user, I can input a sentence that includes special characters.
- As a user, I can know if I am using the application correctly.
- As a user, I can see the application on a smaller screen or mobile devise.
- As a user, I can use accessibility tools such as a screen reader to interact with the application.

**Developer Stretch Goals**
- As a developer, I have a well commented application.
- As a developer, I have tests for my pigLatin function.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application deployed as a live website.
