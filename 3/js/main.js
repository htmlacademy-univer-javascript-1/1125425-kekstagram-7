/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable semi */
const DESCRIPTIONS = [
  'Прикольная фотография', 'Классная фотография', 'Нормальная фотография',
  'Чудесная фотография', 'Прелестная фотография', 'Милая фотография'
];

const MESSAGES = [
  'Всё отлично!', 
  'В целом всё неплохо. Но не всё.', 
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Игорь', 'Мария', 'Диана', 'Кекс'];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomCommendId = createRandomIdFromRangeGenerator(1,100000);

const createComment = (commentId) => ({
  id: getRandomCommendId(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createObject = (photoId) => {
  const commentsCount = getRandomInteger(0,30);
  const commentsArray = [];

  for (let i = 1; i <= commentsCount; i++) 
    commentsArray.push(createComment(i));

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15,200),
    comments: commentsArray
  };
};

const createPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++)
    photos.push(createObject(i));
  return photos;
}

console.log(JSON.stringify(createPhotos(), null, 2));