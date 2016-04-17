module.exports = function (carModel) {
  console.log(carModel);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {

      var cars = [
        {
          imageSrc: "http://carrrsmag.com/data_images/models/volvo-xc90/volvo-xc90-08.jpg",
          model: "Volvo",
          description: "XC90",
        },
        {
          imageSrc: "http://assets.volvocars.com/ru/~/media/images/galleries/new-cars/s60/landing/s60rdesign_vcc07942.jpg?w=512",
          model: "Volvo",
          description: "S60"
        },
        {
          imageSrc: "http://carrrsmag.com/data_images/models/mitsubishi-lancer/mitsubishi-lancer-06.jpg",
          model: "Mitsubishi",
          description: "Lancer"
        }
      ];

      if (!!carModel) {
        cars = cars.filter(function (car) {
          return car.model === carModel;
        });
      }

      resolve(cars)
    }, 2000);
  })
} 