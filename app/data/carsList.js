module.exports =
  {
    getCarListPromise: getCarListPromise,
    getFavCarListPromise: getFavCarListPromise,
    updateCar: updateCar
  }

var initialCars = [
  {
    id: 1,
    imageSrc: "http://carrrsmag.com/data_images/models/volvo-xc90/volvo-xc90-08.jpg",
    vendor: "Volvo",
    model: "XC90",
    description: "XC90",
    favourite: true
  },
  {
    id: 2,
    imageSrc: "http://assets.volvocars.com/ru/~/media/images/galleries/new-cars/s60/landing/s60rdesign_vcc07942.jpg?w=512",
    vendor: "Volvo",
    model: "XC90",
    description: "S60",
    favourite: false
  },
  {
    id: 3,
    imageSrc: "http://carrrsmag.com/data_images/models/mitsubishi-lancer/mitsubishi-lancer-06.jpg",
    vendor: "Mitsubishi",
    model: "Lancer",
    description: "Lancer",
    favourite: false
  }
];

var itemsInStorage = localStorage.getItem('cars');
if (!itemsInStorage) {
  saveCars(initialCars);
}


function getCars() {
  try {
    return JSON.parse(localStorage.getItem('cars'));
  } catch (err) {
    return [];
  }
}

function saveCars(cars) {
  localStorage.setItem('cars', JSON.stringify(cars));
}

function getCarListPromise(carVendor) {
  return new Promise(function (resolve, reject) {

    var result = getCars();

    if (!!carVendor) {
      result = result.filter(function (car) {
        return car.vendor.toLowerCase() === carVendor.toLowerCase();
      });
    }

    resolve(result)
  })
}

function getFavCarListPromise() {
  return new Promise(function (resolve, reject) {
    resolve(getCars().filter(function (car) {
      return car.favourite;
    }));
  });
}

function updateCar(car) {
  var cars = getCars();
  cars.forEach(function (storedCar) {
    if (car.id === storedCar.id) {
      $.extend(storedCar, car);
    }
  });
  saveCars(cars);
}