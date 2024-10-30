import riddleProps from "../models/RiddleDTO";
import RiddlesRepo from "../repository/RiddlesRepository";

const getRiddle = (): riddleProps => {
  const randRiddle =
    RiddlesRepo[Math.floor(Math.random() * RiddlesRepo.length)];

  return randRiddle;
};

export default getRiddle;
