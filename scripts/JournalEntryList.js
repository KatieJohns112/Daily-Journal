import { getJournalEntries } from "./JournalData.js";
import { journalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector(".entryLog");
export const entryListComponent = () => {
    const entries= getJournalEntries()
    for (const entry of entries) {
        console.log(entry)
        entryLog.innerHTML += journalEntryComponent(entry)
    }
}

