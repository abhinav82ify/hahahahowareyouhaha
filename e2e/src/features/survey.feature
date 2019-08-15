Feature: Survey page
    Survey page scenarios

    Scenario: Survey page is available
        Given User logs in
        And User goes to survey page from home page
        Then User should see the survey page title
        And User should see the app header

    Scenario: Survey page contains footer
        Given User logs in
        And User goes to survey page from home page
        Then User should see progress bar
        And User should see the survey finish button as "disabled"

    Scenario: Survey page contains footer
        Given User logs in
        And User goes to survey page from home page
        Then User should see questions