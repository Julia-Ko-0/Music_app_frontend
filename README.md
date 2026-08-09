# Music App (frontend)

Мобильное приложение на **Expo + React Native + TypeScript**. Для навигации используется **Expo Router**.

## Запуск

```bash
npm install
npm start
```

Для запуска на Android:

```bash
npm run android
```

## Генерация API-клиента

Замените `api/openapi.json` на актуальную спецификацию и выполните:

```bash
npm run generete-api
```

Сгенерированный API-клиент не следует редактировать вручную — при изменении OpenAPI-спецификации он должен быть перегенерирован.

---

## Структура проекта

```text
frontend/
├── app.json                         # Конфигурация Expo
├── package.json                     # Зависимости и npm-скрипты
├── tsconfig.json                    # TypeScript и алиасы путей
├── README.md                        # Документация проекта
├── LICENSE
├── .gitignore
│
├── assets/                          # Изображения, иконки, splash и другие ресурсы
│   └── expo.icon/                   # Иконки приложения
│
├── api/                             # Сгенерированный API-клиент
│   ├── openapi.json                 # OpenAPI-спецификация backend
│   └── api/
│       ├── http-client.ts           # Базовый HTTP-клиент
│       ├── data-contracts.ts        # TypeScript-типы API
│       ├── Login.ts                 # Авторизация
│       ├── Register.ts              # Регистрация
│       ├── Tracks.ts                # Работа с треками
│       ├── Upload.ts                # Загрузка файлов
│       ├── Stream.ts                # Стриминг
│       └── SyncStorage.ts           # Синхронизация хранилища
│
└── src/
    ├── app/                         # ТОЛЬКО маршруты Expo Router
    │   ├── _layout.tsx              # Корневой layout приложения
    │   │
    │   └── (tabs)/                  # Основная навигация приложения
    │       ├── _layout.tsx           # Конфигурация нижних Tabs
    │       └── index.tsx             # Маршрут главного экрана
    │
    └── ui/                          # Пользовательский интерфейс
        ├── screens/                  # Полноценные экраны
        │   └── Home/
        │       ├── HomeScreen.tsx    # Главный экран
        │       └── HomeScreen.styles.ts # Стили главного экрана
        │
        ├── components/              # Переиспользуемые UI-компоненты
        │
        └── theme/                   # Общая система дизайна
            ├── colors.ts             # Цвета приложения
            ├── spacing.ts            # Отступы и размеры
            ├── typography.ts         # Типографика
            ├── radius.ts             # Радиусы скругления
            └── index.ts              # Единая точка импорта темы
```

### Назначение основных директорий

| Путь | Назначение |
| --- | --- |
| `src/app/` | **Маршрутизация Expo Router.** Здесь находятся только файлы, определяющие маршруты приложения. |
| `src/app/_layout.tsx` | Корневой layout и общая конфигурация навигации. |
| `src/app/(tabs)/` | Группа основных экранов с нижней навигацией. Скобки означают route group и не добавляются в URL. |
| `src/app/(tabs)/_layout.tsx` | Конфигурация `Tabs` и элементов нижнего меню. |
| `src/app/(tabs)/index.tsx` | Маршрут `/` для главного экрана. |
| `src/ui/screens/` | Полноценные экраны приложения. |
| `src/ui/components/` | Переиспользуемые компоненты интерфейса: кнопки, карточки, меню и т. д. |
| `src/ui/theme/` | Общие дизайн-токены: цвета, отступы, типографика и радиусы. |
| `api/` | Сгенерированный клиент для взаимодействия с backend API. |
| `assets/` | Статические ресурсы приложения. |

## Стилизация

В проекте используется **React Native `StyleSheet`**. CSS Modules (`*.module.css`) и обычные CSS-файлы для компонентов не используются.

Стили конкретного экрана или компонента выносятся в отдельный файл `*.styles.ts` рядом с соответствующим компонентом:

```text
Home/
├── HomeScreen.tsx
└── HomeScreen.styles.ts
```

Компонент отвечает за UI и поведение, а `*.styles.ts` — за его стили:

```tsx
import { Text, View } from "react-native";

import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главная</Text>
    </View>
  );
}
```

### Общая тема

Общие значения дизайна не должны дублироваться в отдельных `*.styles.ts` файлах. Они находятся в `src/ui/theme/`:

```text
src/ui/theme/
├── colors.ts
├── spacing.ts
├── typography.ts
├── radius.ts
└── index.ts
```

Например, вместо повторения цветов и отступов:

```tsx
backgroundColor: "#FFFFFF",
padding: 16,
```

используются значения темы:

```tsx
import { colors, spacing } from "@/ui/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
  },
});
```

Таким образом:

```text
ui/theme/                 # общие дизайн-токены
       ↓
*.styles.ts               # стили конкретного элемента
       ↓
*.tsx                     # компонент / экран
```

Это позволяет централизованно менять дизайн приложения и не разбрасывать одинаковые цвета, размеры и отступы по большому количеству файлов.

## Принцип разделения маршрутов и экранов

В проекте **маршрутизация отделена от реализации экранов**.

Файлы в `src/app/` определяют, какой экран должен быть показан, а сами экраны находятся в `src/ui/screens/`.

Например:

```text
src/app/(tabs)/index.tsx
        │
        │ маршрут
        ▼
src/ui/screens/Home/HomeScreen.tsx
        │
        │ UI экрана
        ▼
src/ui/components/
```

Маршрут должен оставаться небольшим и не содержать всю UI-логику экрана:

```tsx
import { HomeScreen } from "@/ui/screens/Home/HomeScreen";

export default function HomeRoute() {
  return <HomeScreen />;
}
```

Такой подход позволяет изменять структуру навигации отдельно от реализации экранов и повторно использовать экраны и компоненты.

## Навигация

В проекте используется **только Expo Router**. Дополнительные библиотеки маршрутизации для основной навигации не используются.

Структура маршрутов определяется структурой файлов внутри `src/app/`.

Например:

```text
src/app/
├── _layout.tsx
├── login.tsx
├── register.tsx
│
└── (tabs)/
    ├── _layout.tsx
    ├── index.tsx
    ├── favorites.tsx
    └── profile.tsx
```

Соответствующие маршруты:

| Файл | Маршрут |
| --- | --- |
| `index.tsx` | `/` |
| `login.tsx` | `/login` |
| `register.tsx` | `/register` |
| `(tabs)/index.tsx` | `/` |
| `(tabs)/favorites.tsx` | `/favorites` |
| `(tabs)/profile.tsx` | `/profile` |

## Правила архитектуры

### `src/app/`

Используется **только для Expo Router**. Не следует размещать здесь большие компоненты, бизнес-логику или API-запросы.

### `src/ui/screens/`

Здесь находятся полноценные экраны приложения. Каждый экран может собираться из компонентов из `src/ui/components/`.

Стили экрана хранятся рядом с ним в `*.styles.ts`.

Пример:

```text
screens/
├── Home/
│   ├── HomeScreen.tsx
│   └── HomeScreen.styles.ts
├── Library/
│   ├── LibraryScreen.tsx
│   └── LibraryScreen.styles.ts
├── Search/
│   ├── SearchScreen.tsx
│   └── SearchScreen.styles.ts
└── Profile/
    ├── ProfileScreen.tsx
    └── ProfileScreen.styles.ts
```

### `src/ui/components/`

Компоненты, которые могут использоваться на нескольких экранах:

```text
components/
├── Button/
│   ├── Button.tsx
│   └── Button.styles.ts
├── TrackCard/
│   ├── TrackCard.tsx
│   └── TrackCard.styles.ts
├── PlaylistCard/
│   ├── PlaylistCard.tsx
│   └── PlaylistCard.styles.ts
└── Player/
    ├── Player.tsx
    └── Player.styles.ts
```

Если компонент относится только к одному экрану и больше нигде не используется, его можно хранить внутри директории соответствующего экрана.

### `src/ui/theme/`

Содержит общие дизайн-токены приложения:

- `colors.ts` — цвета;
- `spacing.ts` — отступы и размеры;
- `typography.ts` — размеры и параметры текста;
- `radius.ts` — радиусы скругления;
- `index.ts` — единая точка экспорта.

Эти значения используются в `*.styles.ts` и не должны дублироваться в компонентах без необходимости.

## Планируемая структура

По мере появления функциональности `src/` будет расширяться:

```text
src/
├── app/              # маршруты Expo Router
├── ui/               # screens, components и theme
├── features/         # функциональные модули приложения
├── services/         # API, storage, audio и другие внешние сервисы
├── stores/           # глобальное состояние
├── hooks/            # общие React Hooks
├── types/            # общие TypeScript-типы
└── constants/        # константы приложения
```

Новые директории добавляются по мере появления реальной функциональности, а не создаются заранее пустыми.

## Точка входа

Expo Router используется как точка входа приложения через `package.json`:

```json
{
  "main": "expo-router/entry"
}
```

Таким образом, **Expo Router является единственной системой маршрутизации приложения**, а `src/app/` является источником определения маршрутов.
