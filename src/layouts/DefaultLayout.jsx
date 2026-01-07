import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return (
        <>
        <Header 
            moviesList = {moviesList}
            setMoviesList = {setMoviesList}/>

        <main>
            <Outlet />
        </main>
        
        </>
    )
}