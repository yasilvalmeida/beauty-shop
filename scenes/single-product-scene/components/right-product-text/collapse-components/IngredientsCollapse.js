const IngredientsCollapse = (product) => {
  const { elem } = product;
  return <>{elem?.technicalData}</>;
};

export default IngredientsCollapse;