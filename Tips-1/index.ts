export const fruitCount = {
    apple: 1,
    pear: 4,
    banana: 26,
  }
  
  type SingleFruitCount =
    | {
        apple: number
      }
    | {
        banana: number
      }
    | {
        pear: number
      };

      type FruitCounts = typeof fruitCount

      type NewSingleFruitCount = {
        [K in keyof FruitCounts]: {
            [K2 in K]: number
        }
      }[keyof FruitCounts]
  
  const singleFruitCount: NewSingleFruitCount = {
    banana: 12,
  }