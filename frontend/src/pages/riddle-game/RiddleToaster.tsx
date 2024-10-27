import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useState } from "react";
import { Typography } from "@mui/material";
import CandyIcon from "../../components/icons/CandyIcon";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const TransitionsSnackbar = () => {
  const [state, setState] = useState<{
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

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >,
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        transitionDuration={600}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        autoHideDuration={1200}
        message={
          <Typography variant="body1">
            <CandyIcon /> Correct! Opening vault...
          </Typography>
        }
        ContentProps={{
          style: { backgroundColor: "#FFC341", color: "#373038" },
        }}
      />
    </div>
  );
};

export default TransitionsSnackbar;
