import { scryRenderedComponentsWithType } from "react-dom/test-utils";

describe('Single movie view flow', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 201,
            body: {
                movies: [
                    {
                    id: 694919,
                    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                    title: "Money Plane",
                    average_rating: 6.875,
                    release_date: "2020-09-29"
                    },
                    {
                    id: 337401,
                    poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
                    title: "Mulan",
                    average_rating: 5.1,
                    release_date: "2020-09-04"
                    },
                    {
                    id: 718444,
                    poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
                    title: "Rogue",
                    average_rating: 7.333333333333333,
                    release_date: "2020-08-20"
                    },
                    {
                    id: 539885,
                    poster_path: "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
                    backdrop_path: "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
                    title: "Ava",
                    average_rating: 5.875,
                    release_date: "2020-07-02"
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
        cy.get('.movie-title').should('contain', 'Money Plane')
        cy.get('.movie-info').should('contain', 'Release Date: 2020-09-29').should('contain', '82 min').should('contain', 'Avg Rating: 6.00')
        cy.get('.movie-tag').should('contain', '')
        cy.get('.movie-overview').should('contain', 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
        cy.get('.movie-money').should('contain', 'Budget: $0').should('contain', 'Revenue: $0')
    })

    it('should show a list of genres on the movie details page', () => {
        cy.get('.card').eq(0).click()    
        cy.get('.genre-container').should('have.descendants', 'li').should('contain', 'Action')
    })

    it('should have a button that takes you back to the main page', () => {
        cy.get('.card').eq(0).click()  
        cy.get('button').click()
        cy.get('.card-container').should('be.visible')  
    })

    it('should show error message to user if network request fails', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404
        })
        cy.visit('http://localhost:3000').contains('Oops, something went wrong!')
    })

    //shou
    //if there is no revenue  
})