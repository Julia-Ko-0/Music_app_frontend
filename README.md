# Music App (frontend)

Expo-приложение на React Native с Expo Router.

## Запуск

```bash
npm install
npm start
```

## Генерация API-клиента

Замените `api/openapi.json` на актуальную спецификацию и выполните:

```bash
npm run generete-api
```

---

## Структура проекта

```
frontend/
├── app.json              # Конфиг Expo (имя, иконки, splash, deep link scheme, плагины)
├── package.json          # Зависимости и npm-скрипты
├── tsconfig.json         # TypeScript + алиасы @/* и @/assets/*
├── README.md             # Этот файл
├── LICENSE
├── .gitignore
│
├── assets/               # Статика: иконки приложения, splash, картинки
│   └── expo.icon/        # Иконка для iOS (Liquid Glass)
│
├── api/                  # HTTP-клиент, сгенерированный из OpenAPI
│   ├── openapi.json      # Swagger/OpenAPI-спецификация бэкенда
│   └── api/
│       ├── http-client.ts    # Базовый fetch-клиент
│       ├── data-contracts.ts # TypeScript-типы запросов/ответов
│       ├── Login.ts          # POST /login
│       ├── Register.ts       # POST /register
│       ├── Tracks.ts         # Работа с треками
│       ├── Upload.ts         # Загрузка файлов
│       ├── Stream.ts         # Стриминг
│       └── SyncStorage.ts    # Синхронизация хранилища
│
└── src/                  # Код приложения
    └── app/              # Экраны и маршрутизация (Expo Router)
        ├── _layout.tsx   # Корневой layout, Stack-навигация
        └── index.tsx     # Главный экран (маршрут /)
```

### Где что лежит

| Путь | Назначение |
|------|------------|
| `src/app/` | **Маршрутизация.** Каждый `.tsx` файл = экран. Имя файла = URL. |
| `src/app/_layout.tsx` | Корень навигации. Сейчас `<Stack />` — стек экранов. |
| `src/app/index.tsx` | Главный экран, маршрут `/`. |
| `api/` | Автогенерируемый клиент бэкенда. Не редактировать вручную — перегенерировать через `generete-api`. |
| `assets/` | Иконки, splash, изображения для UI. |
| `app.json` | Настройки Expo: имя приложения, иконки, splash, плагин `expo-router`. |

### Как добавить экран

Создайте файл в `src/app/`:

| Файл | Маршрут |
|------|---------|
| `index.tsx` | `/` |
| `player.tsx` | `/player` |
| `album/[id].tsx` | `/album/123` |

### Папки, которые появятся позже

По мере роста проекта обычно добавляют:

```
src/
├── app/          # экраны (уже есть)
├── components/   # переиспользуемые UI-компоненты
├── hooks/        # кастомные хуки
└── constants/    # тема, цвета, константы
```

Точка входа приложения: `"main": "expo-router/entry"` в `package.json`.
