export const PostEntry = () => {
    return `

    <section class="post">
        <section class="date">
            <form action="date">
                <fieldset>
                    <label for="journalDate">Date of entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
            </form>
        </section>

        <section class="concepts">
            <form action="date">
                <fieldset>
                    <label for="journalConcepts">Concepts Learned</label>
                    <input type="text" name="journalConcepts" id="journalConcepts">
                </fieldset>
            </form>
        </section>

        <section class="text">
            <form action="text">
                <fieldset>
                    <label for="journalText">Journal entry</label>
                    <textarea name="journalText" rows="10" cols="30"></textarea>

                </fieldset>
            </form>
        </section>

        <section class="mood">
            <form action="text">
                <fieldset>
                    <label for="journalMood">Mood for the day</label>
                    <input type="text" name="journalMood" id="journalmood">
                </fieldset>
                </div>
            </form>
        </section>
    </section>

    

    <div>
        <button id="recordJournal_entry">Save</button>
    </div>

    
    `
}