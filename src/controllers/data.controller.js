import DataManager from "../persistence/daos/DataManager.js";

const dataManager = new DataManager();

export const saveDataController = async (req, res) => {
    console.log('body', req.body)
    const newData = await dataManager.saveData(req.body);
    if (newData) {
      res.json({ message: "Datos guardados con éxito" });
    } else {
      res.json({ message: "Error al guardar los datos" });
    }
  };