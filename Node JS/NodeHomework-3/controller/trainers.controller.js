import TrainerService from "../service/trainers.service.js";

export default class TrainerController {

  //Get all trainers
  static async getAllTrainers(req, res) {
    try {
      const currentlyActiveTrainers = req.query.activeTrainers?.toLowerCase() === "true";
      const sortTrainers = req.query.sortBy;
      const trainers = await TrainerService.getAllTrainers(
        currentlyActiveTrainers,
        sortTrainers
      );
      res.send(trainers);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Get trainer
  static async getTrainer(req, res) {
    try {
      const trainer = await TrainerService.getTrainerById(req.params.id);
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Update trainer
  static async updateTrainer(req, res) {
    try {
      const trainerId = req.params.id;
      const trainerBody = req.body;
      const trainer = await TrainerService.updateTrainerInfo(
        trainerId,
        trainerBody
      );
      res.send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Add trainer
  static async addTrainer(req, res) {
    try {
      const trainerBody = req.body;
      const trainer = await TrainerService.addTrainer(trainerBody);
      res.status(201).send(trainer);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Delete trainer
  static async deleteTrainer(req, res) {
    try {
      await TrainerService.deleteTrainer(req.params.id);
      res.status(204).send({ message: "Trainer deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Delete all trainers
  static async deleteAllTrainers(req, res) {
    try {
      await TrainerService.deleteAllTrainers();
      res.status(204).send({ message: "Trainers deleted" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
