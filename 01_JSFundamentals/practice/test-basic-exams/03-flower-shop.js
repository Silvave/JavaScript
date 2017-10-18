
function solution(arr) {
    let [chrysanthemums, roses, tulips] = arr.slice(0,3).map(Number);
    let [season, isHoliday] = arr.slice(3);

    let priceChrys;
    let priceRoses;
    let priceTulips;
    if (season === "Summer" || season === "Spring")
    {
        priceChrys = 2;
        priceRoses = 4.10;
        priceTulips = 2.50;
    }
    else
    {
        priceChrys = 3.75;
        priceRoses = 4.50;
        priceTulips = 4.15;
    }

    if (isHoliday === "Y")
    {
        priceChrys *= 1.15;
        priceRoses *= 1.15;
        priceTulips *= 1.15;
    }

    let totalPriceFlowers = (chrysanthemums*priceChrys) + (roses*priceRoses) + (tulips*priceTulips);

    if (tulips > 7 && season === "Spring")
    {
        totalPriceFlowers *= 0.95;
    }
    else if (roses >= 10 && season === "Winter")
    {
        totalPriceFlowers *= 0.90;
    }

    if (chrysanthemums+roses+tulips > 20)
    {
        totalPriceFlowers *= 0.80;
    }

    console.log(`${(totalPriceFlowers+2).toFixed(2)}`);
}

solution([
    2,
    4,
    8,
    "Spring",
    "Y"
]);

solution([
    3,
    10,
    9,
    "Winter",
    "N"
]);

solution([
    10,
    10,
    10,
    "Autumn",
    "N"
]);