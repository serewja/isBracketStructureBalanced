# Установка
`npm install`
# Jest
`npm test`
# Трансляция бабелем
`npm run build`
# isBracketStructureBalanced
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет является ли эта строка сбалансированной. Пустая строка (отсутствие скобок) считается сбалансированной.
```
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false
```
Функция должна поддерживать, минимум, четыре вида скобок: круглые — **()**, квадратные — **[]**, фигурные — **{}** и угловые — *<>*.