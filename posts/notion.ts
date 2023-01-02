import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'hello-world': {
    date: new Date('2021-06-30').toDateString(),
    uri: 'teetajp/Hello-World-0845e42874cc4a5c8a64dfd48849a0e3',
  },
  'lorem-ipsum': {
    date: new Date('2021-06-29').toDateString(),
    uri: 'teetajp/Lorem-Ipsum-649dedb380f44bea932305255627f82a',
  },
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
