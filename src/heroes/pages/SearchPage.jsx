import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ""} = queryString.parse( location.search )

    const heroes = getHeroesByName( q )


    const { onInputChange, onResetForm, searchText } = useForm({
      searchText: q
    })

    const onFormSubmit = ( event ) => {

      event.preventDefault();


      navigate(`?q=${ searchText }`)


    }


    return (
      <>
        <h1>Search</h1>
        <hr />

        <div className="row">
          
          <div className="col-5">

            <h4>Busqueda</h4>
            <hr />

            <form onSubmit={ onFormSubmit }>
              <input 
                type="text" 
                placeholder="Busca un heroe"
                name="searchText"
                className="form-control"
                autoComplete="off"
                value = { searchText }
                onChange = { onInputChange }
              />
            </form>

            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>

          </div>

          <div className="col-7">
              <h4>Resultados</h4>
              <hr />


              {
                ( q === "")
                ? (<div className="alert alert-primary">Busca un heroe</div>)
                : ( heroes.length === 0 ) && (<div className="alert alert-danger"> No hay resultados con <b>{ q }</b> </div>)
              }


              {
                heroes.map(
                  hero => <HeroCard { ...hero } key = { hero.id }/> 
                )
              }

          </div>
          
        </div>
      </>
    )
  }
