describe("The tutorial", () => {
    it("should explore California", () => {
        browser.url("https://explorecalifornia.org/contact.htm");

        let nameField = $("#name");
        let commentField = $("#comments");
        let stateField = $("#state");
        let backpackRadio = $("#backpack");
        let recieveNewsletterYes = $("#newsletter_yes");
        
        nameField.waitForEnabled(3000);
        commentField.waitForEnabled(3000);
        nameField.setValue("Bla Bla Bla");
        stateField.selectByVisibleText("Alabama");
        browser.execute("arguments[0].scrollIntoView()", backpackRadio);
        backpackRadio.click();
        recieveNewsletterYes.click();

        nameField.getValue().should.equal("Bla Bla Bla");
        stateField.getValue().should.equal("AL");
        backpackRadio.isSelected().should.equal(true);
        recieveNewsletterYes.isSelected().should.equal(true);
    });
});