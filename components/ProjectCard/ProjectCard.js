import Link from 'next/link';

const ProjectCard = ({ project }) => (
  <Link href={`/projects/${project.slug}`}>
    <div className="flex px-4 py-4 rounded border-gray-200 border shadow transition-all hover:shadow-md">
      <p>{project.name}</p>
    </div>
  </Link>
);

export default ProjectCard;
