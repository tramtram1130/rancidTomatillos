import { scryRenderedComponentsWithType } from "react-dom/test-utils";

// As a user, when I load the application, I can see the title of the application
// As a user, when I load the application, I can see a collection of movies.
// As a user, when I click on a movie, I’m shown additional details about that movie
// Any other user stories you might have already should also be tested.
describe('Feedback Loop login flows', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should show the title of the application when it loads', () => {
        cy.get('.header-container').contains('Rancid Tomatillos')
    });

    it('should show all the movies when the application loads', () => {
        cy.intercept(
            {
              method: 'GET',
              url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', 
            },
        )
        cy.get('.card-container').within(() => {
            cy.get('.card').should('have.length', 40)
            cy.get('.card').eq(0)
        })
    })

    // it('should show additional details about a movie if user clicks on it', () => {
    //     cy.get('img').click()
    //     cy.contains('Release Date')
    // })

    //   it('Should be able to select the email and password inputs and fill them with the corresponding values', () => {
    //     cy.get('input[type="email"]')
    //       .type('leta@turing.edu')
    //       .should('have.value', 'leta@turing.edu')
    //       .get('input[type="password"]')
    //       .type('keane20')
    //       .should('have.value', 'keane20')
    //   })

    //   it('Should display an error message when a user clicks the submit button without filling both inputs', () => {
    //     cy.get('button').click()
    //     cy.contains('Please fill out both inputs.')
    //   })

    //   it('Should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
    //     cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
    //       statusCode: 201,
    //       body: {
    //         id:2,
    //         image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
    //         name: "Leta Keane"
    //       }
    //     })
    //     .get('input[type="email"]').type('leta@turing.edu')
    //     .get('input[type="password"]').type('keane20')
    //     .get('button').click()
    //     .url().should('include', '/dashboard')
    //   })

    //   it('Should receive an error message that email and password don\'t match if user submits incorrect email and password inputs', () => {
    //     cy.intercept({
    //       method: 'POST',
    //       url: 'http://localhost:3001/api/v1/login'
    //     },
    //     {
    //       statusCode: 401,
    //       body: {
    //         message: 'Email and password do not match.  Please try again.'
    //       }
    //     })
    //     .get('input[type="email"]').type('leta@turing.edu')
    //     .get('input[type="password"]').type('YOLO')
    //     .get('button').click()
    //     .get('p').should('contain', 'Email and password do not match.  Please try again.')
    //   })
    // });
  });
  


  
