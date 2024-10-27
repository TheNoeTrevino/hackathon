import { Box, ButtonBase, Typography } from "@mui/material";
import { getRiddle } from "../../services/RiddleService";
import { riddleProps } from "../../models/RiddleDTO";
import { useEffect, useState } from "react";

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
    return <Typography>Loading...</Typography>;
  }

  const riddleRows = [
    riddle.answerChoices.slice(0, 2),
    riddle.answerChoices.slice(2, 4),
  ];

  const answerChoiceStyles = {
    px: 2,
    py: 1,
    backgroundColor: "primary.main",
    color: "white",
    borderRadius: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };
  const riddleBoxStyles = {
    mt: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  };

  const checkAnswer = (answer: string) => {
    if (answer === riddle.answer) {
      alert("Correct!");
      setLoading(!loading);
    } else {
      alert("Incorrect!");
      setTries(tries + 1);
      if (tries >= 2) {
        alert(
          "You have run out of tries. The correct answer was: " + riddle.answer,
        );
        setLoading(!loading);
      }
    }
  };

  const riddleAnserRowsStyles = {
    mt: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  };

  return (
    <>
      <Box sx={riddleBoxStyles}>
        <Typography sx={{ mx: 5 }} variant="h2">
          {riddle.question}
        </Typography>
      </Box>

      {riddleRows.map((row) => (
        <Box sx={riddleAnserRowsStyles}>
          {row.map((answer) => (
            <ButtonBase
              sx={{ mt: 1, mx: 4, width: "100%" }}
              onClick={checkAnswer.bind(this, answer)}
            >
              <Box sx={answerChoiceStyles}>
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
