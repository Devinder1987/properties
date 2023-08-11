const lakhCRconversion = (cost) => {
  if (cost > 100) {
    return (cost / 100).toFixed(2) + ' Cr';
  }
  return cost + ' lakh';
};

export default lakhCRconversion;
