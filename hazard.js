let hazardWarningCreator = typeOfWarning => {
    let warningCounter = 0;
    let position= location=>{
      warningCounter++;
      console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
    return position;
  };
  const rocksWarning = hazardWarningCreator('Rocks on the Road');
  const floodWarning = hazardWarningCreator('Flooding in the area');
  const hailWarning = hazardWarningCreator('Crazy hail in your area, yo');
  rocksWarning();
  rocksWarning();
  rocksWarning();
  floodWarning();
  hailWarning();