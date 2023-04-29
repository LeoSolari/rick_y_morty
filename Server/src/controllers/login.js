const users = require("../utils/users");

function login(req, res) {
  const email = req.query.email;
  const password = req.query.password;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
}

module.exports = { login };
