import { useState, useEffect, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MyCustomButton from "./Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import DateList from "./DateList";

const useStyles = makeStyles({
  header: {
    position: "absolute",
    fontSize: 25,
    fontFamily: "Josefin Sans, sans-serif",
    top: "10%",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    position: "absolute",
    fontSize: 25,
    fontFamily: "Josefin Sans, sans-serif",
    top: "10%",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    marginBottom: "200px",
  },
  titleFinal: {
    position: "absolute",
    fontSize: 25,
    fontFamily: "Josefin Sans, sans-serif",
    top: "40%",
    fontWeight: "bold",
  },
  secondTitle: {
    position: "absolute",
    fontSize: 20,
    fontFamily: "Josefin Sans, sans-serif",
    top: "10%",
    fontWeight: "bold",
  },
  subTitle2: {
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    marginBottom: "150px",
  },
  subTitle3: {
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    marginLeft: "55px",
    bottom: "0",
    position: "absolute",
  },
  dateList: {
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    marginBottom: "350px",
  },
  button: {
    bottom: "50%",
    position: "absolute",
  },
  button2: {
    bottom: "1",
    position: "absolute",
  },
  checkboxRoot: {
    display: "flex",
  },
  formControl: {
    marginBottom: 350,
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
  },
  badBunny: {
    fontSize: 15,
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
    marginBottom: "300px",
  },
  textRoot: {
    "& > *": {
      backgoundColor: "#F25C54",
      bottom: 280,
    },
  },
  rootButton: {
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
  selectDateButton: {
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
  selectDates: {
    paddingRight: "90px",
    paddingTop: "100px",
  },
});

export default function Example() {
  const classes = useStyles();
  const [count, setCount] = useState(15);
  const [value, setValue] = useState("female");
  const [checked, setChecked] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [left, setLeft] = useState<string[]>([]);

  const [state, setState] = useState({
    outside: true,
    inside: true,
    view: 0,
    alcohol: true,
    food: true,
    fourtweenty: true,
    exerciseLow: true,
    exerciseHigh: true,
    dog: true,
    trill: true,
    water: true,
    badBunnyAnswer: "",
    theWeekndAnswer: "",
    drakeAnswer: "",
    grupoFirmeAnswer: "",
    losDosCarnalesAnswer: "",
    buttonDissabled: true,
    mimosaOrWine: "",
    riverOrSkydive: "",
    soccerOrFootball: "",
    bowlingOrGolf: "",
    statefairOrArtMus: "",
    gunrangeOrHorseBack: "",
    pinnappleOnPizza: "",
    wifiChecked: false,
    datesSeleted: [],
  });
  const {
    outside,
    inside,
    view,
    alcohol,
    food,
    fourtweenty,
    exerciseLow,
    exerciseHigh,
    dog,
    trill,
    water,
    theWeekndAnswer,
    badBunnyAnswer,
    drakeAnswer,
    grupoFirmeAnswer,
    losDosCarnalesAnswer,
    buttonDissabled,
    mimosaOrWine,
    riverOrSkydive,
    soccerOrFootball,
    bowlingOrGolf,
    statefairOrArtMus,
    gunrangeOrHorseBack,
    pinnappleOnPizza,
  } = state;

  const getRiver = (): string => {
    if (fourtweenty) {
      return "Floating down the river with a xxxxx ";
    } else {
      return "Floating down the river";
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const badBunny = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      buttonDissabled: false,
    });
  };

  const iWouldRatherHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLeft([...left, event.target.value]);
    setState({
      ...state,
      [event.target.name]: event.target.value,
      buttonDissabled: false,
    });
    console.log(checked.length);
  };

  const disableNextButton = () => {
    setState({ ...state, buttonDissabled: true });
  };

  const testing = () => {
    if (count >= 6 || count <= 20) {
      disableNextButton();
    }
    if (count === 18) {
      // TODO: Send to firebase
    }
    setCount(count + 1);
  };

  let mobileView;
  let buttonType = (
    <MyCustomButton
      onClick={testing}
      buttonText={"Next"}
      classes={classes.rootButton}
    />
  );

  if (count === 0) {
    mobileView = (
      <Fragment>
        <Typography className={classes.title}>
          Hi, Cynthia! Thank you for taking the time to fill out this survey.
        </Typography>
        <Typography className={classes.subTitle}>
          I promise it will be worth it in the end!
        </Typography>
      </Fragment>
    );
  }
  if (count === 1) {
    mobileView = (
      <Fragment>
        <Typography className={classes.secondTitle}>
          From your Pupusa recommendation to the world on Twitter, it sounds
          like you have good taste. I would like to take you out and get to know
          you more!
        </Typography>
        <Typography className={classes.subTitle2}>
          There is no pressure as in the end we'll both, hopefully, have a good
          time and a new friend.
        </Typography>
      </Fragment>
    );
  }
  if (count === 2) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>
          There are some specific activities in this list, select the ones that
          YOU ARE comfortable doing:
        </Typography>
      </Fragment>
    );
  }

  if (count === 3) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>Activity Types</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={outside}
                    onChange={handleChange}
                    name="outside"
                  />
                }
                label="Outdoor Activities"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inside}
                    onChange={handleChange}
                    name="inside"
                  />
                }
                label="Indoor Activities"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Fragment>
    );
  }
  if (count === 4) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>
          I’m okay with activities that involve:{" "}
        </Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={alcohol}
                    onChange={handleChange}
                    name="alcohol"
                  />
                }
                label="Alcohol"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={food}
                    onChange={handleChange}
                    name="food"
                  />
                }
                label="Food"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={fourtweenty}
                    onChange={handleChange}
                    name="fourtweenty"
                  />
                }
                label="420"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={exerciseLow}
                    onChange={handleChange}
                    name="exerciseLow"
                  />
                }
                label="Exercise(1 - 5)"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={exerciseHigh}
                    onChange={handleChange}
                    name="exerciseHigh"
                  />
                }
                label="Exercise(5 - 10)"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={dog} onChange={handleChange} name="dog" />
                }
                label="Dog"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={water}
                    onChange={handleChange}
                    name="water"
                  />
                }
                label="Water"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={trill}
                    onChange={handleChange}
                    name="trill"
                  />
                }
                label="Adrenaline rush"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Fragment>
    );
  }

  if (count === 5) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>
          Okay bet! We can work with this. Before we get to the recommended
          d8’s, complete the following lyrics:
        </Typography>
      </Fragment>
    );
  }
  if (count === 6) {
    mobileView = (
      <Fragment>
        <Typography className={classes.badBunny}>
          “Ahh, yo pensaba que se ponia _ _ _ _ _.” - Bad Bunny
        </Typography>
        <form className={classes.textRoot} noValidate autoComplete="off">
          <TextField
            id="badBunnyAnswer"
            placeholder="Answer Here"
            onChange={badBunny}
            value={badBunnyAnswer}
            name="badBunnyAnswer"
            fullWidth
          />
        </form>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 7) {
    mobileView = (
      <Fragment>
        <Typography className={classes.badBunny}>
          “Gracias por aquellos que han hablado _ _ _ de mí” - Eduin Caz
        </Typography>
        <form className={classes.textRoot} noValidate autoComplete="off">
          <TextField
            id="grupoFirme"
            placeholder="Answer Here"
            onChange={badBunny}
            name="grupoFirmeAnswer"
            value={grupoFirmeAnswer}
            fullWidth
          />
        </form>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 8) {
    mobileView = (
      <Fragment>
        <Typography className={classes.badBunny}>
          “You got the Batphone and my workline, you should call it, When the
          last time you did something _____”
        </Typography>
        <form className={classes.textRoot} noValidate autoComplete="off">
          <TextField
            id="drakeAnswer"
            placeholder="Answer Here"
            onChange={badBunny}
            value={drakeAnswer}
            name="drakeAnswer"
            fullWidth
          />
        </form>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 9) {
    mobileView = (
      <Fragment>
        <Typography className={classes.badBunny}>
          “Bring your love, baby, I could bring my shame, Bring the drugs, baby,
          I could bring ____” - The Weeknd
        </Typography>
        <form className={classes.textRoot} noValidate autoComplete="off">
          <TextField
            id="theWeeken"
            placeholder="Answer Here"
            onChange={badBunny}
            name="theWeekndAnswer"
            value={theWeekndAnswer}
            fullWidth
          />
        </form>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 10) {
    mobileView = (
      <Fragment>
        <Typography className={classes.badBunny}>
          “Acuérdense que ____ enviaba al ____ y no tenía nada”
        </Typography>
        <form className={classes.textRoot} noValidate autoComplete="off">
          <TextField
            id="losDosCarnales"
            placeholder="Answer Here"
            onChange={badBunny}
            value={losDosCarnalesAnswer}
            name="losDosCarnalesAnswer"
            fullWidth
          />
        </form>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }

  if (count === 11) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="mimosaOrWine"
              name="mimosaOrWine"
              value={mimosaOrWine}
              onChange={iWouldRatherHandler}
              id="mimosaOrWine"
            >
              <FormControlLabel
                value="Bottomless Mimosas on Sunday"
                control={<Radio />}
                label="Enjoy a fresh Oranges on a hot day"
              />
              <FormControlLabel
                value="Go Wine Tasting"
                control={<Radio />}
                label="Relax and eat Grapes on a rainy day"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 12) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="riverOrSkydive"
              name="riverOrSkydive"
              value={riverOrSkydive}
              onChange={iWouldRatherHandler}
              id="riverOrSkydive"
            >
              <FormControlLabel
                value="Float down the a river"
                control={<Radio />}
                label="Be in a boat crash and have to survive out in the ocean"
              />
              <FormControlLabel
                value="Go Skydiving"
                control={<Radio />}
                label="Be in a plane crash and survive the fall on a island"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 13) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="soccerOrFootball"
              name="soccerOrFootball"
              value={soccerOrFootball}
              onChange={iWouldRatherHandler}
              id="soccerOrFootball"
            >
              <FormControlLabel
                value="Watch MN United Dominate"
                control={<Radio />}
                label="Score a point in Soccer"
              />
              <FormControlLabel
                value="Watch the Vikings lose"
                control={<Radio />}
                label="A basket in Football"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 14) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="bowlingOrGolf"
              name="bowlingOrGolf"
              value={bowlingOrGolf}
              onChange={iWouldRatherHandler}
              id="bowlingOrGolf"
            >
              <FormControlLabel
                value="Take a L in Bowling"
                control={<Radio />}
                label="Lose in bowling"
              />
              <FormControlLabel
                value="Top Golf"
                control={<Radio />}
                label="Lose in golf"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 15) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="statefairOrArtMus"
              name="statefairOrArtMus"
              value={statefairOrArtMus}
              onChange={iWouldRatherHandler}
              id="statefairOrArtMus"
            >
              <FormControlLabel
                value="MN State Fair"
                control={<Radio />}
                label="Eat Sweet Cookies"
              />
              <FormControlLabel
                value="Dress up > Flight to Chicago > Art Museum"
                control={<Radio />}
                label="Be the sweetest cookie in the room"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 16) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>I would rather:</Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="gunrangeOrHorseBack"
              name="gunrangeOrHorseBack"
              value={gunrangeOrHorseBack}
              onChange={iWouldRatherHandler}
              id="gunrangeOrHorseBack"
            >
              <FormControlLabel
                value="Gun Range"
                control={<Radio />}
                label="Be the shooter"
              />
              <FormControlLabel
                value="Horseback ridding"
                control={<Radio />}
                label="Be the Driver"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 17) {
    mobileView = (
      <Fragment>
        <Typography className={classes.header}>
          Does Pinneapple go on Pizza?
        </Typography>
        <div className={classes.checkboxRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="pinnappleOnPizza"
              name="pinnappleOnPizza"
              value={pinnappleOnPizza}
              onChange={iWouldRatherHandler}
              id="pinnappleOnPizza"
            >
              <FormControlLabel
                value="Up-down"
                control={<Radio />}
                label="Yes"
              />

              <FormControlLabel
                value="Up-Down"
                control={<Radio />}
                label="naw"
              />
              <FormControlLabel
                value="UpDown"
                control={<Radio />}
                label="I enjoy a good adventure"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Fragment>
    );
    buttonType = (
      <div className={classes.button}>
        <MyCustomButton
          onClick={testing}
          buttonText={"Next"}
          isButonDisabled={buttonDissabled}
          classes={classes.rootButton}
        />
      </div>
    );
  }
  if (count === 18) {
    mobileView = (
      <Fragment>
        <Typography className={classes.secondTitle}>
          Cool, based on your responses and this quick algorithm I made, the
          ideal 1st d8's would be:
        </Typography>
        {fourtweenty ? (
          <Typography className={classes.subTitle3}>
            We could be high some of these
          </Typography>
        ) : (
          ""
        )}

        <div className={classes.selectDates}>
          <DateList
            right={right}
            setRight={setRight}
            left={left}
            setLeft={setLeft}
            checked={checked}
            setChecked={setChecked}
            setState={setState}
            state={state}
          />
        </div>
      </Fragment>
    );
    buttonType = (
      <MyCustomButton
        onClick={testing}
        buttonText={"Next"}
        isButonDisabled={buttonDissabled}
        classes={classes.rootButton}
      />
    );
  }
  if (count === 19) {
    mobileView = (
      <Fragment>
        {right.length > 0 ? (
          <Typography className={classes.titleFinal}>
            Issa D8! We'll be in touch soon! :D
          </Typography>
        ) : (
          <Typography className={classes.titleFinal}>
            We'll be in touch soon! :D
          </Typography>
        )}
      </Fragment>
    );
    buttonType = <Typography className={classes.secondTitle}></Typography>;
  }

  return (
    <Fragment>
      {mobileView}
      {count === 18 ? (
        <div className={classes.button2}>{buttonType}</div>
      ) : (
        <div className={classes.button}>{buttonType}</div>
      )}
    </Fragment>
  );
}
