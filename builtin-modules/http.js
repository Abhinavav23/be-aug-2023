// hyper text transfer protocol
const http = require("http");

const serverHandler = (request, response) => {
    console.log("URL", request.url);
    // console.log("headers", request.headers);
    // console.log("method", request.method);
    // console.log("from server handlder...");
    if(request.method === "GET"){
        if(request.url === "/login"){
            response.writeHead(200, {"content-type": "text/plain"})
            response.write("<h1>Login Page</h1> <input type='text'/> <input type='password'/> <input type='submit'/>");
            // response.write("");
            // response.write("");
            // response.write("");
        } else if(request.url === "/signup"){
            response.write("Signup Page");
        } else if(request.url === "/data"){
            // response.write(JSON.stringify({username: "Abhinav"}));
            response.write(`{username: "Abhinav"}`);
        }
        else{
            response.write("Error Page Not found!!");
        }
    }else{
        response.write("not supported")
    }
    response.end();
}
const server = http.createServer(serverHandler);

server.listen(4000, () => {
    console.log(`server started on port: 4000`);
})