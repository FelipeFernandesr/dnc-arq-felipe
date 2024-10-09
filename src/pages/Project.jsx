import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ProjectsList from "../components/ProjectsList/ProjectsList"

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function Project() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.svg"/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Project