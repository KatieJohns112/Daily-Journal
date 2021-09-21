export const journalEntryComponent = (entry) => {
    return `<section id="entry-${entry.id}" class="journalEntry">
        date:${entry.date} 
        concept:${entry.concept} 
        entry:${entry.entry}
        mood:${entry.mood}</section>`

}

// export const JournalEntryComponent = (entry) => {
//     return `
//         <section id="entry--${entry.id}" class="journalEntry">
//             Display the entry's full text, and the date
//             it was entered here.
//         </section>
//     `
// }