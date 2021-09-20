export const journalEntryComponent = (entry) => {
    return `<section id="entry-${entry.id}" class="journalEntry">
        date:${entry.date} 
        concept:${entry.concept} 
        entry:${entry.entry}
        mood:${entry.mood}</section>`

}

