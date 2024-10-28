import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import { brandColor500 } from "../styles/globalStyles";

// COMPONENT START
export default function LoadingSpinner({
  disableShrink = false,
  size = 30,
  thickness = 4,
  progressColor = "",
}) {
  // Create a theme with a custom palette
  const theme = createTheme({
    palette: {
      progressColorObj: {
        primaryColor: `${progressColor !== "" ? `${progressColor}` : `${brandColor500}`}`,
      },
    },
  });

  // JSX
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress
        disableShrink={disableShrink}
        size={size}
        thickness={thickness}
        sx={{
          color: theme.palette.progressColorObj.primaryColor,
        }}
      />
    </ThemeProvider>
  );
  // JSX
}

LoadingSpinner.propTypes = {
  disableShrink: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thickness: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  progressColor: PropTypes.string,
};

// COMPONENT END
