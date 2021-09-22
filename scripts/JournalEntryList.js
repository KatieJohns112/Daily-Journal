import { getjournalEntries } from "./data/DataManager.js";
import { journalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector(".entryLog");
export const entryListComponent = () => {
     getjournalEntries()
    .then(entries => {
        for (const entry of entries)
        {
           console.log(entry)
           entryLog.innerHTML += journalEntryComponent(entry)
       }
    })
}

