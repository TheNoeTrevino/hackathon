import { Box, ButtonBase, Typography } from "@mui/material";
import riddleRepo from "./Riddles";

const RiddleGame = () => {
  const randomIndex = Math.floor(Math.random() * riddleRepo.length);
  const riddle = riddleRepo[randomIndex];
  const checkAnswer = (answer: string) => {
    if (answer === riddle.answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

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

  return (
    <>
      <Box
        sx={{
          mt: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Typography sx={{ mx: 5 }} variant="h2">
          {riddle.question}
        </Typography>
      </Box>

      {riddleRows.map((row) => (
        <Box
          sx={{
            mt: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
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
