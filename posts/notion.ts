import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'how-to-turn-your-travels-into-a-documentary': {
    date: new Date('2023-06-02').toDateString(),
    uri: 'teetajp/How-To-Turn-Your-Travels-Into-a-Documentary-0dfbe70a88db4d55b58b41968f455440?pvs=4'
  },
  // 'redemption-poem-tj-pavaritpong': {
  //   date: new Date('2023-07-10').toDateString(),
  //   uri: 'https://teetajp.notion.site/Redemption-by-TJ-Pavaritpong-3e678100f50248e6843c7d30ab568f66?pvs=4'
  // },
  // 'truth-serum-haunted-island-tj-pavaritpong': {
  //   date: new Date('2023-07-12').toDateString(),
  //   uri: 'https://teetajp.notion.site/Truth-Serum-Haunted-Island-by-TJ-Pavaritpong-43738fa3c7524e04a9466e47114d4c58?pvs=4'
  // },
  // 'ivy-crowns-and-mcdojos-tj-pavaritpong': {
  //   date: new Date('2023-07-13').toDateString(),
  //   uri: 'https://teetajp.notion.site/Ivy-Crown-McDojos-by-TJ-Pavaritpong-07af851c99394eb3830bd8a48b789817?pvs=4'
  // },
  // 'lost-in-google-translation-by-tj-pavaritpong': {
  //   date: new Date('2023-07-14').toDateString(),
  //   uri: 'https://teetajp.notion.site/Lost-in-Google-Translation-by-TJ-Pavaritpong-4501649a661c4752a569259b95a1b2e1?pvs=4'
  // },
};

export interface PageInfo {
  title: string;
  cover?: string;
  coverPosition?: number;
}

export interface Page extends PageInfo {
  uri: string;
  date: string;
}

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
  const info: PageInfo = {
    title: getPageTitle(page),
  };

  const block = Object.values(page.block)[0].value;
  if (block.type === 'page' && block.format?.page_cover) {
    info.coverPosition = block.format.page_cover_position;
    info.cover =
      'https://www.notion.so/image/' +
      encodeURIComponent(block.format.page_cover) +
      '?table=block&id=' +
      block.id;
  }

  return info;
};
