import React from "react";
import SectionHeadline from "../../Components/SectionHeadLine";
import useEntity from "../../Hooks/useEntity";
import BlogCard from "../../Components/BlogCard";

const Blog = () => {
  const [blogs] = useEntity("/blogs");

  if (!blogs.length) return <p>No blogs found</p>;
  return (
    <div>
      <SectionHeadline
        heading={"READ OUR BLOG"}
        subHeading={
          "Dignissim enim sit amet venenatis urna convallis ae nean et tortor etiam non qu."
        }
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-2 mb-12">
        {blogs?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
