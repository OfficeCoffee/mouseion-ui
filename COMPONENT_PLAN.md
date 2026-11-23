# Planned Components:
- **View Words Page (Assigned to Aidan):**
    - View Words Table

- **Dashboard (Assigned to Evelyn):**
    - Searchbar
    - Words Table
    - Word of the Day

- **Popups (Assigned to Rose):**
    - Confirmation Popup
    - Add Word / Edit Word / Save Word Popup

## View Words Page (/src/app/feature/view-words-page)

Displays the words based on a search query. For exmaple, searching a specific word in the `Dashboard` `searchbar` will direct the user to the `View Words` page which will display all words that match the search string. Clicking the `view all` button on the `Dashboard` will direct the user to `View Words` page to display all words.

### View Words Table (/src/app/feature/view-words-page/components/view-words-table)

The table component of the `View Words` page that will display the filtered word information based on a search string.

## Dashboard (/src/app/feature/dashboard)

### Word of the Day (/src/app/feature/dashboard/components/word-of-the-day)
Gets a random word from any deck for every day. On the left, it shows the word and its origin. On the right, it shows the definition of the word.

### Search Bar (/src/app/feature/dashboard/components/searchbar)
Allows the user to input a word into the text field. Once the search button is pressed, it routes the user to the `View Page` querying the word they typed in.

### Words Table (/src/app/feature/dashboard/components/words-table)
This has a `view all` button that routs the user to the `View Page` which will display all words. Below that it displays the ten most recent words in descending order. This shows the word, origin, definition and an edit button for each word. Below that it shows a `add word` button that gives a popup for adding a word.

## Popups (/src/app/feature/popups)

### Confirmation Popup (/src/app/feature/popups/components/confirmation-popup)

When a user attempts to delete a word from either the `Dashboard` `words table` or the `View Words` page, a popup will appear asking the user to confirm or deny the confirmtaion.

### Add Word Popup (/src/app/feature/popups/components/word-template-popup)
Takes in a word, origin (optional), and definition from the user. When the user clicks the `Add` button, the word is created and added to the database.

### Edit Word Popup (/src/app/feature/popups/components/word-template-popup)
Takes in the selected word's information. The text areas displaying the information are disabled. When the user clicks the `Edit` button, the popup becomes a `Save Word` popup in which the user can now edit the word information.

### Save Word Popup (/src/app/feature/popups/components/word-template-popup)
Takes in the selected words information. A user can adjust each attribute of a word. When the user clicks the `Save` button, the word record is updated in the database with the new information.
