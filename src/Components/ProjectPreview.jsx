
export default function ProjectPreview({ title, description, imageUrl, projectUrl }) {
    return (
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full" />
        <div className="p-5">
          <h5 className="text-lg font-semibold">{title}</h5>
          <p className="text-sm">{description}</p>
          <a href={projectUrl} className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded">Visit Project</a>
        </div>
      </div>
    );
  }
  