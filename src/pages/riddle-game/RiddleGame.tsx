import { useState, useEffect } from "react";
import getRiddle from "../../services/RiddleService";
import riddleProps from "../../models/RiddleDTO";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import {
  answerChoiceStyles,
  riddleAnswerRowsStyles,
  riddleBoxStyles,
  riddleQuestionTextStyles,
  toasterStyles,
} from "../../styles";
import CandyIcon from "../../components/icons/CandyIcon";

const RiddleGame = () => {
  // toaster section
  const handleToasterClose = () => {
    setToasterState(false);
    setToasterHideawayLength(1300);
  };
  const [toasterState, setToasterState] = useState<boolean>(false);
  const [toasterHideawayLength, setToasterHideawayLength] =
    useState<number>(1300);
  const [toasterText, setToasterText] = useState<string>("");
  const [toasterContentProps, setToasterContentProps] = useState<{}>({});
  // end toaster section

  const [buttonDelays, setButtonDelays] = useState<number[]>([]);

  const [riddle, setRiddle] = useState<riddleProps | null>(null);
  const [tries, setTries] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRiddle = () => {
      const riddleData = getRiddle();
      setRiddle(riddleData);

      setTries(0);

      const delays = riddleData.answerChoices.map(
        (_: any, index: number) => index * 200,
      );
      setButtonDelays(delays);
    };

    fetchRiddle();
  }, [loading]);

  if (!riddle) {
    // i cant even see this
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
      setTries(tries + 1);
      if (tries < 2) {
        setToasterText("Try again!");
        setToasterContentProps({
          style: toasterStyles.incorrect,
        });
        setToasterState(true);
        return;
      } else {
        setToasterText(`All out of tries. The answer was: ${riddle.answer}`);
        setToasterContentProps({
          style: toasterStyles.outOfTries,
        });
        setToasterState(true);
        setToasterHideawayLength(4000);
        setLoading(!loading);
        return;
      }
    }

    setToasterText("Correct! Take a candy");
    setToasterContentProps({
      style: toasterStyles.correct,
    });
    setToasterState(true);
    setLoading(!loading);
  };

  return (
    <Box>
      <Slide in={true} direction="down" timeout={500} key={riddle.question}>
        <Box sx={riddleBoxStyles}>
          <Typography sx={riddleQuestionTextStyles} variant="h2">
            {riddle.question}
          </Typography>
        </Box>
      </Slide>

      <Box sx={{ position: "fixed", bottom: 60, width: "100%" }}>
        {riddleRows.map((row, rowIndex) => (
          <Box sx={riddleAnswerRowsStyles}>
            {row.map((answer, index) => (
              <Slide
                in={true}
                key={answer}
                direction="up"
                timeout={500}
                style={{
                  transitionDelay: `${buttonDelays[rowIndex * 2 + index]}ms`,
                }}
              >
                <Button
                  sx={answerChoiceStyles}
                  onClick={checkAnswer.bind(this, answer)}
                  variant="contained"
                >
                  <Typography variant="h4" textAlign="center">
                    {answer}
                  </Typography>
                </Button>
              </Slide>
            ))}
          </Box>
        ))}
      </Box>

      <Snackbar
        transitionDuration={500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toasterState}
        onClose={handleToasterClose}
        TransitionComponent={Slide}
        autoHideDuration={toasterHideawayLength}
        message={
          <Typography variant="body1">
            <CandyIcon />
            {toasterText}
          </Typography>
        }
        ContentProps={toasterContentProps}
      />
    </Box>
  );
};

export default RiddleGame;
