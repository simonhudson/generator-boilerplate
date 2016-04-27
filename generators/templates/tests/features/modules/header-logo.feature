@header @headerLogo 
Feature: Header logo
    As a user 
    I want the C1 site to have a logo in the header
    So that I can identify the product and navigate to the Home page
    
    Scenario: Header logo present
        Given I am a user
        When I navigate to the "Home" page
        Then there is a "[data-hook=header-logo]" element

    Scenario: Header logo alt attribute
        Given I am a user
        When I navigate to the "Home" page
        Then the "[data-hook=header-logo]" element has the attribute "alt" which contains a value

    Scenario: Header logo link
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=header-logo__link]"
        Then the browser loads the "Home" page