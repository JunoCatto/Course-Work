## Total record number
  * In all the response that returns multiple values, includes a `count` in the return property. This is to show the records count. 
  * The expected response is 
```
{
    records: [
                {
                    "id": 1,
                    "name": "Phoebe",
                    "gender": "female"
                },
            ]
    count: 1
}

```
## Age filter 
  * Filter by age 
  * Add age (number) property to the `friends` array in `models/friends.js`
  * Modify `/filter` to include `age` query parameter. This query parameters takes in a comparator followed by a number. For example `age=<12`, `age==<12`,  `age==>12`,`age=>11` `age=2`. No comparator means equals. 
  *  If the query parameter value is invalid returns appropriate error. For example, `age=ten`, `age=++++a` are all invalid. 
  
## Unit test
 * Add tests for every endpoint. Each endpoint should be grounded by a `describe`
 * At least two positive scenarios and two negative scenarios.

## Pagination 
Pagination is a technique used by APIs (Application Programming Interfaces) to divide a large set of results into smaller, manageable pages. Instead of returning thousands or millions of records in a single response, the API sends a limited number of records (a "page") at a time.

  * Implement pagination for `/friends`
  * Consider pagination as looping using API. 
  * You need two variables, 
    * an index to keep track of the current position. We are going to use `page` query param as the index
    * the size of each page. The number of records for each page. 
  * `/friends?page=1&limit=1` this will return the the page with one records.
  * Create a unit test for this. Loop through each page to fetch the entire dataset. 


