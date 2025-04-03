import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSListContent,
  MicroCMSListResponse,
} from "microcms-js-sdk";
import { sanitizeHtml } from './sanitize-html';

export type { MicroCMSListResponse };

export type Blog = {
  title: string;
  body: string;
  publishedAt?: string;
  createdAt: string;
  tags: Tag[];
} & MicroCMSListContent;

export type Tag = {
  title: string;
  slug: string;
} & MicroCMSListContent;

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export type Toc = TocItem[];

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    customRequestInit: {
      cache: "default",
    },
    endpoint: "blogs",
    queries: {
      ...queries,
      orders: '-publishedAt'
    },
  });
  return listData;
};

export async function getBlogDetail(slug: string): Promise<Blog> {
  const data = await client.get({
    endpoint: 'blogs',
    contentId: slug,
  });

  return {
    ...data,
    body: sanitizeHtml(data.body),
  };
}

export const getAllTags = async () => {
  const listData = await client.getList<Tag>({
    endpoint: "tags",
  });

  return listData;
};

export const getTagsWithCount = async () => {
  const tags = await getAllTags();
  const blogs = await getBlogsList({ limit: 100 });

  const tagsWithCount = tags.contents.map(tag => {
    const count = blogs.contents.filter(blog => 
      blog.tags.some(blogTag => blogTag.id === tag.id)
    ).length;
    
    return {
      ...tag,
      totalCount: count
    };
  });

  return {
    ...tags,
    contents: tagsWithCount
  };
};
