import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hook/useForm"
import { HeroeCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  //console.log({query});

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero here"
              className="form form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-info mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>
            : (heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{q}</b></div>
          }
          
          {
            heroes.map(hero => (
              <HeroeCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>

    </>
  )
}
