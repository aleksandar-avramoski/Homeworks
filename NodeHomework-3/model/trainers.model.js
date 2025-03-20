import DataService from "../service/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const filePathFolder = path.dirname(currentFilePath);
const trainersPath = path.join(filePathFolder, "../data/trainers.json");

export default class TrainerModel {
  
  //Get all trainers
  static async getAllTrainers() {
    return await DataService.readData(trainersPath);
  }

  //Get trainer by id
  static async getTrainerById(id) {
    const trainers = await DataService.readData(trainersPath);
    const foundTrainer = trainers.find((trainer) => trainer.id === id);
    return foundTrainer;
  }

  //Update trainer info
  static async updateTrainerInfo(id, body) {
    const trainers = await this.getAllTrainers();
    const index = trainers.findIndex((trainer) => trainer.id === id);
    
    if (index < 0) {
      throw new Error("Trainer not found");
    }
    
    trainers[index] = body;
    await DataService.writeData(trainersPath, trainers);
    return trainers[index];
  }

  //Add trainer
  static async addTrainer(body) {
    const trainers = await this.getAllTrainers();
    trainers.push(body);
    await DataService.writeData(trainersPath, trainers);
    return body;
  }

  //Delete trainer 
  static async deleteTrainer(id) {
    const trainers = await this.getAllTrainers();
    const filteredTrainers = trainers.filter((trainer) => trainer.id !== id);
    await DataService.writeData(trainersPath, filteredTrainers);
  }

  //Delete all trainers
  static async deleteAllTrainers() {
    return await DataService.writeData(trainersPath, []);
  }
}

/*console.log(
  TrainerModel.addTrainer({
    id: uuidv4(),
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex@gmail.com",
    isCurrentlyTeaching: true,
    timeEmployed: "3 months",
    coursesFinished: 1
  })
);*/



