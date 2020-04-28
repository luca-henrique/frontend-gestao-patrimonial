import { TextField } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#088A85",
      padding: "4px !important",
    },
  },
})(TextField);

export default ValidationTextField;
