import { useState } from "react"
import { Link } from 'react-router-dom'


const Projects = () => {
    const projects = [
        {
            asset: 'assets/images/work/7.jpg',
            link: '/airpeace-ux-case-study',
            tag: 'UI Design | User Experience',
            projectName: 'Airpeace Airline app Hi',
            category: 'ui',
            popup: false
        },
        {
            asset: 'assets/images/work/1.jpg',
            link: '/health-pass-case-study',
            tag: 'Design | Branding',
            projectName: 'Creative Web Design',
            category: 'management',
            popup: false
        },
        {
            asset: 'assets/images/work/2.jpg',
            link: 'assets/images/work/2.jpg',
            tag: 'Product Design',
            projectName: 'HERS',
            category: 'ui',
            popup: true
        },
        {
            asset: 'assets/images/work/9.jpg',
            link: 'assets/images/work/9.jpg',
            tag: 'Design | Branding',
            projectName: 'Health Pass',
            category: 'ui',
            popup: true
        },
        {
            asset: 'assets/images/work/5.jpg',
            link: 'assets/images/work/5.jpg',
            tag: 'Design | Branding',
            projectName: 'Health Pass',
            category: 'management',
            popup: true
        },
        {
            asset: 'assets/images/work/3.jpg',
            link: 'assets/images/work/3.jpg',
            tag: 'Design | Branding',
            projectName: 'Creative Web Design',
            category: 'ui',
            popup: true
        },
        {
            asset: 'assets/images/work/4.jpg',
            link: 'assets/images/work/4.jpg',
            tag: 'Design | Branding',
            projectName: 'Creative Web Design',
            category: 'visual',
            popup: true
        },
        {
            asset: 'assets/images/work/6.jpg',
            link: 'assets/images/work/6.jpg',
            tag: 'Design | Branding',
            projectName: 'Creative Web Design',
            category: 'visual',
            popup: true
        },
        {
            asset: 'assets/images/work/8.jpg',
            link: 'assets/images/work/8.jpg',
            tag: 'Design | Branding',
            projectName: 'Creative Web Design',
            category: 'management',
            popup: true
        },
    ]
    const [allProjects, setAllProjects] = useState(projects)
    const filter = (category) => {
        const updateProjects = projects.filter((project) => {
            return project.category === category
        })
        setAllProjects(updateProjects)
    }
    return (
        <div className="project-gallery" id="project-gallery">
            <img className="shape" src="assets/images/shape1.png" alt="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title extra">
                            <h2 className="title">Select Work </h2>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-gallery-filter d-flex justify-content-center">
                            <ul className="project-gallery-menu d-inline-block">
                                <li className="filter active" onClick={() => setAllProjects(projects)} data-filter="all">All Work</li>
                                <li className="filter" onClick={() => filter('ui')}> UX Case studies</li>
                                <li className="filter" onClick={() => filter('visual')}>Visual/UI</li>
                                <li className="filter" onClick={() => filter('management')}>Management System</li>
                            </ul>
                        </div>

                        <div className="row project-gallery-item">
                            {allProjects.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-6 gallery-item">
                                    <div className="gallery-item-content">
                                        <div className="item-thumbnail">
                                            <img src={item.asset} alt="" />
                                            <div className="content-overlay">
                                                <div className="content">
                                                    <div className="links">
                                                        {item.popup ? (<a className="img-popup image-preview" href={item.link}>
                                                            <i className="fas fa-long-arrow-alt-right"></i>
                                                        </a>) : (
                                                            <Link to={item.link}>
                                                                <i className="fas fa-long-arrow-alt-right"></i>
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <div className="info">
                                                        <p className="tag">{item.tag}</p>
                                                        <h4 className="project-name">{item.projectName}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects