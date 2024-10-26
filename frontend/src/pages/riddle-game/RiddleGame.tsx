import { Box, Button, Typography } from "@mui/material";
import Riddles from "./Riddles";

const RiddleGame = () => {
  const checkAnswer = (answer: string) => {
    if (answer === Riddles.answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };
  return (
    <>
      <Box
        sx={{
          mt: 20,
          ml: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Typography variant="h2">{Riddles.question}</Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          ml: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        {Riddles.answerChoices.map((answer, index) => (
          <Button
            size="large"
            variant="contained"
            key={index}
            sx={{ mt: 1, ml: 2 }}
            onClick={checkAnswer.bind(this, answer)}
          >
            {answer}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default RiddleGame;
