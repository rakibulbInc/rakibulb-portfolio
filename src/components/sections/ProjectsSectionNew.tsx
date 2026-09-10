"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/Projects";
import ProjectCard from "@/components/ProjectCard";
import SearchInput from "@/components/SearchInput";

const ProjectsSectionNew = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="w-full max-w-xl xl:max-w-5xl mx-auto h-full flex flex-col py-4">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search projects by name, description, or technology..."
        />
      </div>

      {/* Projects List */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {filteredProjects.length > 0 ? (
          <div
            data-testid="projects-grid"
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white/40 py-8">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSectionNew;
