import http from "node:http";
import fs from "fs";
import path from "node:path";
import { EventEmitter } from "node:events";
import { fileURLToPath, URLSearchParams } from "node:url";

const emitter = new EventEmitter();

//Registering an event
emitter.on("addedStudent", (name) => {
  const dirPath = path.dirname(fileURLToPath(import.meta.url));
  const newFile = path.join(dirPath, "students.txt");
  fs.appendFileSync(newFile, `Added student's name: ${name}\n`, "utf-8");
});

//Creating server
const server = http.createServer((req, res) => {
  //Default route
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Default route");

    //Student route
  } else if (req.url === "/student") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(
      `Student Name: Aleksandar \nStudent Lastname: Avramoski \nAcademy: Qinshift \nSubject: Node.JS`
    );

    //Add student route
  } else if (req.url === "/add_student" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
            <form action="/all_students" method="POST">
                <input type="text" name="studentName" placeholder="Enter Student Name" required>
                <button type="submit">Submit</button>
            </form>
        `);

    //All students route
  } else if (req.url === "/all_students" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = new URLSearchParams(body);
      const name = data.get("studentName");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`<p>Student's Name: ${name}</p>`);
      emitter.emit("addedStudent", name);
    });

    //Route not found
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

//Server listening
server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
