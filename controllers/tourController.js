const Tour = require("../models/tourModel");

exports.checkBody = (req, res, next) => {
  const data = req.body;

  if (!data.name && !data.body) {
    return res.status(404).json({
      status: "fail",
      message: "name or body is missing"
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  const time = req.requestTime;
  return res.status(200).json({ status: "success", time });
};

exports.getTour = (req, res) => {
  const id = +req.params.id;
  // const tour = tours[id];

  // if (tour) {
  // return res.status(200).json({
  //   status: "success",
  //   time
  // data: {
  //   tour
  // }
  // });
  // }
  // return res.status(404).json({
  //   status: "fail",
  //   message: "Invalid ID"
  // });
};

exports.createTour = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "New tour has been created",
    data: { tour: req.body }
  });
};

exports.updateTour = (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>"
    }
  });
};

exports.deleteTour = (req, res) => {
  return res.status(204).json({
    status: "success",
    data: null
  });
};
