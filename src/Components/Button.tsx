import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #F25C54 30%, #F25C54 90%)",
    borderRadius: 15,
    border: 0,
    color: "white",
    height: 39,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textTransform: "capitalize",
    fontFamily: "Josefin Sans, sans-serif",
    width: "340px",
    textAlign: "center",
  },
});

export default function MyCustomButton(props: {
  onClick: () => void;
  buttonText: String;
  isButonDisabled?: boolean;
  classes?: any;
}): JSX.Element {
  const { onClick, buttonText, isButonDisabled, classes } = props;

  return (
    <>
      <Button className={classes} onClick={onClick} disabled={isButonDisabled}>
        {buttonText}
      </Button>
    </>
  );
}
