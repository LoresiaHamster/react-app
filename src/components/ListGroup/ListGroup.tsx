import { useState } from "react";
import styles from "./ListGroup.module.css";

//import styled from "styled-components";
import Like from "../Like";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className={styles.gridWrap}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? [styles.gridItem, styles.active].join(" ")
                : styles.gridItem
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
            <Like onClick={() => console.log("like clicked")} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
