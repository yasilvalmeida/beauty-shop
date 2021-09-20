import VideoScene from "../scenes/video";

const Video = () => {
  return (
    <>
      <VideoScene />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Video;
