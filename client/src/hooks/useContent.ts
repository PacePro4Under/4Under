import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface SiteContent {
  id: number;
  key: string;
  value: string;
  contentType: string;
  page: string;
  section: string;
  label: string;
  description: string | null;
  updatedAt: string;
}

export function useContent(page?: string, key?: string) {
  return useQuery({
    queryKey: key ? ['/api/content', { key }] : ['/api/content', { page }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (key) params.append('key', key);
      if (page) params.append('page', page);
      
      const url = `/api/content${params.toString() ? '?' + params.toString() : ''}`;
      const response = await apiRequest('GET', url);
      return response as SiteContent[] | SiteContent;
    },
  });
}

export function useContentByKey(key: string) {
  const { data, ...rest } = useContent(undefined, key);
  return { content: data as SiteContent | undefined, ...rest };
}

export function useContentByPage(page: string) {
  const { data, ...rest } = useContent(page);
  return { content: data as SiteContent[] | undefined, ...rest };
}

// Helper to get content value by key
export function getContentValue(content: SiteContent[] | undefined, key: string, defaultValue: string = ''): string {
  if (!content) return defaultValue;
  const item = content.find(c => c.key === key);
  return item?.value || defaultValue;
}