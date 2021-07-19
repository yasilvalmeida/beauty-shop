const DescriptionCollapse = (product) => {
  const { elem } = product;
  return <>{elem?.description}</>;
};

export default DescriptionCollapse;