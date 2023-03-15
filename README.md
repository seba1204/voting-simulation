<!-- omit in toc -->
# Voting simulation

A simple UI to simulate results of an election based on the [direct proportional to the largest remainder](https://github.com/seba1204/voting-simulation.git) method (see here for French [wikipedia](https://fr.wikipedia.org/wiki/Scrutin_proportionnel_plurinominal#M%C3%A9thode_utilisant_le_quotient_de_Hare)).

Live Demo : [ien7.fr/voting-simulation](https://ien7.fr/voting-simulation)

<!-- omit in toc -->
## Summary

- [User guide](#user-guide)
  - [Use a Google Sheet](#use-a-google-sheet)
    - [Desciription](#desciription)
    - [Example](#example)
  - [Create a new election](#create-a-new-election)
- [Developper guide](#developper-guide)

## User guide

Because I don't want to store your data into my database, you can choose between two options :

- Use the local storage of your browser (only you can access to your data, if you clear your browser data, you will lose your data)
- Use a Google Sheet as a database (you can share your data with other friends)

Data that has to be saved is :

- The lists of candidates
- The number of votes for each list

### Use a Google Sheet

#### Desciription

If you choose to use a Google Sheet, your sheet must respect a specific format :

The first sheet must contain the following columns :

| Name of list A | Name of list B | Name of list C | ... |
| -------------- | -------------- | -------------- | --- |
| Name of candiate A.1 | Name of candiate B.1 | Name of candiate C.1 | ... |
| Name of candiate A.2 | Name of candiate B.2 | Name of candiate C.2 | ... |
| ... | ... | ... | ... |

Number of candidates per list is not limited, and can be different for each list.

The second sheet must have the following pattern :

| Institution | Max number of votes  |
| -------------- | -------------- |
| Name of institution A | Max number of votes for list A |
| Name of institution B | Max number of votes for list B |
| ... | ... |

Number of institutions is not limited.

When you select a Google Sheet, the URL of the page will change with the ID of the sheet. You can share this URL with your friends to let them see the results of the election.

#### Example

Page 1:

| Fox | Cat | Dog |
| -------------- | -------------- | -------------- |
| Marje Sera |  Odin Unice |  Alysha Emma |
| Kaylie Vance | Melvin Eliott | Léandre Millie |
| Leslie Ceara | Regan Andi | January Arianne |
| Harmony Conway | Alva Rigby | Lilac Elodie |
| Asia Lizzy | Tasha Mimi  | Kian Abner  |

Page 2:

| Institution | Max number of votes  |
| -------------- | -------------- |
| Red school | 29065 |
| Brow school | 18926 |
| Green school | 7948 |
| Yellow school | 23174 |

Let's say that the URL of the Google Sheet is

> [docs.google.com/spreadsheets/d/1VB08Bdl9ua0OJh5HbluuycuI7jp1FAWYcuxSCw3qpm8](https://docs.google.com/spreadsheets/d/1VB08Bdl9ua0OJh5HbluuycuI7jp1FAWYcuxSCw3qpm8)

then the URL will be:

> [ien7.fr/voting-simulation/1VB08Bdl9ua0OJh5HbluuycuI7jp1FAWYcuxSCw3qpm8](https://ien7.fr/voting-simulation/1VB08Bdl9ua0OJh5HbluuycuI7jp1FAWYcuxSCw3qpm8)

### Create a new election

## Developper guide
