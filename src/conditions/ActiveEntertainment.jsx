import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import config from "../config.json";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

export default function ActiveEntertainment({ setPage }) {
  //const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [value, setValue] = useState(0);
  setTimeout(() => {
    // setIsButtonEnabled(true);
    setPage("selection");
  }, config.waitTimeInMilliseconds + config.correctionTime);

  const theme = createMuiTheme({
    palette: {
      primary:
        value < 75
          ? red
          : value >= 75 && value < 150
          ? orange
          : value >= 150 && value < 175
          ? green
          : value >= 175 && value < 225
          ? orange
          : red,
      contrastThreshold: 1
    }
  });

  return (
    <>
      <Card className="Card flex">
        <div className="centered-contents">
          {value >= 150 && value < 175 ? (
            <p>
              <strong>Inderdaad tussen de 150 en 175 kilogram!</strong>
            </p>
          ) : (
            <p>
              Gok eens hoeveel kilogram CO<sub>2</sub> je bespaart!
            </p>
          )}
          <div className="slider-container">
            <ThemeProvider theme={theme}>
              <Slider
                min={0}
                max={300}
                value={value}
                color="primary"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                // valueLabelFormat={x => x.toString() + "kg"}
                valueLabelDisplay="on"
              />
            </ThemeProvider>
          </div>
        </div>
      </Card>
      {/* <Button
        disabled={!isButtonEnabled}
        variant="success"
        className="Button"
        onClick={() => setPage("information")}
      >
        {isButtonEnabled ? (
          "Ga naar resultaten"
        ) : (
          <Spinner animation="border" />
        )}
      </Button> */}
    </>
  );
}
