import { Flex, Grid, GridItem } from '@chakra-ui/react';
import useSpace from '../../hooks/useSpace';

import MemberCard from './MemberCard';

import renddi from '../../assets/images/member/renddi.jpg';
import lin from '../../assets/images/member/lin@2x.webp';
import xx from '../../assets/images/member/xx.webp';

const MemberList = [
  {
    name: '林啟維',
    avatar: lin,
    title: '共同創辦人 / 執行長',
    intro:
      '真實引擎執行長，美國UCLA電機碩士、台大電機系畢業。曾創立獲得美國玩具奧斯卡、大英博物館邀請的遊戲品牌。負責真實引擎的產品開發、品牌經營與創新管理。',
  },
  {
    name: '葉仁智',
    avatar: renddi,
    title: '共同創辦人 / 技術長',
    intro:
      '真實引擎技術長，台大管理學院畢業。曾為遊戲橘子、中國信託、工研院等企業打造互動網路平台。負責真實引擎的轉體、平台系統開發。',
  },
  {
    name: '劉又瑄',
    avatar: xx,
    title: '共同創辦人 / 策略長',
    intro:
      '真實引擎策略長，台大財經系畢業。為知名資訊公司Re-Lab轉轉設計執行長。負責真實引擎的平台策略與內容行銷。',
  },
  {
    name: '喻守謙',
    title: '專案顧問',
    intro:
      '真實引擎專案顧問，負責創作者IP管理、企劃與社群行銷。本身也是台灣前百大Podcast頻道創辦人。',
  },
  {
    name: '李志威',
    title: '產品經理',
    intro: '真實引擎產品經理，負責真實引擎實實體產品生產、製造與營運管理事務。',
  },
];

const Member = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" justify="center" bg="#f0f0f0" py="100px">
      <Flex w="80%">
        <Grid
          templateColumns={{ base: 'repeat(1,,fr)', lg: 'repeat(3, 1fr)' }}
          gap={10}
        >
          {MemberList.map((member, index) => (
            <GridItem key={member.name}>
              <MemberCard {...member} order={index} />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
export default Member;
