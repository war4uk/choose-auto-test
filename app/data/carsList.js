module.exports =
  {
    getCarListPromise: getCarListPromise,
    getFavCarListPromise: getFavCarListPromise,
    getVendorStatsPromise: getVendorStatsPromise,
    updateCar: updateCar
  }

var itemsInStorage = localStorage.getItem('cars');
if (!itemsInStorage) {
  saveCars(getInitialCarData());
}

function getVendorStatsPromise() {
  return new Promise(function (resolve, reject) {
    var vendorStats = getCars().reduce(function (prevValue, car) {
      prevValue[car.vendor] = (prevValue[car.vendor] || 0) + car.selectCount;
      return prevValue;
    }, {});

    resolve(vendorStats);
  });


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

function getInitialCarData() {
  return [
    {
      id: 1,
      imageSrc: "http://carrrsmag.com/data_images/models/volvo-xc90/volvo-xc90-08.jpg",
      vendor: "Volvo",
      model: "XC90",
      description: "XC90",
      favourite: false,
      selectCount: 0
    },
    {
      id: 2,
      imageSrc: "http://assets.volvocars.com/ru/~/media/images/galleries/new-cars/s60/landing/s60rdesign_vcc07942.jpg?w=512",
      vendor: "Volvo",
      model: "XC90",
      description: "XC90",
      favourite: false,
      selectCount: 0
    },
    {
      id: 3,
      imageSrc: "http://carspravka.ru/images/auto/e841e640ac241d374eb38ff7ede006d9.jpg",
      vendor: "Volvo",
      model: "XC60",
      description: "XC60",
      favourite: false,
      selectCount: 0
    },
    {
      id: 4,
      imageSrc: "http://gredx.ru/wp-content/uploads/2013/10/Volvo-FH_RU.jpg",
      vendor: "Volvo",
      model: "FH",
      description: "FH",
      favourite: false,
      selectCount: 0
    },
    {
      id: 5,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/57/Volvo_V40_2012_ID42221_280212.jpg",
      vendor: "Volvo",
      model: "V40",
      description: "V40",
      favourite: false,
      selectCount: 0
    },
    {
      id: 6,
      imageSrc: "http://carrrsmag.com/data_images/models/mitsubishi-lancer/mitsubishi-lancer-06.jpg",
      vendor: "Mitsubishi",
      model: "Lancer",
      description: "Lancer",
      favourite: false,
      selectCount: 0
    },
    {
      id: 7,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mitsubishi_Pajero_Exceed.jpg",
      vendor: "Mitsubishi",
      model: "Pajero",
      description: "Pajero",
      favourite: false,
      selectCount: 0
    },
    {
      id: 8,
      imageSrc: "http://a2goos.com/data_images/models/mitsubishi-eclipse/mitsubishi-eclipse-05.jpg",
      vendor: "Mitsubishi",
      model: "Eclipse",
      description: "Eclipse",
      favourite: false,
      selectCount: 0
    },
    {
      id: 9,
      imageSrc: "http://mitsubishi-motors.ie/wp-content/uploads/2014/10/mitsubishi-outlander-business-white-2015-023-e1447835810320.jpg",
      vendor: "Mitsubishi",
      model: "Outlander",
      description: "Outlander",
      favourite: false,
      selectCount: 0
    },
    {
      id: 10,
      imageSrc: "http://dokonline.com/uploads/posts/2016-01/1452752156_1.jpg",
      vendor: "Mitsubishi",
      model: "L200",
      description: "L200",
      favourite: false,
      selectCount: 0
    },
    {
      id: 11,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-mustang/ford-mustang-06.jpg",
      vendor: "Ford",
      model: "Mustang",
      description: "Mustang",
      favourite: false,
      selectCount: 0
    },
    {
      id: 12,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-focus/ford-focus-03.jpg",
      vendor: "Ford",
      model: "Focus",
      description: "Focus",
      favourite: false,
      selectCount: 0
    },
    {
      id: 13,
      imageSrc: "http://a2goos.com/data_images/models/ford-explorer/ford-explorer-02.jpg",
      vendor: "Ford",
      model: "Explorer",
      description: "Explorer",
      favourite: false,
      selectCount: 0
    },
    {
      id: 14,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-mondeo/ford-mondeo-01.jpg",
      vendor: "Ford",
      model: "Mondeo",
      description: "Mondeo",
      favourite: false,
      selectCount: 0
    },
    {
      id: 15,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/53/2014_Ford_Transit_Custom_(VN)_290S_van_(2015-07-03)_01.jpg",
      vendor: "Ford",
      model: "Transit",
      description: "Transit",
      favourite: false,
      selectCount: 0
    },
    {
      id: 16,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-skyline/nissan-skyline-03.jpg",
      vendor: "Nissan",
      model: "Skyline",
      description: "Skyline",
      favourite: false,
      selectCount: 0
    },
    {
      id: 17,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-qashqai/nissan-qashqai-08.jpg",
      vendor: "Nissan",
      model: "Qashqai",
      description: "Qashqai",
      favourite: false,
      selectCount: 0
    },
    {
      id: 18,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-juke/nissan-juke-03.jpg",
      vendor: "Nissan",
      model: "Juke",
      description: "Juke",
      favourite: false,
      selectCount: 0
    },
    {
      id: 19,
      imageSrc: "http://s.auto.drom.ru/img4/catalog/photos/fullsize/nissan/teana/nissan_teana_36239.jpg",
      vendor: "Nissan",
      model: "Teana",
      description: "Teana",
      favourite: false,
      selectCount: 0
    },
    {
      id: 20,
      imageSrc: "http://i.quto.ru/c533x400/5087c8de14b02.jpeg",
      vendor: "Nissan",
      model: "Almera",
      description: "Almera",
      favourite: false,
      selectCount: 0
    }
  ];
}