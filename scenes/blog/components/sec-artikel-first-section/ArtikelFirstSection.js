import ArtikelFirstSection from "../../../../shareable/artikel-first-section/ArtikelFirstSection";
import { useSelector } from "react-redux";

const SecondArtikelFirstSection = () => {
  const { magazineSingleBlogData } = useSelector((state) => state.magazine);
  const { resume, author, magazine_category, date } =
    magazineSingleBlogData || {};
  const { name } = magazine_category || {};
  return (
    <ArtikelFirstSection
      resume={resume}
      author={author}
      category={name}
      date={date}
    />
  );
};

export default SecondArtikelFirstSection;
