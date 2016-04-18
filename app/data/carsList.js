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
      description: "Volvo XC90 — это потрясающий автомобиль, который сочетает в себе мужественный внешний облик и утонченный интерьер. Оказавшись внутри, Вы оцените непревзойденное удобство и совершенство каждой детали. Например, эргономичные сиденья, идеально повторяющие форму человеческого тела, сделают каждую Вашу поездку максимально комфортной. Внимание к мелочам, стильный скандинавский дизайн и роскошная отделка, созданная руками наших лучших мастеров, — все это Вы найдете внутри ХС90.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 2,
      imageSrc: "http://assets.volvocars.com/ru/~/media/images/galleries/new-cars/s60/landing/s60rdesign_vcc07942.jpg?w=512",
      vendor: "Volvo",
      model: "S60",
      description: "S60 может похвастать тщательно продуманной подвеской, высокоточным рулевым управлением и лепестками переключения передач на рулевом колесе — для еще более быстрого и точного переключения передач.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 3,
      imageSrc: "http://carspravka.ru/images/auto/e841e640ac241d374eb38ff7ede006d9.jpg",
      vendor: "Volvo",
      model: "XC60",
      description: "XC60 готов к любым дорогам, к любой погоде. Полный привод, система помощи спуска с горы и система предотвращения скатывания при подъеме в нужный момент придут вам на помощь.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 4,
      imageSrc: "http://gredx.ru/wp-content/uploads/2013/10/Volvo-FH_RU.jpg",
      vendor: "Volvo",
      model: "FH",
      description: "Нам говорили, что менять выигрышную концепцию не лучшая идея. Тем не менее, мы это сделали. Позвольте представить вашему вниманию несколько новых функций, которые смогут улучшить комфорт и безопасность и сделают грузовик еще более практичным в различных областях применения и осуществлении грузоперевозок. ",
      favourite: false,
      selectCount: 0
    },
    {
      id: 5,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/57/Volvo_V40_2012_ID42221_280212.jpg",
      vendor: "Volvo",
      model: "V40",
      description: "Высокая подвеска, 19-дюймовые колеса, защитная отделка и просторные эргономичные передние сиденья делают V40 Cross Country идеальным выбором для длительных поездок по сложным дорогам.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 6,
      imageSrc: "http://carrrsmag.com/data_images/models/mitsubishi-lancer/mitsubishi-lancer-06.jpg",
      vendor: "Mitsubishi",
      model: "Lancer",
      description: "Mitsubishi Lancer (яп. 三菱・ランサー) — семейство автомобилей, выпускаемых Mitsubishi Motors с 1973 года. Mitsubishi с 1973 года. Также выпускались под названиями: Colt Lancer, Dodge/Plymouth Colt, Chrysler Valiant Lancer, Chrysler Lancer, Eagle Summit, Hindustan Lancer, Soueast Lioncel, Mitsubishi Carisma, Galant Fortis, и Mitsubishi Mirage в разных странах и в разное время. Кроме того, продавался как Lancer Fortis на Тайване с небольшими отличиями в экстерьере по сравнению с Galant Fortis. Название Lancer переводится как улан или копьеносец.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 7,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mitsubishi_Pajero_Exceed.jpg",
      vendor: "Mitsubishi",
      model: "Pajero",
      description: "Более 70 лет компания Mitsubishi посвятила тому, чтобы разрабатывать и внедрять самые передовые технологии в области полноприводных автомобилей. Первая модель – PX33 – вышла еще в 1934 году. С тех пор внедряемые нами технологии непрерывно развивались и совершенствовались. Сегодня самым впечатляющим их воплощением является известная каждому автолюбителю трансмиссия Super Select 4WD.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 8,
      imageSrc: "http://a2goos.com/data_images/models/mitsubishi-eclipse/mitsubishi-eclipse-05.jpg",
      vendor: "Mitsubishi",
      model: "Eclipse",
      description: "Mitsubishi Eclipse (рус. Мицубиси Эклипс) — четырёхместный (2+2) спортивный автомобиль с кузовом купе. Выпускается с 1989 года, только в леворульном варианте. Назван в честь английской скаковой лошади XVIII века, выигравшей 26 забегов. В США также продавался под именами Eagle Talon и Plymouth Laser.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 9,
      imageSrc: "http://mitsubishi-motors.ie/wp-content/uploads/2014/10/mitsubishi-outlander-business-white-2015-023-e1447835810320.jpg",
      vendor: "Mitsubishi",
      model: "Outlander",
      description: "Mitsubishi Outlander 2016 года - это первый серийный автомобиль Mitsubishi, в котором воплощена новая концепция дизайна бренда. Модель Outlander 2016 года является не просто обновленной версией модели текущего поколения. Она включает в себя невероятное количество конструктивных и дизайнерских усовершенствований, призванных повысить уровень утонченности и общего удовольствия от вождения.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 10,
      imageSrc: "http://dokonline.com/uploads/posts/2016-01/1452752156_1.jpg",
      vendor: "Mitsubishi",
      model: "L200",
      description: "Модель L200 пятого поколения разрабатывалась компанией MMC с нуля в течение 28 месяцев — это новейшая интерпретация концепции спортивных внедорожников, которая была впервые реализована в предыдущей версии L200 в 2005 г. В автомобилях нового поколения учтены потребности и отзывы владельцев пикапов со всего мира, что позволило обеспечить повышенный уровень комфорта, улучшенную управляемость, функциональность и долговечность.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 11,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-mustang/ford-mustang-06.jpg",
      vendor: "Ford",
      model: "Mustang",
      description: "Изначальный вариант 11233 (1964/65—1973 гг.) был создан на базе агрегатов семейного седана Ford Falcon (создатель Ли Якокка и его команда). Первый серийный Mustang сошёл с конвейера 9 марта 1964 года как модель 1965 года (в среде коллекционеров относительно Mustang выпуска до осени 1964 года употребляется неофициальное обозначение «модель 1964 1/2»). 17 апреля автомобиль был представлен публике в Нью-Йорке, а 19 апреля — показан по всем трём американским телевещательным сетям. Продвижение автомобиля сопровождалось активной рекламной кампанией. Это была одна из самых удачных премьер в истории автомобилестроения. Компания Ford за первые 36 месяцев продала 1.7 млн. Мустангов[источник не указан 360 дней].",
      favourite: false,
      selectCount: 0
    },
    {
      id: 12,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-focus/ford-focus-03.jpg",
      vendor: "Ford",
      model: "Focus",
      description: "Новый Focus обладает поистине стильным и выразительным дизайном. Скульптурные линии кузова в сочетании с узнаваемой новой решеткой Ford придают автомобилю вид настоящего хозяина дорог.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 13,
      imageSrc: "http://a2goos.com/data_images/models/ford-explorer/ford-explorer-02.jpg",
      vendor: "Ford",
      model: "Explorer",
      description: "Полноприводный легендарный внедорожник, известный во всем мире, осваивает Российские дороги. Обладая множеством электронных интеллектуальных систем, которые позволяют чувствовать себя за рулем Ford Explorer комфортно и уверенно, Вы поймете, что значит, удовольствие от вождения.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 14,
      imageSrc: "http://carrrsmag.com/data_images/models/ford-mondeo/ford-mondeo-01.jpg",
      vendor: "Ford",
      model: "Mondeo",
      description: "Стильный автомобиль бизнес-класса, динамичный и спортивный Mondeo демонстрирует свой совершенный облик с любой точки зрения. И снаружи, и внутри. Это – подлинный шедевр технической мысли, произведенный с безукоризненной аккуратностью и воплощенный выразительным языком «кинетического дизайна» Ford.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 15,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/53/2014_Ford_Transit_Custom_(VN)_290S_van_(2015-07-03)_01.jpg",
      vendor: "Ford",
      model: "Transit",
      description: "Чтобы бизнес был надежным, ему нужен надежный фундамент. Поэтому Вам стоит обратить внимание на модельный ряд грузовых шасси Ford Transit. Широкий выбор моделей позволит успешно вести дела в самых различных областях, а современный динамичный дизайн придаст активный ритм любому - даже самому тяжелому заданию.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 16,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-skyline/nissan-skyline-03.jpg",
      vendor: "Nissan",
      model: "Skyline",
      description: "Nissan Skyline — (В переводе Небесная Линия, Горизонт) автомобиль, выпускаемый в Японии с 1957 года, сначала фирмой Prince Motor, а затем концерном Nissan Motor, купившим Prince в 1966 году. К настоящему времени выпущено 13 поколений этого автомобиля. Нынешняя версия V36 также продается в Северной Америке, России, Южной Корее и Тайване под именем Infiniti G.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 17,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-qashqai/nissan-qashqai-08.jpg",
      vendor: "Nissan",
      model: "Qashqai",
      description: "NISSAN QASHQAI локального производства доступен в шести отлично сбалансированных комплектациях с разными вариантами двигателей, трансмиссий и приводом на переднюю ось или на все 4 колеса. Выберите сочетание, которое подходит именно вам!",
      favourite: false,
      selectCount: 0
    },
    {
      id: 18,
      imageSrc: "http://carrrsmag.com/data_images/models/nissan-juke/nissan-juke-03.jpg",
      vendor: "Nissan",
      model: "Juke",
      description: "Будь ярким, решай быстро, срывайся с места мгновенно - гласят правила городской жизни. Обновленный NISSAN JUKE предоставит для этого полный спектр возможностей.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 19,
      imageSrc: "http://s.auto.drom.ru/img4/catalog/photos/fullsize/nissan/teana/nissan_teana_36239.jpg",
      vendor: "Nissan",
      model: "Teana",
      description: "Впечатляющий уровень комфорта, безопасности и истинного удовольствия от вождения – все грани бесконечного прогресса теперь в Вашем Nissan TEANA.",
      favourite: false,
      selectCount: 0
    },
    {
      id: 20,
      imageSrc: "http://i.quto.ru/c533x400/5087c8de14b02.jpeg",
      vendor: "Nissan",
      model: "Almera",
      description: "Новый Ниссан Almera объединяет черты классического седана с элегантными стилистическими решениями. Выразительный дизайн хромированной решетки радиатора отлично сочетается с другими декоративными элементами кузова. Большая площадь остекления обеспечивает отличный обзор и придает внешнему облику Вашего седана дополнительную «легкость».",
      favourite: false,
      selectCount: 0
    }
  ];
}