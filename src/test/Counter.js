const elementToCount = [];
const counter = () => {
  const number = elementToCount.length;
  return number;
};
counter(elementToCount);

const Data = [{ name: 'The 100', year: 2013, id: 1 }, { name: 'Person of Interest', year: 2015, id: 2 }];
const countNumber = () => Data.length;
countNumber(Data);

module.exports = counter;
module.exports = countNumber;