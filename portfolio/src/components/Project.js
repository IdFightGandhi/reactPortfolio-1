import React, { useEffect, useState } from 'react';

import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            project,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
        
    },[]);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">
                    Welcome to My Projects Page!
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && 
                    projectData.map((project, index) => (

                    
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                           
                        </h3>
                        <div className="text-grey-500 text-xs space-x-4">
                           
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span></span>
                           
                            <p className="my-6 text-lg text-grey-700 leading-relaxed">
                                {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400"
                                >
                                    View The Project{" "}
                            <span role="img" aria-label="right-pointer">
                                ????
                                </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}