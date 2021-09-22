export const Post = (entryObj) => {
    return `
      <section class="post">
        <section id="entry-${entryObj.id}" class="journalEntry"></section>
        <label for="journalConcepts">Concepts Learned${entryObj.concept}</label>
        <label for="journalText">Journal entry${entryObj.entry}</label>
        <label for="journalMood">Mood for the day${entryObj.mood}</label>
        <label for="journalDate">Date of entry${entryObj.date}</label>

        <button id="edit__${entryObj.id}">Edit</button>
      </section>
    `
}