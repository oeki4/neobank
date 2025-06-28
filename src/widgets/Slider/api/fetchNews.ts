import type { Article } from "@/entities/article";

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const fetchNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_KEY}&pageSize=10`
  );
  const news = (await res.json()) as NewsResponse;
  return news;
};
