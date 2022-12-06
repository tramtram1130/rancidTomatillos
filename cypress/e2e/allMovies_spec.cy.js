import { scryRenderedComponentsWithType } from "react-dom/test-utils";

// As a user, when I load the application, I can see the title of the application
// As a user, when I load the application, I can see a collection of movies.
// As a user, when I click on a movie, I’m shown additional details about that movie
// Any other user stories you might have already should also be tested.
describe('Feedback Loop login flows', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.intercept(
            {
              method: 'GET',
              url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', 
            },
        )
    });

    it('should show the title of the application when it loads', () => {
        cy.get('.header-container').should('contain', 'Rancid Tomatillos')
    });

    it('should show all the movies when the application loads', () => {
        cy.get('.card-container').within(() => {
            cy.get('.card').should('have.length', 40)
            cy.get('.card').eq(0).should('have.id', 694919)
            cy.get('.card').eq(1).should('have.id', 337401)
            cy.get('.card').eq(2).should('have.id', 718444)
            cy.get('.card').eq(3).should('have.id', 539885)
        })
    })

    it('should show additional details about a movie if user clicks on it', () => {
        cy.get('.card').eq(0).click()
    })

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

  });
  


  
