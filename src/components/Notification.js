import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/slices/ui-slice";

function Notification({ type, message }) {
  const dispatch = useDispatch();
  const notification = useSelector((s) => s.ui.notification);
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notification?.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notification;
