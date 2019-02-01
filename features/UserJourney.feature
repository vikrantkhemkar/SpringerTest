Feature: user journey to visit article page

  @search
  Scenario: Search and open the article page
    When I launch Springer home page
    And I search with "asset management" in search text box
    Then I can see the search result 
    When I open the first record from result
    Then I see the details of that article

