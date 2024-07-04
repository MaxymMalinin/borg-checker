const moneyVeoBorg = 4727.49;
const moneyVeoFee = 70.91;
const moneyVeoPercent = 2.5;

const limonBorg = 5016;
const limonFee = 50.16;
const limonPercent = 1.5;

const payDate = new Date('2024-06-20');

const countCurrentBorg = (borg, fee, percent, startDate) => {
  const millisecondsInOneDay = 24 * 60 * 60 * 1000;

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const daysDiff = (today - startDate) / millisecondsInOneDay;

  let currentBorg = borg;

  for (let i = 0; i < daysDiff; i++) {
    const currentPercentMoney = (currentBorg / 100) * percent;
    currentBorg += currentPercentMoney;
  }

  const currentBorgWithFee = currentBorg + fee;

  const currentBorgRounded = Math.ceil(currentBorgWithFee * 100) / 100;

  return currentBorgRounded;
};

const moneyVeoCurrentBorg = countCurrentBorg(
  moneyVeoBorg,
  moneyVeoFee,
  moneyVeoPercent,
  payDate
);
const limonCurrentBorg = countCurrentBorg(
  limonBorg,
  limonFee,
  limonPercent,
  payDate
);
const totalBorg = moneyVeoCurrentBorg + limonCurrentBorg;

const buttonMoneyVeo = document.getElementById('buttonMoneyVeo');
const buttonLimon = document.getElementById('buttonLimon');
const buttonTotal = document.getElementById('buttonTotal');
const bankDisplay = document.getElementById('bankDisplay');
const moneyResult = document.getElementById('moneyResult');

moneyResult.innerHTML = `${moneyVeoCurrentBorg} грн.`;

buttonMoneyVeo.addEventListener('click', () => {
  bankDisplay.innerHTML = `${buttonMoneyVeo.innerHTML}:`;
  moneyResult.innerHTML = `${moneyVeoCurrentBorg} грн.`;
});

buttonLimon.addEventListener('click', () => {
  bankDisplay.innerHTML = `${buttonLimon.innerHTML}:`;
  moneyResult.innerHTML = `${limonCurrentBorg} грн.`;
});

buttonTotal.addEventListener('click', () => {
  bankDisplay.innerHTML = `${buttonTotal.innerHTML}:`;
  moneyResult.innerHTML = `${totalBorg} грн.`;
});
