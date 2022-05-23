import React from "react";
import HorizontalStack from "./util/HorizontalStack";

const Message = (props) => {
  return <HorizontalStack sx={{ padding: 2 }}>{props.message}</HorizontalStack>;
};

export default Message;
