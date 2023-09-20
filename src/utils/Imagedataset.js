import { Lottie } from '../components';
import React from 'react';
import { SwiperStyle } from '../styles';

export const Swiperdata = [
  {
    key: 's1',
    title: "Ball sports are those games that use a ball in play.",
    text: 'These are those games that do not require an open field to be played.',
    animation: <Lottie Lottiewidthstyle={SwiperStyle.Firstswiperstyle}
      source={require('../screens/LottiefilesAll/SwiperFirst.json')}
    />,
  },
  {
    key: 's2',
    text: 'A strength athlete trains and competes by showing his muscle build or power.',
    title: 'The focus of this type strength and capability.',
    animation: <Lottie
      source={require('../screens/LottiefilesAll/SwiperFirsttwo.json')}
    />,
    backgroundColor: 'transparent',
  },
  {
    key: 's3',
    text: 'Therefore, it requires more mental than physical skills.',
    title: 'These are those games open field to be played.',
    animationtwo: <Lottie Lottiewidthstyle={SwiperStyle.Setanimationfour}
      source={require('../screens/LottiefilesAll/Swiperfour.json')}
    />,
    animation: <Lottie
    Lottiewidthstyle={SwiperStyle.Setanimationfive}
      source={require('../screens/LottiefilesAll/SwiperFirsthree.json')}
    />,
    backgroundColor: 'transparent',
  },

]
export const Countrydata = [
  {
    "id": 1,
    "textsimple": 'Afghanistan',
    "digit": '+ 93',
  },
  {
    "id": 2,
    "textsimple": 'Albania',
    "digit": '+ 355',
  },
  {
    "id": 3,
    "textsimple": 'Algeria',
    "digit": '+ 213',
  },
  {
    "id": 1,
    "textsimple": 'Belgium',
    "digit": '+ 32',
  },
  {
    "id": 4,
    "textsimple": 'Belize',
    "digit": '+ 501',
  },
  {
    "id": 5,
    "textsimple": 'Benin',
    "digit": '+ 229',
  },
  {
    "id": 6,
    "textsimple": 'Gambia',
    "digit": '+ 220',
  },
  {
    "id": 7,
    "textsimple": 'Georgia',
    "digit": '+ 995',
  },
  {
    "id": 8,
    "textsimple": 'Greece',
    "digit": '+ 30',
  },
  {
    "id": 9,
    "textsimple": 'Hong Kong',
    "digit": '+ 852',
  },
  {
    "id": 10,
    "textsimple": 'Iceland',
    "digit": '+ 354',
  },
  {
    "id": 11,
    "textsimple": 'India',
    "digit": '+ 91',
  },
  {
    "id": 12,
    "textsimple": 'Japan',
    "digit": '+ 81',
  },
  {
    "id": 13,
    "textsimple": 'Kazakhstan',
    "digit": '+ 7',
  },
  {
    "id": 14,
    "textsimple": 'Lebanon',
    "digit": '+ 961',
  },
  {
    "id": 15,
    "textsimple": 'Liberia',
    "digit": '+ 231',
  },
  {
    "id": 16,
    "textsimple": 'Liechtenstein',
    "digit": '+ 423',
  },
  {
    "id": 17,
    "textsimple": 'Luxembourg',
    "digit": '+ 352',
  },
  {
    "id": 18,
    "textsimple": 'Malawi',
    "digit": '+ 256',
  },
  {
    "id": 19,
    "textsimple": 'Maldives',
    "digit": '+ 960',
  },
  {
    "id": 20,
    "textsimple": 'Mexico',
    "digit": '+ 52',
  },
]

