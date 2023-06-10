const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {
    // BUILD QUERY
    // 1A) Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach(el => delete queryObj[el]);

    // 1B) Advance Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    // 2) SORTING
    if (req.query.sort) {
      query = query.sort(req.query.sort.replace(",", " "));
    } else {
      query = query.sort("-createdAt");
    }

    // 3) Limiting FIelds
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // EXECUTE QUERY
    const tours = await query;

    // SEND RESPONSE
    res
      .status(200)
      .json({ status: "success", total: tours.length, data: { tours } });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { tour }
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      message: "New tour has been created",
      data: { tour: newTour }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!"
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        tour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};
