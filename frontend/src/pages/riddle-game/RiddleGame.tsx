import {
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  Typography,
} from "@mui/material";
import { getRiddle } from "../../services/RiddleService";
import { riddleProps } from "../../models/RiddleDTO";
import { useEffect, useState } from "react";
import {
  answerChoiceStyles,
  riddleAnswerRowsStyles,
  riddleBoxStyles,
} from "../../styles";

const RiddleGame = () => {
  const [riddle, setRiddle] = useState<riddleProps | null>(null);
  const [tries, setTries] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRiddle = async () => {
      const riddleData = await getRiddle();
      setRiddle(riddleData), [loading];
      setTries(0);
    };

    fetchRiddle();
  }, [loading]);

  if (!riddle) {
    return (
      <Box>
        <CircularProgress size="50px" />;
      </Box>
    );
  }
  const riddleRows = [
    riddle.answerChoices.slice(0, 2),
    riddle.answerChoices.slice(2, 4),
  ];

  const checkAnswer = (answer: string): void => {
    if (answer !== riddle.answer) {
      if (tries < 2) {
        // alert("Incorrect!");
        setTries(tries + 1);
        return;
      } else {
        // alert(
        //   "You have run out of tries. The correct answer was: " + riddle.answer,
        // );
        setLoading(!loading);
        return;
      }
    }
    // alert("Correct!");
    setLoading(!loading);
  };

  return (
    <>
      <Box sx={riddleBoxStyles}>
        <Typography
          sx={{
            mx: 15,
            textAlign: "center",
            color: "white",
            textShadow: "#FC0 1px 0 10px;",
          }}
          variant="h2"
        >
          {riddle.question}
        </Typography>
      </Box>

      <Box sx={{ position: "fixed", bottom: 60, width: "100%" }}>
        {riddleRows.map((row) => (
          <Box sx={riddleAnswerRowsStyles}>
            {row.map((answer) => (
              <Button
                key={answer}
                sx={answerChoiceStyles}
                onClick={checkAnswer.bind(this, answer)}
                variant="contained"
              >
                <Typography variant="h4" textAlign="center">
                  {answer}
                </Typography>
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default RiddleGame;
