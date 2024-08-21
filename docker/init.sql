CREATE DATABASE IF NOT EXISTS best_solutions_db;

USE BD1;


--
-- Структура таблицы `login`
--

CREATE TABLE `login` (
                       `id` int NOT NULL,
                       `name` varchar(255) NOT NULL,
                       `password` varchar(255) NOT NULL,
                       `permission` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `login`
--

INSERT INTO `login` (`id`, `name`, `password`, `permission`) VALUES
                                                               (1, 'name', 'pass', 1),
                                                               (2, 'name1', 'pass', 1),
                                                               (3, 'name2', 'pass2', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
                          `id` int NOT NULL,
                          `email` varchar(255) NOT NULL,
                          `name` varchar(255) NOT NULL,
                          `message` text NOT NULL,
                          `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          `processed` tinyint NOT NULL DEFAULT '0',
                          `timestampProcessed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `requests`
--

INSERT INTO `requests` (`id`, `email`, `name`, `message`, `timestamp`, `processed`, `timestampProcessed`) VALUES
                                                                                                            (1, '123', '123', '123', '2024-08-15 07:14:55', 0, '2024-08-15 07:14:55'),
                                                                                                            (2, '333', '333', '213', '2024-08-15 10:48:07', 0, '2024-08-16 09:01:16'),
                                                                                                            (4, '123', '123', '123', '2024-08-16 09:04:09', 0, '2024-08-16 09:04:09');

-- --------------------------------------------------------

--
-- Структура таблицы `teams`
--

CREATE TABLE `teams` (
                       `id` int NOT NULL,
                       `name` varchar(255) NOT NULL,
                       `description` text NOT NULL,
                       `photo` text NOT NULL,
                       `free` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `teams`
--

INSERT INTO `teams` (`id`, `name`, `description`, `photo`, `free`) VALUES
                                                                     (1, 'Aleksey Rozhnov', 'Software Engineer, Team leader', '1', 0),
                                                                     (2, 'Nikolay Tola', 'Angular developer, Design specialist', '1', 0),
                                                                     (3, 'Kathryn Murphy', 'VP of Marketing, Glassdoor', '1', 0),
                                                                     (4, 'Albert Flores', 'Product Manager, Google', '1', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `technologies`
--

CREATE TABLE `technologies` (
                              `id` int NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `description` text NOT NULL,
                              `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `technologies`
--

INSERT INTO `technologies` (`id`, `name`, `description`, `photo`) VALUES
                                                                    (1, 'Ngrx', 'NgRx uses RxJS for reactive programming and provides scalability and predictable state management for applications', 'assets/img/landing/conference/technologies/ngrx-logo-dark.png'),
                                                                    (2, 'Angular ', 'Angular offers tools for creating components, routing, form management, and other features', 'assets/img/landing/conference/technologies/angular-logo-dark.png'),
                                                                    (3, 'React ', 'React uses a component-based approach and allows you to create reusable UI components', 'assets/img/landing/conference/technologies/react-logo-dark.png'),
                                                                    (4, 'Storybook', 'Storybook is a tool for developing and documenting UI component', 'assets/img/landing/conference/technologies/storybook-logo-dark.png'),
                                                                    (5, 'Blender', 'Blender is software for 3D modeling and animation', 'assets/img/landing/conference/technologies/blender-logo-dark.png'),
                                                                    (6, 'Git', 'GitHub uses Git for version control and provides tools for collaborative work on projects', 'assets/img/landing/conference/technologies/git-logo-dark.png'),
                                                                    (7, 'Bootstrap', 'Bootstrap provides ready-made styles for interface elements such as buttons, forms, and tables', 'assets/img/landing/conference/technologies/bootstrap-logo-dark.png'),
                                                                    (8, 'Figma', 'Figma is an online tool for interface design that allows teams to collaborate on projects', 'assets/img/landing/conference/technologies/figma-logo-dark.png');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `technologies`
--
ALTER TABLE `technologies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `login`
--
ALTER TABLE `login`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `technologies`
--
ALTER TABLE `technologies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
