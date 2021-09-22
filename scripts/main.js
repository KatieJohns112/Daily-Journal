import { entryListComponent } from "./JournalEntryList.js";
import { PostEntry } from "./post/postEntry.js";
import { createPost } from "./data/DataManager.js"

entryListComponent();

const applicationElement = document.querySelector(".dailyjournal");
const inputElement = document.querySelector(".input");

inputElement.innerHTML = PostEntry();

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  

//   applicationElement.addEventListener("click", event => {
//     if (event.target.id === "newPost__cancel") {
//         //clear the input fields
//     }
//   })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "recordJournal_entry") {
        console.log("button")
    //collect the input values into an object to post to the DB
      const date = document.querySelector("input[name='journalDate']").value
      const mood = document.querySelector("input[name='journalMood']").value
      const concept = document.querySelector("input[name='journalConcepts']").value
      const entry = document.querySelector("textarea[name='journalText']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const entryObject = {
          date: date,
          concept: concept,
          entry: entry,
          userId: 1,
          mood: mood,
      }
  
    // be sure to import from the DataManager
        createPost(entryObject)
        
        //Clear input fields
        //update list that is displaying
    }
  })
  