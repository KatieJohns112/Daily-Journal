const journal = [
    {
        id: 1,
        date: "08/10/2021",
        concept: "HTML & CSS",
        entry: "We talked about the main components when setting up HTML. We also worked on Yellow Brick Code and semantic details.",
        mood: "excited"
    },
    {
        id: 2,
        date: "07/26/2025",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "09/17/2021",
        concept: "Holiday Road",
        entry: "We finished our groups projects on Holiday Road and presented them to both the class and our respective instructor.",
        mood: "happy"
    },
    {
        id: 4,
        date: "09/17/2021",
        concept: "Holiday Road",
        entry: "We finished our groups projects on Holiday Road and presented them to both the class and our respective instructor.",
        mood: "happy"
    }
]

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

