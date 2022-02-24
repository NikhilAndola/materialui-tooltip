import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  customTooltip: {
    backgroundColor: "rgba(220, 0, 78, 0.8)"
  },
  customArrow: {
    color: "rgba(220, 0, 78, 0.8)"
  }
}));

export const TooltipExample = () => {
  const classes = useStyles();

  return (
    <>
      <Tooltip
        classes={{
          tooltip: classes.customTooltip,
          arrow: classes.customArrow
        }}
        title="Delete"
        arrow
      >
        <Button color="secondary">
          <DeleteIcon />
        </Button>
      </Tooltip>
    </>
  );
};
