const questions = [
    {
        questionText: 'Как зовут кошку, известную своим хрустящим обедом в вирусных видео?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Dramatic kitten', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Какой кот стал символом беспомощности и отчаяния в вирусных видео?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Dramatic kitten', isCorrect: true },
            { answerText: 'Banana cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут кота, который удивленно спрашивает "А?" ?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Бинетто', isCorrect: false },
            { answerText: 'Dramatic kitten', isCorrect: false },
            { answerText: 'Бендер', isCorrect: true },
        ],
    },
    {
        questionText: 'Какой кот становится символом радости и хорошего настроения в вирусных видео?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Dramatic kitten', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: true },
        ],
    },
    {
        questionText: 'Какой кот изображен в костюме банана и становится символом грусти в вирусных видео?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Грустный кот-банан', isCorrect: true },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Какой кот запечатлен стучащим пустой миской по полу в ожидании еды?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Голодный кот', isCorrect: true },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Какой кот становится символом раздражения и желания "постучать по кому-то"?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Дерущийся кот', isCorrect: true },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Какой кот ритмично качает головой в такт музыке и становится символом хорошего настроения?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Vibing Cat', isCorrect: true },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Какой кот издает звук "Буп"?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Pop Cat', isCorrect: true },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как называется кошка, которая танцует под песню "Girlfriend" Аврил Лавин?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: true },
            { answerText: 'Dramatic kitten', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут серого котенка, который держится лапами за голову и истошно кричит?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Dramatic kitten', isCorrect: true },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут черно-белого кота, который кивает головой с непониманием?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Бендер', isCorrect: true },
        ],
    },
    {
        questionText: 'Как зовут белого кота, который ритмично качает головой в такт музыке?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Vibing Cat', isCorrect: true },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут бело-рыжего кота, который стучит миской по полу в ожидании еды?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Голодный кот', isCorrect: true },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут кошку, которая издает звук "Буп" с открытым ртом?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Pop Cat', isCorrect: true },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут кота в костюме банана?',
        answerOptions: [
            { answerText: 'Crunchy cat', isCorrect: false },
            { answerText: 'Грустный кот-банан', isCorrect: true },
            { answerText: 'Дерущийся кот', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут рыжего кота, который бьет лапой другого кота на диване?',
        answerOptions: [
            { answerText: 'Дерущийся кот', isCorrect: true },
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Грустный кот-банан', isCorrect: false },
            { answerText: 'Happy happy happy cat', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут черно-белого кота, который иллюстрирует нетерпение или ожидание чего-то?',
        answerOptions: [
            { answerText: 'Dancing Cat', isCorrect: false },
            { answerText: 'Pop Cat', isCorrect: false },
            { answerText: 'Vibing Cat', isCorrect: false },
            { answerText: 'Huh?', isCorrect: true },
        ],
    },
    {
        questionText: 'Какого цвета кот, рассеяно смотрящий на другого кота во время диалога?',
        answerOptions: [
            { answerText: 'Белый', isCorrect: false },
            { answerText: 'Черный', isCorrect: true },
            { answerText: 'Серый', isCorrect: false },
            { answerText: 'Бело-серый', isCorrect: false },
        ],
    },
    {
        questionText: 'Какого цвета кот, сидящий на водительском кресле автомобиля за рулем?',
        answerOptions: [
            { answerText: 'Черный', isCorrect: false },
            { answerText: 'Бело-серый', isCorrect: false },
            { answerText: 'Белый', isCorrect: true },
            { answerText: 'Черно-белый', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут черно-белого кота, который крутится вокруг своей оси или танцует под мелодию "The Funky Russian Train"?',
        answerOptions: [
            { answerText: 'Кот Максим', isCorrect: false },
            { answerText: 'Кот вне зоны доступа', isCorrect: false },
            { answerText: 'Кот Макс', isCorrect: false },
            { answerText: 'Кот Максвелл', isCorrect: true },
        ],
    },
    {
        questionText: 'Что делает черный кот в меме с пилочкой для ногтей?',
        answerOptions: [
            { answerText: 'Смотрит в окно', isCorrect: false },
            { answerText: 'Играет в мяч', isCorrect: false },
            { answerText: 'Подпиливает ногти', isCorrect: true },
            { answerText: 'Лежит на диване', isCorrect: false },
        ],
    },
    {
        questionText: 'Когда завирусилась публикация с черным котом, который подпиливает ногти?',
        answerOptions: [
            { answerText: '2015 год', isCorrect: true },
            { answerText: '2017 год', isCorrect: false },
            { answerText: '2020 год', isCorrect: false },
            { answerText: '2023 год', isCorrect: false },
        ],
    },
    {
        questionText: 'Какое чувство помогает выразить мем с черным котом, подпиливающим ногти?',
        answerOptions: [
            { answerText: 'Разбитие вазы', isCorrect: false },
            { answerText: 'Убийство мыши', isCorrect: false },
            { answerText: 'Выражение превосходства и уверенности', isCorrect: true },
            { answerText: 'Приготовление пиццы', isCorrect: false },
        ],
    },
    {
        questionText: 'Что делает черный кот, рассеяно смотрящий на другого кота во время диалога?',
        answerOptions: [
            { answerText: 'Бегает в колесе', isCorrect: false },
            { answerText: 'Витает в своих мыслях', isCorrect: true },
            { answerText: 'Играет с игрушкой', isCorrect: false },
            { answerText: 'Лежит на диване', isCorrect: false },
        ],
    },
    {
        questionText: 'Как называется черно-белый кот, крутящийся вокруг своей оси?',
        answerOptions: [
            { answerText: 'Кот Макс', isCorrect: false },
            { answerText: 'Кот Максвелл', isCorrect: true },
            { answerText: 'Кот вне зоны доступа', isCorrect: false },
            { answerText: 'Кот Луи', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут кота, подпиливающего ногти?',
        answerOptions: [
            { answerText: 'Кот Макс', isCorrect: false },
            { answerText: 'Кот вне зоны доступа', isCorrect: false },
            { answerText: 'Кот Салем', isCorrect: true },
            { answerText: 'Кот Луи', isCorrect: false },
        ],
    },
    {
        questionText: 'Как зовут кота управляющео машиной??',
        answerOptions: [
            { answerText: 'Кот Макс', isCorrect: false },
            { answerText: 'Кот вне зоны доступа', isCorrect: false },
            { answerText: 'Кот Луи', isCorrect: true },
            { answerText: 'Кот Максвелл', isCorrect: false },
        ],
    },
    {
        questionText: 'Какое животное чаще всего сопровождает кота Максвелла в меме?',
        answerOptions: [
            { answerText: 'Собака', isCorrect: false },
            { answerText: 'Капибара', isCorrect: true },
            { answerText: 'Попугай', isCorrect: false },
            { answerText: 'Енот', isCorrect: false },
        ],
    },
    {
        questionText: "Какое приложение послужило продвижением бродячего кота в меме 'Мистер Фреш'?",
        answerOptions: [
            { answerText: "TikTok", isCorrect: false },
            { answerText: "Hello Street Cat", isCorrect: true },
            { answerText: "Douyin", isCorrect: false },
            { answerText: "Garry’s Mod", isCorrect: false },
        ],
    },
    {
        questionText: "Как зовут серую кошку с сердитым выражением морды в меме 'Сердитый кот'?",
        answerOptions: [
            { answerText: "Барсик", isCorrect: false },
            { answerText: "Барбара", isCorrect: true },
            { answerText: "Мурзик", isCorrect: false },
            { answerText: "Мурка", isCorrect: false }
        ]
    },
    {
        questionText: "Какие два цвета имеют коты, которые эмоционально спорят друг с другом в меме 'Спорящие коты'?",
        answerOptions: [
            { answerText: "Белый и черный", isCorrect: false },
            { answerText: "Рыжий и серый", isCorrect: true },
            { answerText: "Коричневый и белый", isCorrect: false },
            { answerText: "Серый и белый", isCorrect: false }
        ]
    },
    {
        questionText: "Какой цвет имеет кот, который борется со рвотными позывами в меме 'Тошнящий кот'?",
        answerOptions: [
            { answerText: "Черный", isCorrect: false },
            { answerText: "Белый", isCorrect: true },
            { answerText: "Серый", isCorrect: false },
            { answerText: "Рыжий", isCorrect: false }
        ]
    },
    {
        questionText: "Как зовут темно-серого кота, который лежит на спине с высунутым языком и закрывающимися глазами в меме 'Уставший кот'?",
        answerOptions: [
            { answerText: "Мурзик", isCorrect: false },
            { answerText: "Соня", isCorrect: false },
            { answerText: "Club cat", isCorrect: false },
            { answerText: "Sleep cat", isCorrect: true }
        ]
    },
    {
        questionText: "Какой цвет имеет кот в меме 'Мокрый кот'?",
        answerOptions: [
            { answerText: "Черный", isCorrect: false },
            { answerText: "Серый", isCorrect: true },
            { answerText: "Белый", isCorrect: false },
            { answerText: "Коричневый", isCorrect: false }
        ]
    },
    {
        questionText: "Какой аппетит у кота в меме 'Мистер Фреш'?",
        answerOptions: [
            { answerText: "Он ест все подряд", isCorrect: false },
            { answerText: "Он ест только свежую еду", isCorrect: true },
            { answerText: "Он ничего не ест", isCorrect: false },
            { answerText: "Он ест только консервы", isCorrect: false }
        ]
    },
    {
        questionText: "Какой танец выполняет кот в меме '***-кот'?",
        answerOptions: [
            { answerText: "Вальс", isCorrect: false },
            { answerText: "Фламенко", isCorrect: false },
            { answerText: "Тектоник", isCorrect: true },
            { answerText: "Брейк-данс", isCorrect: false }
        ]
    },
    {
        questionText: "В каком приложении происходит трансляция из будок с кормом для бродячих котов в меме 'Мистер Фреш'?",
        answerOptions: [
            { answerText: "YouTube", isCorrect: false },
            { answerText: "Facebook", isCorrect: false },
            { answerText: "Hello Street Cat", isCorrect: true },
            { answerText: "Instagram", isCorrect: false }
        ]
    },
    {
        questionText: "Как называется местный блогер, который стал причиной популярности танца 'Кемусан' в Китае?",
        answerOptions: [
            { answerText: "Douyin", isCorrect: false },
            { answerText: "RemoRinoCat", isCorrect: false },
            { answerText: "Tongyi", isCorrect: false },
            { answerText: "Неизвестно", isCorrect: true }
        ]
    },
    {
        questionText: "Как называется приложение, которое используется для анимации фотографий котов в меме 'Тектоник-кот'?",
        answerOptions: [
            { answerText: "Douyin", isCorrect: false },
            { answerText: "Tongyi", isCorrect: true },
            { answerText: "Garry’s Mod", isCorrect: false },
            { answerText: "Hello Street Cat", isCorrect: false }
        ]
    },
    {
        questionText: "Какой кот находится в ванной или душе в меме 'Мокрый кот'?",
        answerOptions: [
            { answerText: "Серый", isCorrect: true },
            { answerText: "Черный", isCorrect: false },
            { answerText: "Белый", isCorrect: false },
            { answerText: "Рыжий", isCorrect: false }
        ]
    },
    {
        questionText: "Какой кот сидит перед кормом и надменно ждет, пока не появится свежая еда?",
        answerOptions: [
            { answerText: "Мистер Пушистик", isCorrect: false },
            { answerText: "Мистер Фреш", isCorrect: true },
            { answerText: "Мистер Голодный", isCorrect: false },
            { answerText: "Мистер Забава", isCorrect: false }
        ]
    },
];


export default questions;