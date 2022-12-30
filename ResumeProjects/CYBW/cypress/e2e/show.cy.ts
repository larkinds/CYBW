describe("Show Page Tests", () => {
    beforeEach(() => {
        cy.visitAndCheck("/fleabag")
    })

    it("should display information on the page (title, description, etc) that matches the slug", () => {
        expect(true).to.equal(false);
    })

    it("should have a button that leads to the landing page in the header", () => {
        expect(true).to.equal(false);
    })

    it("should have a button that links to its current streaming location", () => {
        //make sure the API offers this info
        expect(true).to.equal(false);
    })

    it("should load quickly", () => {
        //test load time
        expect(true).to.equal(false);
    })

})