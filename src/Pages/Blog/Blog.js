import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container'>

            <div className='blog p-4 m-3'>
                <h2>  Difference between javascript and nodejs</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript
                    Engine. Whereas Node JS is an interpreter or running environment for a JavaScript
                    programming language that holds many excesses, it requires libraries that can easily
                    be accessed from JavaScript programming for better use. we use js for build client-side
                    .we can run js in  any browser .but node.js only support the v8 engine . Js normally
                    follow java language standard. </p>
            </div>
            <div className='blog p-4 m-3'>
                <h2> When should you use nodejs and when should you use mongodb</h2>
                <p>First of all, node.js is a JavaScript engine base system. We can run our js code by using
                    node. js it's most commonly used to build server that can response to web request.Node.js
                    give a programmer programming environment and a runtime library basic programming tools
                    and is also compile and interpret code. And node.js is a useful tool for js language
                    <br />
                    On the other side, MongoDb is a database engine we can stored our data in need we can update or
                    delete data from the MongoDB database.First of all, there are dozens of databases. now it's
                    defined on the programmer to choosing the right database for his work. MongoDB is one useful database
                    to persistently store data in a way that you can efficiently query or update it later.
                    So Node.js is a library basic programming tool and Mongodb is use for storing data in
                    need update or delete data the data. </p>

            </div>
            <div className=' blog  p-4 m-3'>
                <h2>Differences between sql and nosql databases.</h2>
                <p>SQl is relational data base manager system .NOSQl is relational data base
                    manager system. SQL database require a schema to be developed in advance and all
                    the data  is stored according to that schema. NoSQL database have dynamic schema .In
                    SQL data is stored in from of tables in the database. IN NoSQL ,data stores from of object
                    document ,graph, key value pair etc .SQL uses standardized SQL system commend or query
                    language do query the data where NoSQL don't have any standardized query format to format
                    the data. SQL database are used whom data to be stored is huge and complex database is required.
                    NoSQL databases are used whom data to be stored is less and budget is low </p>
            </div>
            <div className=' blog p-4 m-3'>
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>In our we have client and server the client wants to access some protected data on our server,
                    but the server know clients cannot be trusted. The server only wants to give the data to a
                    trustworthy client so when client send a request to our server along with data to verify who
                    it is. In our example, this user data was accepted as valid by the server. Now instead create
                    a token this token is returned to the client and it's up to the client to store this data and
                    send it along as required for any requests to the server. The next time our client makes a
                    request along a secure route, it does just that it send along the job token. But or server knows
                    not to trust the client so our server verifies this token is who it says it's from and that it
                    hasn't been tampered with if everything checks out like it dose in our example, the server
                    sends back a response with the request data and client can access in privet route. </p>
            </div>

        </div>
    );
};

export default Blog;