/* eslint-disable semi */
/* eslint-disable arrow-body-style */
import {getRandomInteger, getUniqeId, getRandomElement} from './util.js';

const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const MAX_COUNT_COMMENT = 30;
const COUNT_PHOTO_DESCRIPTIONS = 25;

const DESCRIPTIONS = [
  'Сфоткал на курорте',
  'Это я на втором курсе',
  'Это htmlacademy',
  'это моя машина',
  'девушка в бикини',
  'кукурузник',
  'мой завтрак',
  'мой обед',
  'мой ужин'
]

const NAMES = [
  'Кирилл Храмков',
  'Илон маск',
  'Андрей Гайдулян',
  'madk1d',
  'Александр ФЛОМастеров',
  'Тони старк',
  'Фамилий Многозов',
  'Сидни Суини',
  '-_-',
  'Flow Seal'
]

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const uniqeId = getUniqeId();

const getOneOrTwoMessages = () => {
  const firstMessage = getRandomElement(MESSAGE);
  let secondMessage = firstMessage;
  if (getRandomInteger(1, 2) === 1) {
    return firstMessage;
  }
  while (secondMessage === firstMessage) {
    secondMessage = getRandomElement(MESSAGE);
  }
  return `${firstMessage} ${secondMessage}`;
};


const createComment = () => {
  return {
    id: uniqeId(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getOneOrTwoMessages(),
    name: getRandomElement(NAMES)
  };
}

const createPhotoDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
    comments: Array.from({length: getRandomInteger(0,MAX_COUNT_COMMENT)}, createComment)
  };
}

const getPhotoDescriptions = () => Array.from({length: COUNT_PHOTO_DESCRIPTIONS}, (_, index) => createPhotoDescription(index + 1));

export {getPhotoDescriptions};
