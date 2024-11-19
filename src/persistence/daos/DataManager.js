import { dataModel } from "../models/data.models.js";
import { hashPassword, comparePasswords } from "../../utils.js";
import CustomError from "../../utils/errors/CustomError.js";
import {
  ErrorsCause,
  ErrorsMessage,
  ErrorsName,
} from "../../utils/errors/errorsEnum.js";
import logger from "../../utils/winston.js";

export default class DataManager {

    async saveData(data) {
        console.log('data en mamager',data)
        try {
           const dataFromDb = await dataModel.create(data);
            logger.info("Data saved successfully");
            return dataFromDb;
       
        } catch (error) {
          logger.error("Error while saving data", error);
          throw new Error(error);
        }
      }

      async getData() {
        try {
          const data = await dataModel.find();
          if (data) {
            logger.info("Data obtained successfully");
            return data;
          } else {
            logger.error("Data not found in database");
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      }


}