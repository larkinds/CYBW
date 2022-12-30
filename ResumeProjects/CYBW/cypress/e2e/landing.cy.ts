describe('Landing Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should allow you to visit the landing page', () => {
    cy.url().should('eq', '/');
  })
  it('should show a title reading Curb Your Binge Watching', () => {
    cy.get('h1').contains("Curb Your Binge Watching");
  })
  it("should list out the same number of sections as there are tv shows", function () {
    cy.get('li').as("DOMList").should("have.length", 50);
    cy.window().its("show").as("showList").should("have.length, 50");

    //this may fail cause its asyncronous - either move the .get & .window to the before each or use a ,then
    expect(this.DOMList.length).to.equal(this.showList.length);
  })
  it("hovering on a section should make that section scroll", () => {
    expect(true).to.equal(false);
  })
  it("should still be accessible, even when a show is scrolling", () => {
    expect(true).to.equal(false);
  })
  it("should navigate to a new page when a section is clicked", () => {
    expect(true).to.equal(false);
  })

  it("should navigate to the top of the page when the CYWB is clicked", () => {
    expect(true).to.equal(false);
  })

})