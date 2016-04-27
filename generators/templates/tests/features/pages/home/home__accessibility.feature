@home @a11y
Feature: Home page accessibility
    As a user
    I want the Home page to have a good level of accessibility
    So that it can be accessed, used and understood by as many users as possible

    Scenario: WCAG compliance
        Given I am a user
        When I navigate to the "Home" page
        Then the "Home" page should pass WCAG-AA compliance

    # Scenario: HTML lang attribute
    #     Given I am a user
    #     When I navigate to the "Home" page
    #     Then the "html" element has the attribute "lang" which contains a value
    #     And the lang attribute value is valid

    # Scenario: Skip links present
    #     Given I am a user
    #     When I navigate to the "Home" page
    #     Then there is a "[data-hook=access-nav]" element

    # # Scenario: Single H1 element
    # #     Given I am a user
    # #     When I navigate to the "Home" page
    # #     Then there is a single H1 element

    # Scenario: Logical heading structure
    #     Given I am a user
    #     When I navigate to the "Home" page
    #     Then there is a logical and semantic heading structure

    # Scenario: Form control elements have associated labels
    #     Given I am a user
    #     When I navigate to the "Home" page
    #     And there are one or more "input, select, textarea" elements
    #     Then each form control element has an ID attribute with an associated label