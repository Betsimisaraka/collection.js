# Record Collection Project
## Objective
The goal of this project is to build a basic record collection program. Its users will be able to show a list of records that you have in your collection and add new ones, edit and delete some.

### Functional Requirements

1. A record is defined by its title, its artist name, its number of tracks, its social media links, release year, if the album is platinum or no, and so on. Feel free to add any relevant information.

1. If a social media link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.

1. At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice.

### Possible actions are:

- Show all the records in the collection
We should have the option to only see the platinum records, or the other ones aswell. Everytime, the records will be shown from the oldest to the newest, according to their release year.

- Add a new record (ask for each new properties)

- Update a specific record (using the record title as selector)

- Remove an existing record (still using the record title)

- Quit the program.

1. When updating or deleted a record, the user is a title until it is correct. (Pay attention to lowercase and uppercase letters)

1. After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.


### Technical Requirements.

1. All your code should be correctly indented.

1. Names should be wisely chosen and adhere to the camelCase convention.

1. Code duplication should be avoided.

1. Pay extra attention to inout validation from the user. Your program should not crash, and if it does, catch the error accordingly.

1. Create a new github project, with an html page, a readme, and a script.js file that you’ll have to link to the html page.