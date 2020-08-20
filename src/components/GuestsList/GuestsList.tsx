import React, { useEffect } from "react";
import GuestsListItem from "../GustsListItem/GustsListItem";

const GuestsList: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <ul>
      <GuestsListItem item={{ name: "Yurii" }} />
    </ul>
  );
};

export default GuestsList;
