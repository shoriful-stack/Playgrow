const SectionHeadline = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-[45%] mt-16 mb-10">
      <h3 className="text-3xl uppercase tracking-widest mb-3">{heading}</h3>
      <p className="text-gray-500 mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionHeadline;
