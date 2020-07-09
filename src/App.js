import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []
    const vowArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code
      let currWordArr = currentWord.split("")
      //If else tree

      //First letter vowel
      if (vowArr.includes(currWordArr[0])) {
          currWordArr.push("w", "a", "y")
          let newPigWord = currWordArr.join("")
          translatedWordsArray.push(newPigWord)
      }


      //First letter/s consanant
      if (false == vowArr.includes(currWordArr[0])) {
        //Create a while loop to specify  when to stop iterating at the sight of first vowel
        while (vowArr.includes(currWordArr[0])) {
          currWordArr.push(currWordArr.shift())
        }
        currWordArr.push("a", "y")
        let newPigWord = currWordArr.join("")
        translatedWordsArray.push(newPigWord)
      }

      //If the first letter is 'q' and the second is "u"
      if (currWordArr[0] == "q" && currWordArr[1] == "u") {
        //This takes "q" and put it at the end
        currWordArr.push(currWordArr.shift())
        //This takes "u" and put it at the end
        currWordArr.push(currWordArr.shift())
        
        currWordArr.push("a", "y")
        let newPigWord = currWordArr.join("")
        translatedWordsArray.push(newPigWord)
      }


//if the word array does not have the vowel then the array of consanants will be removed from the array and pushed to the end

      //Y as a vowel
      //Create if statement that determines if a word contains a vowel
      if ([] == currWordArray.filter(value => vowelArr.contains(value))) {
      //Run following logic if it does not contain a vowel
        while (currWordArray[0] !== "y"){
          currWordArr.push(currWordArr.shift())
        }
        currWordArr.push("a", "y")
        let newPigWord = currWordArr.join("")
        translatedWordsArray.push(newPigWord)
      }

      //First consanant string ends with Q



      //Stretch goals:
      //Punctuation/Non-letter characters
      //Case sensitivity





      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(currentWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by ~your name here~
        </footer>
      </div>
    )
  }
}

export default App
