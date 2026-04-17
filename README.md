# 🔥 TaskFlow Productivity App

Модерно React приложение за управление на задачи с възможност за филтриране, сортиране и проследяване на завършени задачи.

---

## 🚀 Демонстрация

👉 https://react-3qqieftk.stackblitz.io

---

## 📌 Функционалности

* ✅ Зареждане на задачи от API
* 👤 Филтриране по потребител
* 🔄 Маркиране като завършена / незавършена
* ⏱ Запазване на дата и час на завършване
* 🔤 Сортиране по заглавие (A–Z / Z–A)
* 📅 Сортиране по дата (нови / стари)
* 🎨 Модерен UI с градиентен дизайн

---

## 🧠 Използвани технологии

* React (Hooks)
* JavaScript (ES6+)
* HTML / CSS
* Fetch API

---

## 📁 Структура на проекта

```id="bg_struct"
src/
│
├── api/
│   └── api.js
│
├── components/
│   ├── TodoCard.jsx
│   ├── TodoColumn.jsx
│   └── Filters.jsx
│
├── hooks/
│   └── useTodos.js
│
├── utils/
│   ├── users.js
│   └── sortList.js
│
├── styles/
│   └── styles.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Инсталация и стартиране

1. Клонирай проекта

```id="bg_clone"
git clone <линк-към-репозиторито>
```

2. Влез в папката

```id="bg_cd"
cd името-на-проекта
```

3. Инсталирай зависимостите

```id="bg_install"
npm install
```

4. Стартирай проекта

```id="bg_run"
npm run dev
```

---

## 🧩 Как работи

* Данните се взимат от:

  * https://jsonplaceholder.typicode.com/todos
  * https://jsonplaceholder.typicode.com/users
* Всяка задача получава допълнително поле:

  * `completedAt` (дата на завършване)
* Управлението на състоянието става чрез React hooks (`useState`, `useEffect`)
* Интерфейсът е разделен на отделни компоненти

---

## 🎯 Цел на проекта

Този проект демонстрира:

* Работа с компоненти в React
* Custom hooks
* Управление на state
* Работа с външно API
* Добра структура на проект

---

## 📸 Преглед

<img width="1876" height="1457" alt="todo" src="https://github.com/user-attachments/assets/aec2fb9b-f103-4a8d-9967-f086101116d2" />

---

## 📄 Лиценз

Свободен за използване с учебна цел.

