import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
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
import TransitionsSnackbar from "./RiddleToaster";

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

  const checkAnswer = async (answer: string): Promise<void> => {
    if (answer !== riddle.answer) {
      if (tries < 2) {
        setTries(tries + 1);
        return;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(!loading);
        return;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(!loading);
  };

  return (
    <>
      <TransitionsSnackbar></TransitionsSnackbar>
      <Box
        sx={{
          riddleBoxStyles,
        }}
      >
        {/* <TransitionsSnackbar></TransitionsSnackbar> */}
        <Typography
          sx={{
            mx: 15,
            textAlign: "center",
            color: "#FFFFFF",
            textShadow: "#FFC341 5px 0 100px, #FFC341 5px 0 100px, #FFC341 5px 0 100px;",

            justifySelf: "center",
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
