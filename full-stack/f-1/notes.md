**soap**

- calling a method
- precise endpoint description with WSDL(web services description language)
- relies on xml


**Rest**

- asking for a resource
- relies on http
- has no formal way to define endpoints
- can return a resource in any format, but in practice often JSON

*methods*

GET - ask for a resource
PUT - create a resource
POST - modify a resource
DELETE - delete a resource

*examples*
/api/users/{id}/posts
/api/teams/{teamId}/members/{userId}


**Node.js**

JavaScript Runtime Environment
non-blocking

not good for processising lots of data, for example machine learning

same language for frontend and backend

*modules*
commonJS or ESM

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

*globals*

__dirname
__filename

https://nodejs.org/api/globals.html

https://nodejs.org/api/process.html

*console*

-log
-warn
-error
-trace
-info

https://developer.mozilla.org/en-US/docs/Web/API/console

*paths*

-join
-resolve
-normalize

*file systems*

https://nodejs.org/api/fs.html


*nodeJS http*

- createServer
- request
- IncomingMessage
- OutgoingMessage

**web socket**

