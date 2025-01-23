import Item from "../models/itemModel.js";

export const getAllData = async (req, res) => {
  try {
    const items = await Item.find();
    if (!items) {
      return res.status(404).json({ msg: "No existen elementos" });
    }
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (req, res) => {
  const { name, comment } = req.body;
  try {
    if (name && comment) {
      await Item.create({ name, comment });
      console.log(req.body);
      res.status(200).json({ msg: "item creado correctamente" });
    } else {
      res.status(400).json({ msg: "Bad Request" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({ _id: id });

    if (!item) {
      return res.status(404).json({ msg: "No existe el elemento" });
    }

    res.status(200).json({ item });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ msg: "No existe el elemento" });
    }

    res.status(200).json({ msg: "Actualizado correctamente" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findOneAndDelete({ _id: id });
    if (!item) {
      return res.status(404).json({ msg: "No existe el elemento" });
    }
    res.status(200).json({ msg: "Eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
