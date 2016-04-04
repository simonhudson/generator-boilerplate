@about @a11y
Feature: About page accessibility
    As a user
    I want the About page to have a good level of accessibility
    So that it can be accessed, used and understood by as many users as possible
    
    Scenario: HTML lang attribute
        Given I am a user on the "About" page
        When the "About" page loads
        Then there should be a "lang" attribute with a valid value

    Scenario: Single H1 element
        Given I am a user on the "About" page
        When the "About" page loads
        Then there should be a single H1 element

    Scenario: Logical heading structure
        Given I am a user on the "About" page
        When the "About" page loads
        Then there should be a logical and semantic heading structure

    Scenario: Image alt attributes
        Given there are one or more "img" elements on the "About" page
        When the "About" page loads
        Then the images should each have an alt attribute

    Scenario: Form control elements have associated labels
        Given there are one or more "form" elements on the "About" page
        When the "About" page loads
        Then each form control element should have an id attribute with an associated label