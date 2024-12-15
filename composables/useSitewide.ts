interface Organization {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: {
    '@type': 'ImageObject';
    url: string;
  };
}

export const useSitewide = () => {
  const defaultSeo = {
    siteName: 'TeploGarden',
    titleTemplate: '%s | TeploGarden',
    defaultTitle: 'TeploGarden - Премиальные теплицы',
    defaultDescription: 'Производство и продажа премиальных теплиц в России.',
    defaultKeywords: 'теплицы, алюминиевые теплицы, теплицы со стеклом'
  }

  const setSeo = (config: {
    title?: string,
    description?: string,
    image?: string,
    type?: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_status" | "video.movie" | "video.episode" | "video.tv_show" | "video.other",
    keywords?: string,
    robots?: string
    author?: Organization;
    publisher?: Organization;
  }) => {
    useSeoMeta({
      title: config.title,
      ogTitle: config.title,
      description: config.description,
      ogDescription: config.description,
      ogImage: config.image,
      ogType: config.type || 'website',
      keywords: config.keywords,
      robots: config.robots || 'index, follow',
      author: config.author?.name,
    })
  }

  return {
    defaultSeo,
    setSeo
  }
}