import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../css/Searchbar.module.css";
import searchbarIcon from "../img/searchbarIcon.jpg";
import { getDiets } from "../redux/Actions";
const Searchbar = () => {
    let [name, setName] = useState()
    let diets = useSelector(state => state.getDiets)
    let dispatch = useDispatch()

    console.log("Dietas"+diets)


    useEffect(() => {
        dispatch(getDiets())
    }, [])
  return (
    <div className={s.searchbarContainer}>
      <div>
        <input type={"text"} name="name" value={name} placeholder='Search a recipe...'/>
        <button>
          <img src={searchbarIcon} />
        </button>
      </div>
        <select>
          <option disabled selected>Choose a Type of Diet</option>
          {diets.length&&diets.map((d, i) => <option key={i} value={d.name}>{d.name}</option>)}
        </select>

        <select>
          <option disabled selected>Order by Name</option>
          <option value={'asc'}>Asc</option>
          <option value={'desc'}>Desc</option>
        </select>

        <select>
          <option disabled selected>Order by Health Score</option>
          <option value={'asc'}>Asc</option>
          <option value={'desc'}>Desc</option>
        </select>
    </div>
  );
};

export default Searchbar;
