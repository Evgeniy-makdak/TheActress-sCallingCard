import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const translations = {
  ru: {
    nav: {
      main: "Главная",
      biography: "Биография",
      portfolio: "Портфолио",
      resume: "Резюме",
      video: "Видео",
      contacts: "Контакты",
    },
    mainPage: {
      name: "Виктория",
      surname: "Волкова",
    },
    videoPage: {
      watch: "Смотреть",
      prevVideo: "Предыдущее видео",
      nextVideo: "Следующее видео",
      queenOfSpades: "Пиковая дама",
      prayer: '"Молитва" М.Цветаева',
      littleWitch:
        '"Маленькая ведьма" по мотивам О.Пройслера "Маленькая волшебница"',
    },
    resumePage: {
      education: "Образование:",
      theaterDept: "Театральное отделение.",
      untilNow: "2025 г. - настоящее время.",
      years: "2018 г. - 2025 г.",
    },
    biographyPage: {
      text: `Виктория родилась в 2009 году в Новосибирске.
В 2013 году вместе с родителями переезжает в Санкт-Петербург.
С раннего возраста начинает интересоваться театром, выступает на детских театральных конкурсах, получает первые призы. В 2019 году, пройдя конкурсный отбор, поступает на театральное отделение `,
      rahmaninovLink: "детской школы искусств имени Рахманинова",
      text2: `. За годы учёбы в ней проявляет себя как творческая личность, успешно участвует в конкурсе чтецов, спектаклях, шефских концертах для ветеранов. В 2023 году впервые выступила на настоящей сцене в ТЮЗе, затем - в Большом Театре Кукол. Ей была доверена роль Главной ведьмы в спектакле "Маленькая ведьма", поставленном по сказочной повести немецкого писателя Отфида Пройслера "Маленькая колдунья". Спектакль прошёл с большим успехом. В марте 2024 года Вика наравне с преподавателями учиствовала в спектакле `,
      queenOfSpades: '"Пиковая дама"',
      text3: `, поставящённого 225-летию со дня рождения А. С. Пушкина. Показ спектакля состоялся в ТЮЗе. В марте 2026 г. состоялась премьера коммерческого показа "Пиковой Дамы" на `,
      sotyLink: 'театральной площадке "Соты"',
      text4: `. Постановка вызвала достаточно большой интерес у зрителей. Достаточно сказать, что было продано более 80% билетов, что в 5 раз превышает продажи на аналогичные спектакли! `,
      hallLink: "За три дня до премьеры наполняемость зала выглядела так",
      text5: `.
Интересы Вики не ограничиваются театральной деятельностью. В течение двух лет она занималась бразильским джиу-джитсу в известной во всём мире школе `,
      gracieLink: '" Грейси-Барра "',
      text6:
        ", прошла аттестацию на серо-белый пояс.\nУвлечение английским языком ...",
    },
    contactsPage: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non laborum impedit, dicta porro recusandae incidunt fugit minima pariatur dignissimos et explicabo necessitatibus totam repellendus, soluta corrupti accusantium vero? Quibusdam repellat architecto maiores, necessitatibus perferendis nostrum atque.",
    },
    copyright: "Все права защищены",
    alt: "Виктория Волкова",
  },
  en: {
    nav: {
      main: "Home",
      biography: "Biography",
      portfolio: "Portfolio",
      resume: "Resume",
      video: "Video",
      contacts: "Contacts",
    },
    mainPage: {
      name: "Victoria",
      surname: "Volkova",
    },
    videoPage: {
      watch: "Watch",
      prevVideo: "Previous video",
      nextVideo: "Next video",
      queenOfSpades: "The Queen of Spades",
      prayer: '"Prayer" by M. Tsvetaeva',
      littleWitch:
        '"The Little Witch" based on O. Preussler\'s "The Little Witch"',
    },
    resumePage: {
      education: "Education:",
      theaterDept: "Theater Department.",
      untilNow: "2025 - present.",
      years: "2018 - 2025",
    },
    biographyPage: {
      text: `Victoria was born in 2009 in Novosibirsk.
In 2013, she moved to St. Petersburg with her parents.
From an early age, she became interested in theater, performed at children's theater competitions, and won first prizes. In 2019, after passing a competitive selection, she enrolled in the theater department of `,
      rahmaninovLink: "Rachmaninoff School of Arts",
      text2: `. Over the years of study, she has shown herself as a creative personality, successfully participating in recitation competitions, performances, and charity concerts for veterans. In 2023, she first performed on a real stage at the Youth Theater, then at the Bolshoi Puppet Theater. She was entrusted with the role of the Main Witch in the play "The Little Witch", based on the fairy tale by German writer Otfried Preussler "The Little Witch". The performance was a great success. In March 2024, Vika participated alongside teachers in the play `,
      queenOfSpades: '"The Queen of Spades"',
      text3: `, dedicated to the 225th anniversary of A. S. Pushkin's birth. The performance was shown at the Youth Theater. In March 2026, the premiere of the commercial performance of "The Queen of Spades" took place at `,
      sotyLink: 'the "Soty" theater venue',
      text4: `. The production aroused considerable interest among the audience. Suffice it to say that more than 80% of tickets were sold, which is 5 times higher than sales for similar performances! `,
      hallLink:
        "Three days before the premiere, the hall occupancy looked like this",
      text5: `.
Vika's interests are not limited to theatrical activities. For two years she practiced Brazilian jiu-jitsu at the world-famous `,
      gracieLink: '"Gracie Barra"',
      text6:
        " school, and received her gray-white belt certification.\nPassion for the English language ...",
    },
    contactsPage: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non laborum impedit, dicta porro recusandae incidunt fugit minima pariatur dignissimos et explicabo necessitatibus totam repellendus, soluta corrupti accusantium vero? Quibusdam repellat architecto maiores, necessitatibus perferendis nostrum atque.",
    },
    copyright: "All rights reserved",
    alt: "Victoria Volkova",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "ru";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
