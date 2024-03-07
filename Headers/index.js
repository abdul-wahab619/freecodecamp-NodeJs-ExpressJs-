const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 9000;

// middleware -> assume as a plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method}: ${req.ip}: ${req.path} \n`,
    (err, data) => {
      next();
    }
  );
});

// HTML response for /users
app.get("/users/html", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>`;
  res.send(html);
});

// JSON response for /users
app.get("/users", (req, res) => {
  res.json(users);
});

// Rest api routes
app.get("/api/users", (req, res) => {
  res.setHeader("X-myName", "Abdul Wahab"); // custom headers
  //always add X to custom headers
  console.log(req.headers);
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const updatedUser = req.body;

    // Find the index of the user with the given id
    const userIndex = users.findIndex((user) => user.id === id);

    // If user with the given id is not found, return error
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user details
    users[userIndex] = { ...users[userIndex], ...updatedUser };

    // Write updated user data to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json({ status: "success", user: users[userIndex] });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);

    // Find the index of the user with the given id
    const userIndex = users.findIndex((user) => user.id === id);

    // If user with the given id is not found, return error
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Remove the user from the users array
    users.splice(userIndex, 1);

    // Write updated user data to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json({
        status: "success",
        message: "User deleted successfully",
      });
    });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "pending", id: users.length + 1 });
  });
});

app.listen(PORT, () => {
  console.log(`Server is Started at PORT: ${PORT}`);
});
