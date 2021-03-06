import { Flex } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import CardFeedback from '../components/homepage/CardFeedback';
import Slick from '../components/homepage/SlickCenterMode';
import DecorationTitle from '../components/homepage/DecorationTitle';

const fansFeedback = [
  {
    name: '莫札瑞拉起司',
    project: '豆苗先生',
    feedback:
      '成為起司豆苗大概是2、3年前的事 高中的時候曾經被你的圖文拯救過好多次',
  },
  {
    name: 'Du YM',
    project: '豆苗先生',
    feedback:
      '我從豆苗大概百人追蹤，陪伴豆苗到現在，一開始單純覺得豆苗的圖文很可愛，後面就越來越喜歡豆苗的文筆',
  },
  {
    name: '余竹君',
    project: '豆苗先生',
    feedback: '謝謝你的創作帶給我們治癒 未來也要一起加油！豆苗教永遠不退教！',
  },
  {
    name: '洪仙映',
    project: '豆苗先生',
    feedback:
      '有時候豆苗的圖會讓我覺得心裡有東西被觸碰， 有時候看到豆苗更新會是我那天唯一能微笑的事情。',
  },
  {
    name: '莊瑜',
    project: '豆苗先生',
    feedback:
      '真的很喜歡你的圖文，是你的圖文治癒了我，能夠描寫出我的心聲大概只有豆苗了(ಥ_ಥ)',
  },
  {
    name: '洪Grace Luo',
    project: '豆苗先生',
    feedback:
      '謝謝你總是如此努力的溫暖我們，未來的每一天，請也讓我們同樣溫暖你❤️',
  },
];

const SectionFeedback = () => {
  const { space } = useSpace();

  return (
    <Flex w="100%" align="center" direction="column" bg="#fffef9">
      <DecorationTitle>粉絲回饋</DecorationTitle>
      <Flex w="100%" align="center" direction="column">
        <Flex w="100%" py="20px" pb="48px" justify="center">
          <Slick
            style={{
              display: 'flex',
              alignItems: 'stretch',
              position: 'relative',
              width: '100%',
              borderRadius: '5px',
            }}
            dots
          >
            {fansFeedback.map(feedback => (
              <CardFeedback key={feedback.name} {...feedback} />
            ))}
          </Slick>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionFeedback;
