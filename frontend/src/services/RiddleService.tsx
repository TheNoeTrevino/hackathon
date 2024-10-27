import axios from "axios";
import { riddleProps } from "../models/RiddleDTO";

export async function getRiddle(): Promise<riddleProps> {
  const response = await axios.get("http://127.0.0.1:8000/riddle");
  const riddle: riddleProps = response.data;
  console.log(riddle);
  return riddle;
}
