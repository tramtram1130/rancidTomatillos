import { scryRenderedComponentsWithType } from "react-dom/test-utils";

describe('All Movie view flows', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201,
            body: {
                movies: [
                    {
                    id: 436270,
                    poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                    title: "Black Adam",
                    average_rating: 4,
                    release_date: "2022-10-19"
                    },
                    {
                    id: 724495,
                    poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
                    title: "The Woman King",
                    average_rating: 4,
                    release_date: "2022-09-15"
                    },
                    {
                    id: 1013860,
                    poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
                    title: "R.I.P.D. 2: Rise of the Damned",
                    average_rating: 7,
                    release_date: "2022-11-15"
                    },
                    {
                    id: 505642,
                    poster_path: "https://image.tmdb.org/t/p/original//ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
                    title: "Black Panther: Wakanda Forever",
                    average_rating: 4,
                    release_date: "2022-11-09"
                    }
                ]
            },
          })
          cy.visit('http://localhost:3000');

    });
    it('should show the title of the application when it loads', () => {
        cy.get('.header-container').should('have.descendants', 'img')
    });

    it('should show all the movies when the application loads', () => {
        cy.get('.card-container').within(() => {
            cy.get('.card').should('have.length', 4)
            cy.get('.card').eq(0).should('have.id', 436270)
            cy.get('.card').eq(1).should('have.id', 724495)
            cy.get('.card').eq(2).should('have.id', 1013860)
            cy.get('.card').eq(3).should('have.id', 505642)
        })
    })

    it('should show error message to user if network request fails', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404
        })
        cy.visit('http://localhost:3000')
          .contains('Oops, something went wrong!')
    })

    it('should have a search bar to search movie titles', () => {
        cy.get('.search-container').should('have.descendants', 'input')
    })

    it('should be able to search for movie titles in the search bar', () => {
        cy.get('.search').type('The Woman King')
        cy.get('.card-container').within(() => {
            cy.get('.card').should('have.length', 1)
            cy.get('.card').eq(0).should('have.id', 724495)
        })
    })

    it('should display an error message if no movie matches the search', () => {
        cy.get('.search').type('Die Hard')
        cy.contains('Sorry, there is no match!')
    })

    it('should display an error message if searched movie title is misspelled', () => {
        cy.get('.search').type('The Woman Kingg')
        cy.contains('Sorry, there is no match!')
    })
  });
