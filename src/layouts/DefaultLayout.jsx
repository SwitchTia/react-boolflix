import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function DefaultLayout({setMoviesList}) {

    return (
        <>
        <Header 
           
            setMoviesList = {setMoviesList}/>

        <main>
            <Outlet />
        </main>
        
        </>
    )
}