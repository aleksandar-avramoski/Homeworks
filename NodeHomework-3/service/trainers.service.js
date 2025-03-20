import TrainerModel from "../model/trainers.model.js";
import { v4 as uuidv4 } from "uuid";

export default class TrainerService {
  //Get all trainers
  static async getAllTrainers(activeTrainers, sortBy) {
    const trainers = await TrainerModel.getAllTrainers();
    let filteredTrainers = trainers;
    
    //Active Trainers
    if (typeof activeTrainers === "boolean" && activeTrainers === true) {
      filteredTrainers = filteredTrainers.filter(
        (trainers) => trainers.isCurrentlyTeaching === activeTrainers
      );
    }
    
    //Courses Asc
    if (sortBy === "coursesAsc") {
      filteredTrainers.sort((a, b) => a.coursesFinished - b.coursesFinished);

    //Courses Desc
    } else if (sortBy === "coursesDesc") {
      filteredTrainers.sort((a, b) => b.coursesFinished - a.coursesFinished);
    }

    return filteredTrainers;
  }

  //Get trainer byId
  static async getTrainerById(id) {
    const trainer = await TrainerModel.getTrainerById(id);

    if (!trainer) {
      throw new Error("Trainer not found");
    }

    return trainer;
  }

  //Update trainer info
  static async updateTrainerInfo(id, body) {
    const trainer = await TrainerModel.getTrainerById(id);

    if (!trainer) {
      throw new Error("Trainer not found");
    }

    const updatedTrainer = {
      id: uuidv4(),
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return await TrainerModel.updateTrainerInfo(id, updatedTrainer);
  }

  //Add trainer
  static async addTrainer(body) {
    const trainer = {
      id: uuidv4(),
      ...body,
      addedAt: new Date().toISOString(),
    };

    return await TrainerModel.addTrainer(trainer);
  }

  //Delete trainer
  static async deleteTrainer(id) {
    return await TrainerModel.deleteTrainer(id);
  }

  //Delete all trainers
  static async deleteAllTrainers() {
    return await TrainerModel.deleteAllTrainers();
  }
}
