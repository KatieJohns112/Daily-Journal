export const journalEntryComponent = (entry) => {
    return `
    <section id="entry-${entry.id}" class="journalEntry"></section>
     <h1>${entry.concept}</h1>
     <h3>${entry.entry}</h3>
     <h4>${entry.date}</h4>
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