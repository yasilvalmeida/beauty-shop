import ArtikelFirstSection from "../../../../shareable/artikel-first-section/ArtikelFirstSection";
import { useSelector } from "react-redux";

const ArtikelFirstSectionBody = () => {
  const { magazineSingleArticleData } = useSelector((state) => state.magazine);
  const { resume, author, magazine_category, date } = magazineSingleArticleData || {};
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

export default ArtikelFirstSectionBody;
