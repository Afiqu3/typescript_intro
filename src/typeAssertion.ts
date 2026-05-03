let anything: any;

anything = 'afique';

// (anything as string)

const MeterToCentimeterConverter = (input: string | number) => {
  if (typeof input === 'number') {
    return input * 100;
  } else if (typeof input === 'string') {
    const [value] = input.split(' ');
    return `Converted output is: ${Number(value) * 100}`;
  }
};

const ans1 = MeterToCentimeterConverter(2) as number;
console.log(ans1.toFixed(2));

const ans2 = MeterToCentimeterConverter('2 m') as string;
console.log(ans2);

type customError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as customError).message);
}
