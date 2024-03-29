import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Anime } from 'src/app/core/model/app.model';
import { AnimeService } from 'src/app/core/services/anime.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { WatchListService } from 'src/app/core/services/watch-list.service';
import { dynamicFilterByType } from '../../share/functionReuseble';
@Component({
  selector: 'app-anime-featured',
  templateUrl: './anime-featured.component.html',
  styleUrls: ['./anime-featured.component.scss'],
})
export class AnimeFeaturedComponent implements OnInit {
  listAnimeMovie: [];
  anime: Anime;
  MovieType;
  TVType;
  specialType;
  ovaType;
  constructor(
    private userService: UserService,
    public toastService: ToastService,
    private animeService: AnimeService,
    private watchlist: WatchListService
  ) {}

  ngOnInit(): void {
    this.animeService.getTopAnimeByType().subscribe((res: any) => {
      this.listAnimeMovie = res.top;
      this.MovieType = dynamicFilterByType(this.listAnimeMovie, 'Movie');
      this.TVType = dynamicFilterByType(this.listAnimeMovie, 'TV');
      this.specialType = this.listAnimeMovie.slice(40, 45);
      this.ovaType = this.listAnimeMovie.slice(35, 40);
    });
  }
  addWhislit(e, item) {
    e.stopPropagation();
    this.animeService.getAnimeById(item?.mal_id).subscribe((p: Params) => {
      this.anime = p.data;
      this.userService.checkLogin(() => {
        this.watchlist.addToWatchList(this.anime);
      });
    });
  }

  fakeAPI: Object[] = [
    {
      mal_id: 1,
      url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
        },
      },
      trailer: {
        youtube_id: 'qig4KOK2R2g',
        url: 'https://www.youtube.com/watch?v=qig4KOK2R2g',
        embed_url:
          'https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/qig4KOK2R2g/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/qig4KOK2R2g/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/qig4KOK2R2g/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/qig4KOK2R2g/maxresdefault.jpg',
        },
      },
      title: 'Cowboy Bebop',
      title_english: 'Cowboy Bebop',
      title_japanese: 'カウボーイビバップ',
      title_synonyms: [],
      type: 'TV',
      source: 'Original',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1998-04-03T00:00:00+00:00',
        to: '1999-04-24T00:00:00+00:00',
        prop: {
          from: {
            day: 3,
            month: 4,
            year: 1998,
          },
          to: {
            day: 24,
            month: 4,
            year: 1999,
          },
        },
        string: 'Apr 3, 1998 to Apr 24, 1999',
      },
      duration: '24 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.76,
      scored_by: 827845,
      rank: 37,
      popularity: 42,
      members: 1608929,
      favorites: 71371,
      synopsis:
        "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters. Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds. [Written by MAL Rewrite]",
      background:
        'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.',
      season: 'spring',
      year: 1998,
      broadcast: {
        day: 'Saturdays',
        time: '01:00',
        timezone: 'Asia/Tokyo',
        string: 'Saturdays at 01:00 (JST)',
      },
      producers: [
        {
          mal_id: 23,
          type: 'anime',
          name: 'Bandai Visual',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
        },
      ],
      licensors: [
        {
          mal_id: 102,
          type: 'anime',
          name: 'Funimation',
          url: 'https://myanimelist.net/anime/producer/102/Funimation',
        },
        {
          mal_id: 233,
          type: 'anime',
          name: 'Bandai Entertainment',
          url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
        },
      ],
      studios: [
        {
          mal_id: 14,
          type: 'anime',
          name: 'Sunrise',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 24,
          type: 'anime',
          name: 'Sci-Fi',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: 'anime',
          name: 'Adult Cast',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
        },
        {
          mal_id: 29,
          type: 'anime',
          name: 'Space',
          url: 'https://myanimelist.net/anime/genre/29/Space',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 5,
      url: 'https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1439/93480.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1439/93480.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1439/93480l.webp',
        },
      },
      trailer: {
        youtube_id: 'hc7IxJ93jtM',
        url: 'https://www.youtube.com/watch?v=hc7IxJ93jtM',
        embed_url:
          'https://www.youtube.com/embed/hc7IxJ93jtM?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/hc7IxJ93jtM/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/hc7IxJ93jtM/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/hc7IxJ93jtM/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/hc7IxJ93jtM/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/hc7IxJ93jtM/maxresdefault.jpg',
        },
      },
      title: 'Cowboy Bebop: Tengoku no Tobira',
      title_english: 'Cowboy Bebop: The Movie',
      title_japanese: 'カウボーイビバップ 天国の扉',
      title_synonyms: ["Cowboy Bebop: Knockin' on Heaven's Door"],
      type: 'Movie',
      source: 'Original',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2001-09-01T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 1,
            month: 9,
            year: 2001,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Sep 1, 2001',
      },
      duration: '1 hr 55 min',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.38,
      scored_by: 191908,
      rank: 176,
      popularity: 563,
      members: 332745,
      favorites: 1272,
      synopsis:
        'Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator. With lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized. [Written by MAL Rewrite]',
      background: null,
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 14,
          type: 'anime',
          name: 'Sunrise',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise',
        },
        {
          mal_id: 23,
          type: 'anime',
          name: 'Bandai Visual',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
        },
      ],
      licensors: [
        {
          mal_id: 15,
          type: 'anime',
          name: 'Sony Pictures Entertainment',
          url: 'https://myanimelist.net/anime/producer/15/Sony_Pictures_Entertainment',
        },
      ],
      studios: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Bones',
          url: 'https://myanimelist.net/anime/producer/4/Bones',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 24,
          type: 'anime',
          name: 'Sci-Fi',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: 'anime',
          name: 'Adult Cast',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
        },
        {
          mal_id: 29,
          type: 'anime',
          name: 'Space',
          url: 'https://myanimelist.net/anime/genre/29/Space',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 6,
      url: 'https://myanimelist.net/anime/6/Trigun',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/20310.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/20310.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/20310l.webp',
        },
      },
      trailer: {
        youtube_id: 'bJVyIXeUznY',
        url: 'https://www.youtube.com/watch?v=bJVyIXeUznY',
        embed_url:
          'https://www.youtube.com/embed/bJVyIXeUznY?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/bJVyIXeUznY/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/bJVyIXeUznY/maxresdefault.jpg',
        },
      },
      title: 'Trigun',
      title_english: 'Trigun',
      title_japanese: 'トライガン',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1998-04-01T00:00:00+00:00',
        to: '1998-09-30T00:00:00+00:00',
        prop: {
          from: {
            day: 1,
            month: 4,
            year: 1998,
          },
          to: {
            day: 30,
            month: 9,
            year: 1998,
          },
        },
        string: 'Apr 1, 1998 to Sep 30, 1998',
      },
      duration: '24 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 8.22,
      scored_by: 327129,
      rank: 305,
      popularity: 242,
      members: 656863,
      favorites: 13183,
      synopsis:
        'Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he\'s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs. With his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash\'s agonizing past will be unraveled and his morality and principles pushed to the breaking point. [Written by MAL Rewrite]',
      background:
        "The Japanese release by Victor Entertainment has different openings relating to the specific episode it's played on. The initial Geneon Entertainment USA (then known as Pioneer) releases on VHS and DVD (singles, Signature Series, and box set) used only the first opening on each episode. This was due to the Japanese licensor providing them clean materials for only the first opening to put the English credits on. Geneon later fixed this mistake on their Limited Edition tin releases in 2005/2006, as well as on the Remix singles. Following Geneon USA's demise in late 2007, the show went out of print. When FUNimation Entertainment picked up the show in 2010 and released it, they repeated Geneon's mistake of using only the first opening on every episode. This mistake was later fixed in 2013 on the Anime Classics re-release.",
      season: 'spring',
      year: 1998,
      broadcast: {
        day: 'Thursdays',
        time: '01:15',
        timezone: 'Asia/Tokyo',
        string: 'Thursdays at 01:15 (JST)',
      },
      producers: [
        {
          mal_id: 123,
          type: 'anime',
          name: 'Victor Entertainment',
          url: 'https://myanimelist.net/anime/producer/123/Victor_Entertainment',
        },
      ],
      licensors: [
        {
          mal_id: 102,
          type: 'anime',
          name: 'Funimation',
          url: 'https://myanimelist.net/anime/producer/102/Funimation',
        },
        {
          mal_id: 1459,
          type: 'anime',
          name: 'Geneon Entertainment USA',
          url: 'https://myanimelist.net/anime/producer/1459/Geneon_Entertainment_USA',
        },
      ],
      studios: [
        {
          mal_id: 11,
          type: 'anime',
          name: 'Madhouse',
          url: 'https://myanimelist.net/anime/producer/11/Madhouse',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 2,
          type: 'anime',
          name: 'Adventure',
          url: 'https://myanimelist.net/anime/genre/2/Adventure',
        },
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
        {
          mal_id: 24,
          type: 'anime',
          name: 'Sci-Fi',
          url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: 'anime',
          name: 'Adult Cast',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 7,
      url: 'https://myanimelist.net/anime/7/Witch_Hunter_Robin',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1796/91065.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1796/91065t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1796/91065l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1796/91065.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1796/91065t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1796/91065l.webp',
        },
      },
      trailer: {
        youtube_id: '7UkaILjPk8M',
        url: 'https://www.youtube.com/watch?v=7UkaILjPk8M',
        embed_url:
          'https://www.youtube.com/embed/7UkaILjPk8M?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/7UkaILjPk8M/maxresdefault.jpg',
        },
      },
      title: 'Witch Hunter Robin',
      title_english: 'Witch Hunter Robin',
      title_japanese: 'Witch Hunter ROBIN (ウイッチハンターロビン)',
      title_synonyms: ['WHR'],
      type: 'TV',
      source: 'Original',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2002-07-02T00:00:00+00:00',
        to: '2002-12-24T00:00:00+00:00',
        prop: {
          from: {
            day: 2,
            month: 7,
            year: 2002,
          },
          to: {
            day: 24,
            month: 12,
            year: 2002,
          },
        },
        string: 'Jul 2, 2002 to Dec 24, 2002',
      },
      duration: '25 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 7.26,
      scored_by: 41455,
      rank: 2677,
      popularity: 1672,
      members: 105281,
      favorites: 568,
      synopsis:
        "Witches are individuals with special powers like ESP, telekinesis, mind control, etc. Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place. (Source: ANN)",
      background: null,
      season: 'summer',
      year: 2002,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: 'Tuesdays at Unknown',
      },
      producers: [
        {
          mal_id: 16,
          type: 'anime',
          name: 'TV Tokyo',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
        },
        {
          mal_id: 23,
          type: 'anime',
          name: 'Bandai Visual',
          url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
        },
        {
          mal_id: 53,
          type: 'anime',
          name: 'Dentsu',
          url: 'https://myanimelist.net/anime/producer/53/Dentsu',
        },
        {
          mal_id: 123,
          type: 'anime',
          name: 'Victor Entertainment',
          url: 'https://myanimelist.net/anime/producer/123/Victor_Entertainment',
        },
      ],
      licensors: [
        {
          mal_id: 102,
          type: 'anime',
          name: 'Funimation',
          url: 'https://myanimelist.net/anime/producer/102/Funimation',
        },
        {
          mal_id: 233,
          type: 'anime',
          name: 'Bandai Entertainment',
          url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
        },
      ],
      studios: [
        {
          mal_id: 14,
          type: 'anime',
          name: 'Sunrise',
          url: 'https://myanimelist.net/anime/producer/14/Sunrise',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
        {
          mal_id: 7,
          type: 'anime',
          name: 'Mystery',
          url: 'https://myanimelist.net/anime/genre/7/Mystery',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 39,
          type: 'anime',
          name: 'Detective',
          url: 'https://myanimelist.net/anime/genre/39/Detective',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 8,
      url: 'https://myanimelist.net/anime/8/Bouken_Ou_Beet',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/21569.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/7/21569.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/7/21569l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      title: 'Bouken Ou Beet',
      title_english: 'Beet the Vandel Buster',
      title_japanese: '冒険王ビィト',
      title_synonyms: ['Adventure King Beet'],
      type: 'TV',
      source: 'Manga',
      episodes: 52,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2004-09-30T00:00:00+00:00',
        to: '2005-09-29T00:00:00+00:00',
        prop: {
          from: {
            day: 30,
            month: 9,
            year: 2004,
          },
          to: {
            day: 29,
            month: 9,
            year: 2005,
          },
        },
        string: 'Sep 30, 2004 to Sep 29, 2005',
      },
      duration: '23 min per ep',
      rating: 'PG - Children',
      score: 6.96,
      scored_by: 6224,
      rank: 4082,
      popularity: 4834,
      members: 14266,
      favorites: 15,
      synopsis:
        "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century.",
      background: null,
      season: 'fall',
      year: 2004,
      broadcast: {
        day: 'Thursdays',
        time: '18:30',
        timezone: 'Asia/Tokyo',
        string: 'Thursdays at 18:30 (JST)',
      },
      producers: [
        {
          mal_id: 16,
          type: 'anime',
          name: 'TV Tokyo',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
        },
        {
          mal_id: 53,
          type: 'anime',
          name: 'Dentsu',
          url: 'https://myanimelist.net/anime/producer/53/Dentsu',
        },
      ],
      licensors: [
        {
          mal_id: 2262,
          type: 'anime',
          name: 'Illumitoon Entertainment',
          url: 'https://myanimelist.net/anime/producer/2262/Illumitoon_Entertainment',
        },
      ],
      studios: [
        {
          mal_id: 18,
          type: 'anime',
          name: 'Toei Animation',
          url: 'https://myanimelist.net/anime/producer/18/Toei_Animation',
        },
      ],
      genres: [
        {
          mal_id: 2,
          type: 'anime',
          name: 'Adventure',
          url: 'https://myanimelist.net/anime/genre/2/Adventure',
        },
        {
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
  ];
}
