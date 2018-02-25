# Вредные советы

Коллекция вредных советов для разработчиков в стиле книжек Остера.


## Видение

Проект — это такая книжка с вредными советами. У каждого совета есть отдельная страница с номером совета. 

По умолчанию пользователю показывается какой-то случайный совет. Дальше у него есть выбор: нажать на «случайный совет», чтобы получить ещё один случайный, либо нажать на «следующий/предыдущий», чтобы перейти к следующему или предыдущему по списку.

Каждый совет лежит в `.md`-файле. Номер совета соответствует номеру в названии файла.


## Сборка

Сборка должна работать так, чтобы на каждый совет получалась отдельная ХТМЛ-страница. При этом должна быть главная страница, которая по умолчанию редиректит на случайный совет.

Количеством советов для рандома можно считать количество файлов в папке `./src/advices/`.

Для подключения стилей используем `@import`. Подключаться стили будут на этапе сборки — для этого используем `gulp-import-css`. ХТМЛ-модули подключаем через `gulp-include`.


## Вёрстка

Верстаем модульно, выделяя повторяющиеся части в шаблоны — `./src/templates/`. Стили так же разделяем на модули и выделяем их в отдельные файлы. 

Для подключения стилей используем `@import`. Подключаться стили будут на этапе сборки — для этого используем `gulp-import-css`. ХТМЛ-модули подключаем через `gulp-include`.

Страница совета может выглядеть примерно так: по центру страница текст совета, в самом низу по центру — кнопки поделиться. Рядом с советом ссылки на случайный, предыдущий и следующий.

Ссылка на случайный совет будет генерироваться прямо в браузере, скриптами. Это нужно, чтобы получить настоящий рандом, иначе будет неинтересно гулять по этой ссылке. 

Возможно, придётся обсудить, чтобы на этапе сборки в глобальную область видимости пробрасывалось максимальное количество советов, которые есть. Чтобы ссылка на случайный не вела на 20-й совет, когда их всего 10.

Для кнопок соц. сетей используем [Лайкли](http://ilyabirman.ru/projects/likely/).


## План

Макетов нет, верстаем по ощущениям :–)

В `gulpfile.js` сейчас есть какие-то наработки, но они необязательны. Если есть идеи лучше, можно переписать сборку полностью.

Мне кажется будет удобно распараллелить работу: во время настройки сборки можно попробовать сверстать страницу советов, взяв один какой-то нибудь за основу. Потом, когда сборка будет готова, можно будет распилить страницу и стили на модули и попробовать собрать это дело.

Для начала надо будет создать ветки, в которых можно будет работать и показывать результат. С вёрсткой было бы круто сразу как-то смотреть страницы на сервере. Можно попробовать использовать `github-pages` для этого.

Правила именования веток в гите, классов в вёрстке, названий переменных в коде я постарался собрать вот тут: https://docs.google.com/document/d/1fTWSpaNE2EdiVu4FlY95sxAsR52ssh_pQpj5KvVcWFg/edit#heading=h.2p8cceteiisy

Секцию «Используемые технологии» можно не брать в рассчёт. В этом проекте мы используем простой ХТМЛ и ЦСС, без препроцессоров.


## Вопросы

Обсуждаем в телеграме. Желательно в общем чате, чтобы привлечь внимание других разработчиков. Кроме того, там есть пара дизайнеров, они могут нам помочь в дизайном страниц советов.
