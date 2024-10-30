import { riddleProps } from "../models/RiddleDTO";
import RiddlesRepo from "../repository/RiddlesRepository";

export function getRiddle(): riddleProps {
  const randRiddle =
    RiddlesRepo[Math.floor(Math.random() * RiddlesRepo.length)];

  return randRiddle;
}
