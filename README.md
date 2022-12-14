# tutorial-starwars-api


# Star Wars API

https://swapi.dev/api/people/?page=1

1. Pagination - 10 characters per page
2. count - number of total characters
3. next - provided url for next page
4. previous - privides url for previous page. Used when user hits back button
5. results - contain array of 10 characters

# Programming Concepts

1. Promise - async operation that is put on call queue and has to wait until all other sequential operations are done before it can be executed. ie. Fetch api. When it is executed the then(s) will then be executed sequentially.
2. textNode - store each property of star wars characters in here and append to div.
3. reusable code - try to put together all repeated lines of code.
4. Flexbox - there always needs to be a parent-child heirarchy, i.e. container which holds child items 


# Plan of attack

1. create index.html, and source in script.js
2. add images and console.logs
3. get character info from starwars api using browsers web API - Fetch API
4. create div to hold each image separately
5. add character info to each div by creating textNode and appending it to div
6. add breakpoint tag <br /> to create a line break
7. source in styles.css file to head in index.html
8. create a red border around each div by using class
9. add flexbox
10. make it prettier with padding and background

# github commands

1. git add .
2. git commit -a
3. git push origin main
4. git clone https://github.com/simple-sifu/tutorial-starwars-api


# Final Product

<img width="1405" alt="Screen Shot 2022-12-13 at 6 32 05 PM" src="https://user-images.githubusercontent.com/36891099/207467936-ab02c0df-882d-49dd-b5e1-9d78b703723d.png">
