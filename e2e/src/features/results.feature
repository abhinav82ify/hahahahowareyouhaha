Feature: Results page
    Display the results page

    Scenario: Results page is available
        Given User logs in
        And User is on the "results" page
        Then User should see the app header
        And User should see the results page title
        And User should see the score bar