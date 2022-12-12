import { scryRenderedComponentsWithType } from "react-dom/test-utils";

describe('Single movie view flow', () => {

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
                    id: 934641,
                    poster_path: "https://image.tmdb.org/t/p/original//pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
                    title: "The Minute You Wake Up Dead",
                    average_rating: 5,
                    release_date: "2022-11-04"
                    }
                ]
            },
          })
          cy.visit('http://localhost:3000');
    });

    it('should display all movie details after clicking on movie poster', () => {
        cy.get('.card').eq(0).click()
        cy.get('.movie-container').should('be.visible')
        cy.get('.movie-container').should('have.descendants', 'div')
    })

    it('should have a movie poster on movie details page', () => {
        cy.get('.card').eq(0).click()
        cy.get('.movie-poster-container').should('have.descendants', 'img')
        cy.get('.movie-poster').should('be.visible')
    })

    it('should have a title, release date, runtime, average rating, tagline, overview, budget, and revenue on movie details page', () => {
        cy.get('.card').eq(0).click()
        cy.get('.movie-title').should('contain', 'Black Adam')
        cy.get('.movie-info').should('contain', 'Release Date: 2022-10-19').should('contain', '125 min').should('contain', 'Avg Rating: 4.00')
        cy.get('.movie-tag').should('contain', 'The world needed a hero. It got Black Adam.')
        cy.get('.movie-overview').should('contain', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
        cy.get('.movie-money').should('contain', 'Budget: $200,000,000').should('contain', 'Revenue: $384,571,691')
    })

    it('should show a list of genres on the movie details page', () => {
        cy.get('.card').eq(0).click()    
        cy.get('.genre-container').should('have.descendants', 'li').should('contain', 'Action').should('contain', 'Fantasy').should('contain', 'Science Fiction')
    })

    it('should have a button that takes you back to the main page', () => {
        cy.get('.card').eq(0).click()  
        cy.get('button').click()
        cy.get('.card-container').should('be.visible')
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should show error message to user if network request fails', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404
        })
        cy.visit('http://localhost:3000').contains('Oops, something went wrong!')
    })

    it('should show budget not available if there is no budget for movie', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201
        })
        cy.visit('http://localhost:3000/934641').contains('Budget: Not Available')
    })

    it('should show revenue not available if there is no revenue for movie', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201
        })
        cy.visit('http://localhost:3000/934641').contains('Revenue: Not Available')
    })

    it('should contain the movie ID in the url', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201
        })
        cy.visit('http://localhost:3000/337401')
        cy.url().should('include', '337401') 
    })

    it('should be able to navigate back to home page and then forth to previous page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201
        })
        cy.visit('http://localhost:3000/337401')
        cy.go('back')
        cy.url().should('eq', 'http://localhost:3000/')
        cy.go('forward')
        cy.url().should('eq', 'http://localhost:3000/337401')        
    })
})