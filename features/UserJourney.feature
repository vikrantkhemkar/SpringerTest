Feature: To validate the search functionality

  @search
  Scenario Outline: Search and open the article page
    When I launch Springer home page
    And I search for <searchTerm>
    And I hit enter
    Then I can see the search result 
    When I open the first record from result
    Then I see the details of that article

    Examples:
      |searchTerm|
      |Asset|
      |Nature|
      |Wildlife| 

