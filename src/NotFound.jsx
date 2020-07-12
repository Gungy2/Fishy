import React, { useEffect } from "react";
import { navigate } from "@reach/router";

function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      navigate("/FiFish");
    }),
      3000;
  }, []);

  return <h2>Invalid URL... Returning to the main page!</h2>;
}

export default NotFound;
