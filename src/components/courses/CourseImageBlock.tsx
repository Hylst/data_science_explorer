
import { cn } from "@/lib/utils";

interface CourseImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const CourseImageBlock = ({
  src,
  alt,
  caption,
  className
}: CourseImageBlockProps) => {
  return (
    <figure className={cn("my-6", className)}>
      <div className="overflow-hidden rounded-md border border-gray-200">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-center text-gray-500 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default CourseImageBlock;
