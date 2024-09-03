/*
    There are many background request that have to send to get data from server and for that we use axios(external npm package) or fetch (fetch is provided by browser). 
*/
 // express is 
/*
    Axios is a promise based http client for both browser and node js means we can make request to server with using axios.
    
*/

/**
    resources => 
        1.https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

        2. https://axios-http.com/docs/intro

*/

const axios = require('axios') // 

/*
    Common use cases of axios
*/

/*
    GET req 
        1. get data from a server
            {
                The syntax is more cleaner than fetch , we don't have to convert the data to json or other. 

                While getting response using axios we got many things in returns => 
                    including data{actual data},
                    status code, 
                    headers etc & response object consists of all and to get desired response we have to distructure it.
                    ex : response.data , response.status etc
            }
*/

const axiosFunc = async () => {
    const responses = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log("all responses are :" , responses.data);
    console.log(`status code is ${responses.headers}`);
    console.log(`status code is ${responses.status}`);
    console.log(`status code is ${responses.statusText}`);
    console.log(`status code is ${responses.config}`);
    
    

    const paramsData = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            id : 1
        }
    })

    // console.log(`response with id 1 is ${JSON.stringify(paramsData.data)}`);
    // console.log(paramsData.data);
    
    
}
axiosFunc() 

/*
    POST req 
        1. post datas to server => form submission, log in log out
            {
                ** 
            }
*/



const sendData = async () => {
    try {
        const post = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            userId: 1, 
            id: 101, 
            title: "post with axios", 
            body: "loream "
        }) 

        console.log(post.data); // .data 
        
    } catch (error) {
        console.log(error);
        
    }
}

// sendData()

/*
    PUT, DELETE req 
        We can do almost everything with axios => google about them when needed !! 
*/


/*
    req with custom headers 
        : authorization tokens send etc
*/

async function customHeader() {
    const customs = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        Headers : {
            'Authorization' : 'Bearer token '
        }
    })
} 

// dont try to understand it now 

/*
    setting a global url and
            axios.defaults.baseURL = "url"
*/

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const defaultf = async () => {
    try {
        const defaultdata = await axios.get('/posts')
        console.log(defaultdata.data);
        
    } catch (error) {
        console.log(error);
        
    }
} 

defaultf()