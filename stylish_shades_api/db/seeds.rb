sunglasses = [
  ["B1000", 200, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_PNG154.png", 20],
  ["A5000", 270, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5000.png", 20],
  ["A5100", 180, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5100.png", 20],
  ["A5200", 150, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5200.png", 20],
  ["A5300", 140, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5300.png", 20],
  ["A5400", 390, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5400.png", 20],
  ["A5500", 450, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5500.png", 20],
  ["A5600", 520, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5600.png", 20],
  ["A5700", 240, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5700.png", 20],
  ["A5800", 330, 1, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_A5800.png", 20],
  ["B1100", 100, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1100.png", 20],
  ["B1200", 150, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1200.png", 20],
  ["B1300", 470, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1300.png", 20],
  ["B1500", 200, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1500.png", 20],
  ["B1600", 110, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1600.png", 20],
  ["B1700", 310, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1700.png", 20],
  ["B1800", 160, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1800.png", 20],
  ["B1900", 220, 2, "https://sunglassesforjsproject.s3.us-east-2.amazonaws.com/sunglasses_B1900.png", 20]
]

sunglasses.each do |model, price, category_id, image, stock_quantity|
  Sunglass.create(model: model, price: price, category_id: category_id, image: image, stock_quantity: stock_quantity)
end