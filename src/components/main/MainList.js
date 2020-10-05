import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "./MainProvider"
import { Main} from "./Main"
import { PhotoContext } from "../photos/PhotoProvider";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { MainSearch } from "./MainSearch";

// import "./Mains.css"

export const MainList = (props) => {

    const { mains, getMain, searchTerms } = useContext(MainContext)
    const { photos, getPhotos } = useContext(PhotoContext)
    const [ userMains, setUserMains ] = useState([])


    useEffect(() => {
        getMain()
        getPhotos()
    }, [])

    useEffect(() => {
        const matchingNames = mains.filter(main => main.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setUserMains(matchingNames)
    }, [searchTerms])

    useEffect(() => {
        const filter = mains.filter(m => m.userId === parseInt(localStorage.getItem("users")))
        setUserMains(filter)
    }, [mains])

    const deleteItems = () => {
        localStorage.clear()
    }
    
    return (
        <>
            <section className="header-btn">
                <div className="cursive">VacaPlus</div>
                <img src={require('../images/beach.png')} style={{width: '120px', height: '120px'}} />
                <h1 className="title">VacaPlus<img src={require('../images/picture.png')} style={{width: '62px', height: '62px'}} /></h1>
                <Link onClick={deleteItems} className="moveBtn navbar__link" ><Button variant="info">Logout</Button>{' '}</Link>
                </section>
            <div className="mainBtnTop">
            <button class="mainBtn" onClick={() => props.history.push("/projects/create")}>
                Add Card
            </button>
            </div>
            <MainSearch />
        <div className="main">
            <article className="mainList">
    {userMains.map(main => <Main key={main.id} main={main}{...props}/>)
    }
            </article>
        </div>
        </>
    )
}



