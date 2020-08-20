import React from "react";

interface Props {
  item: {
    name: string;
  };
}

const GuestsListItem: React.FC<Props> = ({ item }) => {
  return <li>{item.name}</li>;
};

export default GuestsListItem;
