export const journalEntryComponent = (entryObj) => {
    return `
    <section id="entry-${entryObj.id}" class="journalEntry"></section>
     <h1>${entryObj.concept}</h1>
     <h3>${entryObj.entry}</h3>
     <h4>${entryObj.date}</h4>
     <h5>${entryObj.mood}</h5>
    </section>
`
}

// export const JournalEntryComponent = (entry) => {
//     return `
//         <section id="entry--${entry.id}" class="journalEntry">
//             Display the entry's full text, and the date
//             it was entered here.
//         </section>
//     `
// }