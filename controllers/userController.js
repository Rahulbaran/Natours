const fs = require("node:fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/users.json`, "utf-8")
);

exports.getAllUsers = (req, res) => {
  const time = req.requestTime;

  return res
    .status(200)
    .json({ status: "success", time, results: users.length, data: { users } });
};

exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users[id];

  if (user) {
    const time = req.requestTime;

    return res.status(200).json({
      status: "success",
      time,
      data: {
        user
      }
    });
  }
  return res.status(404).json({
    status: "fail",
    message: "Invalid ID"
  });
};

exports.createUser = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "New tour has been created",
    data: { user: req.body }
  });
};

exports.updateUser = (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      user: "<Updated user here...>"
    }
  });
};

exports.deleteUser = (req, res) => {
  return res.status(204).json({
    status: "success",
    data: null
  });
};
