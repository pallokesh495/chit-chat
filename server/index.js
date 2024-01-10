const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());

const PORT = 3001;

http.listen(PORT, () => {
  console.log(`listening on... ${PORT}`);
});
const f = path.join(__dirname, "../public/index.html");

const p = path.join(__dirname, "../api/data.json");

app.get("/", (req, res) => {
  res.sendFile(f);
});

app.get("/api", (req, res) => {
  res.sendFile(p);
});


//socket===================================================================================================================

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on('disconnect', () => {
    console.log('A user disconnected');
  });

io.on("connection", (socket) => {
  console.log("first connected..");

  socket.once("fetch",  () => {
  fs.readFile(p, "utf8", (err, data) => {
      if (err) throw err;
      const Data = JSON.parse(data);

      io.emit("getData", Data,()=>{

        console.log("==============fetched data sent===========");

      });
     
    });
  });

  socket.on("message", (newMessage) => {
    console.log("data recieved from client");

    fs.readFile(p, "utf8", (err, data) => {
      if (err) throw err;

      const existingData = JSON.parse(data);
      const mergedData = existingData.concat(newMessage);
      console.log("file red");
      fs.writeFile(p, JSON.stringify(mergedData), (err) => {
        if (err) throw err;
        console.log("Data appended to file");
      });
    });

    
    io.emit("updateChat",newMessage);
    
  });


});

//====================================================================================
