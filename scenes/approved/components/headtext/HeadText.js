const HeadTextThree = ({ approved_by_us, approved_by_us_text, header }) => {
  return (
    <>
      <div className={"about-two-head-text"}>
        <p className={"text-one"}>{header}</p>
        <h2 className={"text-two-big"}>{approved_by_us}</h2>
        <div className={"about-circled"}>
          <img src="15-layers.png" alt="aprooved" />
        </div>
        <span className={"text-three-long"}>{approved_by_us_text}</span>
      </div>
    </>
  );
};

export default HeadTextThree;
