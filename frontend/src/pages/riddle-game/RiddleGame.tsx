import React, { useState, useEffect } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import { getRiddle } from "../../services/RiddleService";
import { riddleProps } from "../../models/RiddleDTO";
import {
  answerChoiceStyles,
  correctToasterStyles,
  riddleAnswerRowsStyles,
  riddleBoxStyles,
  riddleQuestionTextStyles,
} from "../../styles";
import CandyIcon from "../../components/icons/CandyIcon";

const RiddleGame = () => {
  // toaster section
  const handleClose = () => {
    setToasterState({
      ...toasterState,
      open: false,
    });
  };

  const [toasterState, setToasterState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

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

      const delays = riddleData.answerChoices.map((_, index) => index * 200);
      setButtonDelays(delays);
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
      setTries(tries + 1);
      if (tries < 2) {
        setToasterText("Try again!");
        setToasterContentProps({
          style: { backgroundColor: "#ffcc00", color: "#373038" },
        });
        setToasterState({
          open: true,
          Transition: Slide,
        });
        return;
      } else {
        setToasterText(`All out of tries. The answer was: ${riddle.answer}`);
        setToasterContentProps({
          style: { backgroundColor: "#ffcc00", color: "#373038" },
        });
        setToasterState({
          open: true,
          Transition: Slide,
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(!loading);

        return;
      }
    }

    setToasterText("Correct! Take a candy");
    setToasterContentProps({
      style: correctToasterStyles,
    });
    setToasterState({
      open: true,
      Transition: Slide,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
        transitionDuration={400}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toasterState.open}
        onClose={handleClose}
        TransitionComponent={toasterState.Transition}
        key={toasterState.Transition.name}
        autoHideDuration={1200}
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
