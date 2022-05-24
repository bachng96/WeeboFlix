export interface Root {
    pagination: Pagination
    data: Anime[]
    links: Links
    meta: Meta
  }
  
  export interface Pagination {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: Items
  }
  
  export interface Items {
    count: number
    total: number
    per_page: number
  }
  
  export interface Anime {
    mal_id: number
    url: string
    images: Images
    trailer: Trailer
    title: string
    title_english?: string
    title_japanese: string
    title_synonyms: string[]
    type: string
    source: string
    episodes?: number
    status: string
    airing: boolean
    aired: Aired
    duration: string
    rating: string
    score: number
    scored_by: number
    rank: number
    popularity: number
    members: number
    favorites: number
    synopsis: string
    background?: string
    season?: string
    year?: number
    broadcast: Broadcast
    producers: Producer[]
    licensors: Licensor[]
    studios: Studio[]
    genres: Genre[]
    explicit_genres: any[]
    themes: Theme[]
    demographics: Demographic[]
  }
  
  export interface Images {
    jpg: Jpg
    webp: Webp
  }
  
  export interface Jpg {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
  
  export interface Webp {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
  
  export interface Trailer {
    youtube_id?: string
    url?: string
    embed_url?: string
    images: Images2
  }
  
  export interface Images2 {
    image_url?: string
    small_image_url?: string
    medium_image_url?: string
    large_image_url?: string
    maximum_image_url?: string
  }
  
  export interface Aired {
    from: string
    to?: string
    prop: Prop
    string: string
  }
  
  export interface Prop {
    from: From
    to: To
  }
  
  export interface From {
    day: number
    month: number
    year: number
  }
  
  export interface To {
    day?: number
    month?: number
    year?: number
  }
  
  export interface Broadcast {
    day?: string
    time?: string
    timezone?: string
    string?: string
  }
  
  export interface Producer {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Licensor {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Studio {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Genre {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Theme {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Demographic {
    mal_id: number
    type: string
    name: string
    url: string
  }
  
  export interface Links {
    first: string
    last: string
    prev: any
    next: string
  }
  
  export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  