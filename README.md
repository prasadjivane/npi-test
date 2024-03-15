<img width="679" alt="npi-test" src="https://github.com/prasadjivane/npi-test/assets/26869583/5ad11d7f-3c08-4c79-a369-96aa96716b02">

# npi-test

`npi-test` is a lightweight command-line tool for testing RESTful APIs from the terminal. It supports various HTTP methods such as GET, POST, PUT, and DELETE, making it easy to perform comprehensive API testing directly from the command line.


# Description

A command-line interface (CLI) tool for testing RESTful APIs with support for various HTTP methods such as GET, POST, PUT, and DELETE. Easily perform API testing directly from the terminal using this npm package.

## Installation

You can install the package globally using npm
```bash
npm i -g npi-test
```
OR  Project Specific Folder

```
npm i npi-test
```

## Features
- Test RESTful APIs using a simple CLI interface
- Support for common HTTP methods: GET, POST, PUT, DELETE
- Easily specify request URLs and data payloads
- View detailed response data, status codes, and response times


## CLI Usage Example

    npi-test -u <url> -m <method> [-d <data>]

- `-u, --url`: Specifies the URL of the API endpoint.
- `-m, --method`: Specifies the HTTP method (GET, POST, PUT, DELETE).
- `-d, --data`: Optional. Specifies the data to be sent with the request (for POST or PUT requests).

## Example CLI Commands

```bash

npx npi-test -u https://jsonplaceholder.typicode.com/posts/1 -m GET

npx nnpi-test  -u https://jsonplaceholder.typicode.com/posts -m POST -d '{"title": "foo", "body": "bar", "userId": 1}'

npx npi-test  -u https://jsonplaceholder.typicode.com/posts/1 -m PUT -d '{"title": "bar", "body": "foo", "userId": 1}'

npx npi-test -u https://jsonplaceholder.typicode.com/posts/1 -m DELETE

```

  

## Output
Return respose data with satus code and respose time.
 ```bash
  Response Data: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
Status Code: 200
Response Time: 295ms
  ```


## Usage In The Code 
```bash

    const { exec } = require('child_process');
    
    // Function to execute the npi-test CLI tool
    function testAPI(url, method, data) {
    const command = `npx npi-test -u "${url}" -m ${method}  ${data ? `-d '${JSON.stringify(data)}'` : ''}`;
    exec(command, (error, stdout, stderr) => {
    if (error) {
    console.error(`Error: ${error.message}`);
    return;
    }
    if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
    }
    console.log(stdout);
    });
    }
    
    // Example usage
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const method = 'POST';
    const requestData = {
    title: 'mytitle',
    body: 'data',
    userId: 1
    };
    testAPI(apiUrl, method, requestData);

```

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
