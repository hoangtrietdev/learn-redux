import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../../components/HobbyList";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const HomePageScreen: FC = () => {
  const hobbyList = useSelector((state: any) => state.hobby.list);
  const activeId = useSelector((state: any) => state.hobby.activeId);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    //Random object
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    // Dispatch action
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby: any) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="home-page">
      <h1>Redux Hook</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
};

export default HomePageScreen;
