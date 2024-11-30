
@EP002 @user1 @web
Scenario: Crear miembro con nota sin caracteres
    And I wait for 7 seconds
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I click Members
    And I wait for 5 seconds
    And I click New Members
    And I wait for 5 seconds
  When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_member.json?key=e7ea47e0" not allowed max 500 note
    And I click save member
    And I wait for 3 seconds
  Then I should see Please Enter an Note long
    And I wait for 5 seconds