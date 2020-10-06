import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ActionsInvoice from "~/store/ducks/invoice";

import { useSelector, useDispatch } from "react-redux";

import { Tooltip, IconButton } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons/";

const Button = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const dispatch = useDispatch();

  const invoiceExist = useSelector((state) => state.invoice.exist);

  const id = useSelector((state) => state.patrimony_item.show_patrimony.id);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const upload = (e) => {
    e.preventDefault();

    dispatch(ActionsInvoice.uploadInvoiceRequest(id, e.target.files[0]));

    setOpen(false);
  };

  const download = () => {
    dispatch(ActionsInvoice.downloadInvoiceRequest(id));
    setOpen(false);
  };

  const remove = () => {
    setOpen(false);
    dispatch(ActionsInvoice.deleteInvoiceRequest(id));
  };

  return (
    <>
      <ButtonGroup ref={anchorRef}>
        <Tooltip title="Nota Fiscal">
          <IconButton onClick={handleToggle}>
            <FileCopy style={{ color: "#a4a4a4" }} />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <input
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{ display: "none" }}
                    onChange={upload}
                    accept="application/pdf,application/vnd.ms-excel"
                    disabled={invoiceExist}
                  />
                  <label htmlFor="contained-button-file">
                    <MenuItem
                      disabled={invoiceExist}
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      adicionar
                    </MenuItem>
                  </label>

                  <MenuItem onClick={download} disabled={!invoiceExist}>
                    baixar
                  </MenuItem>

                  <MenuItem onClick={remove} disabled={!invoiceExist}>
                    excluir
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Button;
