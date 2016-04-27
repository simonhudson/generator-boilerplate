@home
Feature: Home page basic content
    As a user
    I want the Home page to have some basic content
    So that I can understand what the page is about
    
    Scenario: Page loads successfully
        Given I am a user
        When I navigate to the "Home" page
        Then the browser loads the "Home" page

    Scenario: Page title
        Given I am a user
        When I navigate to the "Home" page
        Then there is a "title" element
        And the title is "C1 - Home"