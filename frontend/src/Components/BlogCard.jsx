const BlogCard = ({ blog }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="hover:scale-105 transition-all duration-700">
        <div className="absolute top-4 left-4 bg-white px-4 py-1 shadow-sm rounded-md text-center cursor-pointer">
          <p className="text-2xl text-primary">
            {new Date(blog.date).toLocaleString("en-US", { day: "numeric" })}
          </p>
          <p className="text-sm text-gray-900 uppercase">
            {new Date(blog.date).toLocaleString("en-US", { month: "long" })}
          </p>
        </div>
        <img
          alt={blog.title}
          src={blog.image}
          className="h-64 w-full object-cover lg:h-72 cursor-pointer"
        />
      </div>

      <h3 className="mt-4 lg:text-2xl text-gray-900 text-xl cursor-pointer">
        {blog.title}
      </h3>

      <p className="mt-2 max-w-sm text-gray-500">{blog.description}</p>
      <button className="flex flex-col uppercase text-primary font-medium tracking-widest text-sm mt-4">
        Read More
        <span className="font-bold text-xl -mt-3">. . . . . . .</span>
      </button>
    </div>
  );
};

export default BlogCard;
