# Local Book API Documentation


## Getting Started

To use this API locally, follow the steps below:

1. **Clone the Repository**:  clone the project repository to your local machine.

   ```bash
   git clone https://github.com/ajmalgithubm/node_assesment.git

2. Navigate to the project directory and install the required dependencies using npm or yarn.
   ```bash
   cd your-book-api
   npm install

3. Start the Server: Run the API server locally
   ```bash
   npm start

## End points
 1. **ADD A BOOK**
    ```bash
    URL : "/"
    HTTP Method : POST
    Description: Add a new book to the collection.
    Request Body : {  "title":"title_name",  "author":"author_name", "summery":"sample_summery"}

 2. **GET ALL BOOKS**
     ```bash
     URL: "/"
     HTTP Method : GET
     Description: Retrieve a list of all books in the collection.
     
 3. **GET SINGLE BOOK**
     ```bash
     URL:'/:bid' 
     HTTP Method: GET
     Description: Retrieve information about a single book by specifying its unique identifier ( bid = document id of the book )

4. **UPDATE A BOOK**
     ```bash
     URL :'/:bid'
     HTTP Method: PUT
     Description: Update information about a specific book by specifying its unique identifier bid.
     Request  Body: {  "title":"new_title_name",  "author":"new_author_name", "summery":"new_sample_summery"}
     (The Request Body may contain either old data or new data for updating the book)
5. **DELETE A BOOK**
     ```bash
     URL : '/:bid'
     HTTP Method : DELETE
     Description: Delete a specific book from the collection by specifying its id of The book document
                                                  
