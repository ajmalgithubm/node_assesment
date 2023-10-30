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
    Request Body : {
                       "title":"title_name",
                       "author":"author_name",
                       "summery":"sample_summery"
                                                  }
