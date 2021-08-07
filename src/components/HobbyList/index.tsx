import React, { FC } from "react";
import "./HobbyList.css";

const HobbyList: FC<{ hobbyList: []; activeId: any; onHobbyClick: any }> = ({
  hobbyList,
  activeId,
  onHobbyClick,
}) => {
  const handleClick = (hobby: any) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby: any) => {
        return (
          <li
            key={hobby.id}
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => {
              handleClick(hobby);
            }}
          >
            {hobby.title}
          </li>
        );
      })}
    </ul>
  );
};

export default HobbyList;
