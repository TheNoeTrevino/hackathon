const navbarStyles = {
  cakeIcon: {
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
    color: "white",
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
    "0px 0px 75px 1px #88E032, 0px 0px 10px 2px rgba(57, 255, 20, 0.7), 0px 0px 15px 3px rgba(57, 255, 20, 0.5)",
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
  // mt: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  textAlign: "center",
  justifySelf: "center",
};

const riddleAnswerRowsStyles = {
  mt: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};

export {
  riddleAnswerRowsStyles,
  answerChoiceStyles,
  riddleButtonStyles,
  riddleBoxStyles,
  navbarStyles,
  riddleStyles,
};
