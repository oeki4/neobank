import type { Article } from "@/entities/article";

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const fetchNews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=674d43e5d2ae4f9880a3d389695950a1&pageSize=10"
  );
  const news = (await res.json()) as NewsResponse;
  return news;
};
