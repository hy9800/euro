import HeadingStyler from "./utils/heading-styler";
import SocialShareButtons from "./social-share-buttons";

interface CourseContentProps {
  course: CourseDetail;
}

export default function CourseContent({ course }: CourseContentProps) {
  const courseTitle = encodeURIComponent(course.title || "Check this course");
  const courseUrl = `/training-course/${course.slug}`;

  return (
    <article 
      className="overview-section" 
      id="overview-section"
      itemScope 
      itemType="https://schema.org/Article"
    >
      <div className="overview-content flex flex-col pt-[70px] text-[#6f6f6f]">
        <h2 
          className="text-[#3E5EC0] text-[32px] font-bold"
          itemProp="headline"
        >
          {course.title}
        </h2>

        <div 
          className="overview-text leading-[1.8] text-[#333] text-base max-w-none"
          itemProp="articleBody"
        >
          {course.content && (
            <div dangerouslySetInnerHTML={{ __html: course.content }} />
          )}
          <HeadingStyler content={course.content || ""} />
        </div>
      </div>

      {/* Social Share Section */}
      <aside 
        className="social-share-section my-10 p-4 bg-gradient-to-br from-[#f8faff] to-[#f0f4ff] rounded-lg text-center"
        role="complementary"
        aria-label="Share this training course"
      >
        <h3 className="share-title text-lg font-semibold text-[#2d3748] mb-[15px] text-center">
          Share this course
        </h3>
        <SocialShareButtons
          courseUrl={courseUrl}
          courseTitle={courseTitle}
          courseDescription={course.meta_description || ""}
        />
      </aside>
    </article>
  );
}
