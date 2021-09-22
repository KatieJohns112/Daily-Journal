export const getjournalEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

export const createPost = entryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
  
    })
        .then(response => response.json())
  }
