import { scryRenderedComponentsWithType } from "react-dom/test-utils";

describe('All Movie view flows', () => {
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
    it('should show the title of the application when it loads', () => {
        cy.get('.header-container').should('contain', 'Rancid Tomatillos')
    });

    it('should show all the movies when the application loads', () => {
        cy.get('.card-container').within(() => {
            cy.get('.card').should('have.length', 4)
            cy.get('.card').eq(0).should('have.id', 694919)
            cy.get('.card').eq(1).should('have.id', 337401)
            cy.get('.card').eq(2).should('have.id', 718444)
            cy.get('.card').eq(3).should('have.id', 539885)
        })
    })

    it('should show error message to user if network request fails', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404
        })
        cy.visit('http://localhost:3000')
          .contains('Oops, something went wrong!')
    })
  });