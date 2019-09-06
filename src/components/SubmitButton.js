import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const SubmitButton = props => {
  const { submitted, active, textNormal, textSubmitted, textActive } = props;
  let text, icon;
  if (active) {
    text = textActive;
  } else if (submitted) {
    text = textSubmitted;
    icon = <CheckIcon />;
  } else {
    text = textNormal;
    icon = props.icon;
  }

  return (
    <Button
      variant="contained"
      color="secondary"
      type="submit"
      disabled={submitted}
      className={props.classes.button}
    >
      {text}
      {icon}
    </Button>
  );
};

SubmitButton.propTypes = {
  textNormal: PropTypes.string.isRequired,
  textSubmitted: PropTypes.string.isRequired,
  textActive: PropTypes.string,
  icon: PropTypes.element,
  submitted: PropTypes.bool,
  active: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.string)
};

const styles = theme =>
  createStyles({
    button: {
      "& svg": {
        fontSize: 20,
        marginLeft: 8
      }
    }
  });

export default withStyles(styles)(SubmitButton);
