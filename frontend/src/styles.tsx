const navbarStyles = {
  candyIcon: {
    display: { xs: "none", md: "flex" },
    mr: 1,
  },
  smdTypography: {
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "primary",
    textDecoration: "none",
  },
  menuIconButton: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  menu: {
    display: { xs: "block", md: "none" },
  },
  logoTypography: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "primary",
    textDecoration: "none",
  },
  button: {
    my: 2,
    color: "#FFC341",
    display: "block",
  },
};

const riddleStyles = {
  width: "100%",
  height: "500px",
  border: "1px solid grey",
  alignContent: "center",
};

const riddleButtonStyles = {
  mt: 2,
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
};

const answerChoiceStyles = {
  textShadow: "#FC0 1px 0 0px;",
  boxShadow:
    "0px 0px 50px 1px #88E032, 0px 0px 10px 2px rgba(57, 255, 20, 0.7), 0px 0px 15px 3px rgba(57, 255, 20, 0.5)",
  "&:hover": {
    boxShadow:
      "0px 0px 50px 1px #FF0000, 0px 0px 10px 2px rgba(57, 255, 20, 0.7), 0px 0px 15px 3px rgba(57, 255, 20, 0.5)",
  },
  px: 4,
  py: 5,
  mx: 3,
  backgroundColor: "primary.main",
  color: "white",
  borderRadius: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const riddleBoxStyles = {
  mx: "6rem",
  textAlign: "center",
  color: "#FFFFFF",
  textShadow: "#FFC341 5px 0 100px, #FFC341 5px 0 100px, #FFC341 5px 0 100px;",
  justifySelf: "center",
};

const riddleAnswerRowsStyles = {
  mt: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

const riddleQuestionTextStyles = {
  mt: "5rem",
  mx: "1.5rem",
  textAlign: "center",
  color: "white",
  textShadow: "#FC0 1px 0 10px;",
  justifySelf: "center",
};

const toasterStyles = {
  correct: { backgroundColor: "#29AD13", color: "#373038" },
  incorrect: { backgroundColor: "#ffcc00", color: "#373038" },
  outOfTries: { backgroundColor: "#ff0000", color: "#003038" },
};

export {
  riddleAnswerRowsStyles,
  answerChoiceStyles,
  riddleButtonStyles,
  riddleBoxStyles,
  navbarStyles,
  riddleStyles,
  riddleQuestionTextStyles,
  toasterStyles,
};
