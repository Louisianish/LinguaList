# LinguaList

This is a simple to-do list made with HTML, CSS, and (vanilla) JavaScript. I based it on a tutorial by CodingTheSmartWay.com but have since modified it. I've started by making list pages in Louisiana French and Louisiana Creole, but will likely add more languages as time goes on. For the time being, I am focusing on adding Louisiana heritage languages, but I will gladly make one for your language, especially if it is an endangered language with little resources. I'll just need you to translate a few terms, which I will list below.

For those using the app on desktop, I have added virtual keys for letters with accent marks. For now, I've included some of the most common accented letters found in Romance Languages, but in the near future, only accented letters specific to that language will be included on each list page.

Do you want this list app translated into your language? Feel free to make a pull request or send me the translations for the following phrases at louisianish@gmail.com:
- "My List"
- "Create a list in [insert name of language here]"
- "Add Something"
- "Delete/Clear All"

Note: This is the first app I've ever made that utilizes the user's local storage, so I realize my implementation of the `store()` and `getValues()` methods are less than perfect and aren't placed correctly, so the app may have some bugs until I figure out exactly which functions I need to include these two methods in. As always, any suggestions are more than welcome! Currently, the issue I'm seeing is that after deleting each list item individually, when I go to the list in another language, the list has been deleted (which is something I want), but unless I clicked the "Clear All" button on the previous list, the div containing the list is still expanded until you click the "Click All" button below. Part of my problem is that I sort of Frankenstein'ed together solutions from multiple sources until it started working, so I'm sure there's some redundant or otherwise unnecessary code in there that's conflicting with a particular function.
 
