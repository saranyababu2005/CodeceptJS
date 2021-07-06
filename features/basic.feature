Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Background: Open Github and enter login credentials
    Given I open Github website and click SignIn link
    When  I enter UserId
    And   I enter password
    And   I click Sign In button

    Scenario: Github Login functionality
#    Given I open Github website and click SignIn link
#    When  I enter UserId
#    And   I enter password
#    And   I click Sign In button
    Then  I should see Github Home page

  Scenario: Verifying Menus on home page
#    Given I open Github website and click SignIn link
#    When  I enter UserId
#    And   I enter password
#    And   I click Sign In button
    Then  I should see 4 menus on home page


  Scenario: Display number of repositories
#    Given I open Github website and click SignIn link
#    When  I enter UserId
#    And   I enter password
#    And   I click Sign In button
    Then  I Click on Repositories Menu
    And   Display repositories count

    Scenario Outline: Verify Repositories Name
      Then  I Click on Repositories Menu
      And   Verify "<Repository Name>"

      Examples:
      | Repository Name |
      | GithubPuppeteer |
      | testing65       |


