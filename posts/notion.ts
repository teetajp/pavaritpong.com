import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'reading-list': {
    date: new Date('2023-04-03').toDateString(),
    uri: 'teetajp/Reading-List-5d66da34d0b5415e93f9bc9bdc4413d6'
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
