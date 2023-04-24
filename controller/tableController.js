import tableModel from "../models/tableModel.js";
export const tableController = async (req, res) => {
  console.log("req", req);
  try {
    const { name, description, Noofperson, phone, date, time, tableno } =
      req.body;
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!description) {
      return res.send({ message: "description is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!Noofperson) {
      return res.send({ message: "Noofperson is Required" });
    }
    if (!date) {
      return res.send({ message: "date no is Required" });
    }
    if (!time) {
      return res.send({ message: "time is Required" });
    }
    if (!tableno) {
      return res.send({ message: "tableno is Required" });
    }

    const alreadybook = await tableModel.findOne({ tableno });
    if (alreadybook) {
      return res.status(200).send({
        success: false,
        message: "Table is Already Book",
      });
    }

    const table = await new tableModel({
      name,
      description,
      phone,
      Noofperson,
      date,
      time,
      tableno,
    }).save();
    res.status(201).send({
      success: true,
      message: "Table Book Successfully",
      // table,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Booking",
      error,
    });
  }
};

export const getTableController = async (req, res) => {
  try {
    const tables = await tableModel.find({});

    res.status(200).send({
      success: true,
      data: tables,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Getting Table Data",
      error,
    });
  }
};

export const getTableidController = async (req, res) => {
  try {
    const tables = await tableModel.findById({});
    console.log("tables", tables);
    res.status(200).send({
      success: true,
      data: tables,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Getting Table Data",
      error,
    });
  }
};

export const deleteTableController = async (req, res) => {
  try {
    await tableModel.deleteOne(req.params.tid);
    res.status(200).send({
      success: true,
      message: "table Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

export const findidController = async (req, res) => {
  try {
    const post = await tableModel.findById({
      _id: req.params.id,
    });
    res.send(post);
    // res.status(200).send({
    //   post,
    //   success: true,
    //   message: "table Deleted successfully",
    // });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};
