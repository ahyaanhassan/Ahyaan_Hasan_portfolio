'use client'
import React, { useState } from 'react'
import { NewProjectCard } from './NewProjectCard';
import { cn } from '../utils/cn';

const projectsData = [
    {
      id: 1,
      title: "Movie Recommendation",
      description: "Project 1 description",
      image: "/images/projects/movie_r.png",
      tag: ["Python 3.x", "pandas", "numpy", "scikit-learn","Cosine_Similarity" ],
      gitUrl: "https://github.com/ahyaanhassan/movie_recommendation_system",
      previewUrl: "https://movierecommendationsystem-7gbeijadmaappvckr9uauf3.streamlit.app/",
    },
    {
      "id": 2,
  "title": "Customer Segmentation Using KMeans",
  "description": "A machine learning project that segments customers based on their purchasing behavior using KMeans clustering algorithm.",
  "image": "/images/projects/customer-segmentation.png",
  "tag": ["Python", "Scikit-learn", "KMeans", "Machine Learning", "Pandas", "Matplotlib", "Data Science"],
  "gitUrl": "https://github.com/ahyaanhassan/customer-segmentation-app",
  "previewUrl": "https://mainpy-hdak5lwwzwz4aaxq7nf4my.streamlit.app/",
    },
    
    // {
    //   id: 5,
    //   title: "React Firebase Template",
    //   description: "Authentication and CRUD operations",
    //   image: "/images/projects/5.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/projects/6.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
];

export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag: string) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-5">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}  
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}  
          />
        </div> */}
        <div className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
      )}>
            {/* {filteredProjects.map((project) => <ProjectCard key={project.id} id={project.id} title={project.title} imgUrl={project.image} description={project.description} />)} */}
            {projectsData.map((project) => <NewProjectCard key={project.id} project={project}/>)}
        </div>
    </section>
  )
}
