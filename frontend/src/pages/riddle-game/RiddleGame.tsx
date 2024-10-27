import { Box, ButtonBase, CircularProgress, Typography } from "@mui/material";
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
        alert("Incorrect!");
        setTries(tries + 1);
        return;
      } else {
        alert(
          "You have run out of tries. The correct answer was: " + riddle.answer,
        );
        setLoading(!loading);
        return;
      }
    }
    alert("Correct!");
    setLoading(!loading);
  };

  return (
    <>
      <Box sx={riddleBoxStyles}>
        <Typography sx={{ mx: 5 }} variant="h2">
          {riddle.question}
        </Typography>
      </Box>

      {riddleRows.map((row) => (
        <Box sx={riddleAnswerRowsStyles}>
          {row.map((answer) => (
            <ButtonBase
              key={answer}
              sx={{ mt: 1, mx: 4, width: "100%" }}
              onClick={checkAnswer.bind(this, answer)}
            >
              <Box sx={answerChoiceStyles} key={answer}>
                <Typography variant="h4">{answer}</Typography>
              </Box>
            </ButtonBase>
          ))}
        </Box>
      ))}
    </>
  );
};

export default RiddleGame;
