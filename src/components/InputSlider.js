import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, InputLabel, Slider, Input, InputAdornment } from "@mui/material";

const InputCelsius = styled(Input)`
  width: 56;
`;

const InputFahrenheit = styled(Input)`
  width: 56;
`;

export default function InputSlider() {
  const [celsius, setCelsius] = React.useState(32);
  const [fahrenheit, setFahrenheit] = React.useState(0);

  const [MIN, MAX] = [-100, 100];

  const c2f = (c) => {
    return Math.floor((c * 9) / 5 + 32);
  };

  const f2c = (f) => {
    return Math.floor(((f - 32) * 5) / 9);
  };

  const handleSliderChange = (event, newValue) => {
    setCelsius(newValue);
    setFahrenheit(c2f(celsius));
  };

  const handleInputCChange = (event) => {
    let c = Number(event.target.value);
    setCelsius(event.target.value === "" ? "" : Number(c));
    setFahrenheit(c2f(celsius));
  };

  const handleInputFChange = (event) => {
    let f = Number(event.target.value);
    setFahrenheit(event.target.value === "" ? "" : Number(f));
    setCelsius(f2c(fahrenheit));
  };

  const handleBlur = () => {
    if (celsius < MIN) {
      setCelsius(MIN);
    } else if (celsius > MAX) {
      setCelsius(MAX);
    }
  };

  return (
    <>
      <InputLabel shrink>Conversion C / F</InputLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <InputCelsius
            alignItems="center"
            value={celsius}
            margin="dense"
            // size="small"
            onChange={handleInputCChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: MIN,
              max: MAX,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            endAdornment={<InputAdornment position="end">C</InputAdornment>}
          />
        </Grid>

        <Grid item xs>
          <Slider
            value={typeof celsius === "number" ? celsius : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <InputFahrenheit
            value={fahrenheit}
            size="small"
            onChange={handleInputFChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: MIN,
              max: MAX,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            endAdornment={<InputAdornment position="end">F</InputAdornment>}
          />
        </Grid>
      </Grid>
    </>
  );
}
