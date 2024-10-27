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
    color: "inherit",
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
    color: "inherit",
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
