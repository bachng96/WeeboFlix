import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Anime } from 'src/app/core/model/app.model';
@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss'],
})
export class CaroselComponent implements OnInit {
  ngOnInit(): void {}
  animeData = [
    {
      mal_id: 50265,
      url: 'https://myanimelist.net/anime/50265/Spy_x_Family',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1441/122795t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1441/122795l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1441/122795.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1441/122795t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1441/122795l.webp',
        },
      },
      trailer: {
        youtube_id: 'ofXigq9aIpo',
        url: 'https://www.youtube.com/watch?v=ofXigq9aIpo',
        embed_url:
          'https://www.youtube.com/embed/ofXigq9aIpo?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/ofXigq9aIpo/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/ofXigq9aIpo/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/ofXigq9aIpo/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/ofXigq9aIpo/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/ofXigq9aIpo/maxresdefault.jpg',
        },
      },
      title: 'Spy x Family',
      title_english: null,
      title_japanese: 'SPY\u00d7FAMILY',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 12,
      status: 'Currently Airing',
      airing: true,
      aired: {
        from: '2022-04-09T00:00:00+00:00',
        to: null,
        prop: {
          from: { day: 9, month: 4, year: 2022 },
          to: { day: null, month: null, year: null },
        },
        string: 'Apr 9, 2022 to ?',
      },
      duration: '24 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 9.05,
      scored_by: 216361,
      rank: 5,
      popularity: 220,
      members: 711455,
      favorites: 20318,
      synopsis:
        'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war. In the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons\' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor\u2014who is an underground assassin known as "Thorn Princess"\u2014and Anya\u2014an esper who can read people\'s minds\u2014have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else. [Written by MAL Rewrite]',
      background: null,
      season: 'spring',
      year: 2022,
      broadcast: {
        day: 'Saturdays',
        time: '23:00',
        timezone: 'Asia/Tokyo',
        string: 'Saturdays at 23:00 (JST)',
      },
      producers: [
        {
          mal_id: 16,
          type: 'anime',
          name: 'TV Tokyo',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
        },
        {
          mal_id: 62,
          type: 'anime',
          name: 'Shogakukan-Shueisha Productions',
          url: 'https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions',
        },
        {
          mal_id: 1143,
          type: 'anime',
          name: 'TOHO animation',
          url: 'https://myanimelist.net/anime/producer/1143/TOHO_animation',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 858,
          type: 'anime',
          name: 'Wit Studio',
          url: 'https://myanimelist.net/anime/producer/858/Wit_Studio',
        },
        {
          mal_id: 1835,
          type: 'anime',
          name: 'CloverWorks',
          url: 'https://myanimelist.net/anime/producer/1835/CloverWorks',
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
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 53,
          type: 'anime',
          name: 'Childcare',
          url: 'https://myanimelist.net/anime/genre/53/Childcare',
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
      mal_id: 50631,
      url: 'https://myanimelist.net/anime/50631/Komi-san_wa_Comyushou_desu_2nd_Season',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1108/121157.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1108/121157t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1108/121157l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1108/121157.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1108/121157t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1108/121157l.webp',
        },
      },
      trailer: {
        youtube_id: 'NcoQssquPhE',
        url: 'https://www.youtube.com/watch?v=NcoQssquPhE',
        embed_url:
          'https://www.youtube.com/embed/NcoQssquPhE?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/NcoQssquPhE/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/NcoQssquPhE/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/NcoQssquPhE/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/NcoQssquPhE/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/NcoQssquPhE/maxresdefault.jpg',
        },
      },
      title: 'Komi-san wa, Comyushou desu. 2nd Season',
      title_english: "Komi Can't Communicate Season 2",
      title_japanese:
        '\u53e4\u898b\u3055\u3093\u306f\u3001\u30b3\u30df\u30e5\u75c7\u3067\u3059\u3002 2',
      title_synonyms: ['Komi-san wa', 'Communication Shougai desu. 2'],
      type: 'TV',
      source: 'Manga',
      episodes: null,
      status: 'Currently Airing',
      airing: true,
      aired: {
        from: '2022-04-07T00:00:00+00:00',
        to: null,
        prop: {
          from: { day: 7, month: 4, year: 2022 },
          to: { day: null, month: null, year: null },
        },
        string: 'Apr 7, 2022 to ?',
      },
      duration: '23 min',
      rating: 'PG-13 - Teens 13 or older',
      score: 8.26,
      scored_by: 39879,
      rank: 270,
      popularity: 754,
      members: 262423,
      favorites: 2091,
      synopsis:
        'Second season of Komi-san wa, Comyushou desu. Komi and pals are back! Who else will Komi make friends with? How will her relationship with Tadano evolve? (Source: Netflix)',
      background: null,
      season: 'spring',
      year: 2022,
      broadcast: {
        day: 'Thursdays',
        time: '00:00',
        timezone: 'Asia/Tokyo',
        string: 'Thursdays at 00:00 (JST)',
      },
      producers: [
        {
          mal_id: 62,
          type: 'anime',
          name: 'Shogakukan-Shueisha Productions',
          url: 'https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions',
        },
        {
          mal_id: 213,
          type: 'anime',
          name: 'Half H.P Studio',
          url: 'https://myanimelist.net/anime/producer/213/Half_HP_Studio',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 28,
          type: 'anime',
          name: 'OLM',
          url: 'https://myanimelist.net/anime/producer/28/OLM',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 74,
          type: 'anime',
          name: 'Romantic Subtext',
          url: 'https://myanimelist.net/anime/genre/74/Romantic_Subtext',
        },
        {
          mal_id: 23,
          type: 'anime',
          name: 'School',
          url: 'https://myanimelist.net/anime/genre/23/School',
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
      mal_id: 269,
      url: 'https://myanimelist.net/anime/269/Bleach',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/3/40451t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/3/40451l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/3/40451.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/3/40451t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/3/40451l.webp',
        },
      },
      trailer: {
        youtube_id: '0yk5H6vvfG4',
        url: 'https://www.youtube.com/watch?v=0yk5H6vvfG4',
        embed_url:
          'https://www.youtube.com/embed/0yk5H6vvfG4?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/0yk5H6vvfG4/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/0yk5H6vvfG4/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/0yk5H6vvfG4/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/0yk5H6vvfG4/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/0yk5H6vvfG4/maxresdefault.jpg',
        },
      },
      title: 'Bleach',
      title_english: 'Bleach',
      title_japanese: 'BLEACH - \u30d6\u30ea\u30fc\u30c1 -',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 366,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2004-10-05T00:00:00+00:00',
        to: '2012-03-27T00:00:00+00:00',
        prop: {
          from: { day: 5, month: 10, year: 2004 },
          to: { day: 27, month: 3, year: 2012 },
        },
        string: 'Oct 5, 2004 to Mar 27, 2012',
      },
      duration: '24 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 7.86,
      scored_by: 963263,
      rank: 769,
      popularity: 40,
      members: 1649179,
      favorites: 59163,
      synopsis:
        "Ichigo Kurosaki is an ordinary high schooler\u2014until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends\u2014classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida\u2014who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world. [Written by MAL Rewrite]",
      background:
        "Bleach adapts the first 54 volumes of Tite Kubo's manga series of the same name. In addition, 4 anime-original arcs were broadcast in-between and during the adaptations of original arcs of the manga.",
      season: 'fall',
      year: 2004,
      broadcast: {
        day: 'Tuesdays',
        time: '18:00',
        timezone: 'Asia/Tokyo',
        string: 'Tuesdays at 18:00 (JST)',
      },
      producers: [
        {
          mal_id: 16,
          type: 'anime',
          name: 'TV Tokyo',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
        },
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 53,
          type: 'anime',
          name: 'Dentsu',
          url: 'https://myanimelist.net/anime/producer/53/Dentsu',
        },
        {
          mal_id: 717,
          type: 'anime',
          name: 'TV Tokyo Music',
          url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music',
        },
        {
          mal_id: 909,
          type: 'anime',
          name: 'Studio Kelmadick',
          url: 'https://myanimelist.net/anime/producer/909/Studio_Kelmadick',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: 'anime',
          name: 'VIZ Media',
          url: 'https://myanimelist.net/anime/producer/119/VIZ_Media',
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Studio Pierrot',
          url: 'https://myanimelist.net/anime/producer/1/Studio_Pierrot',
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
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
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
    {
      mal_id: 1735,
      url: 'https://myanimelist.net/anime/1735/Naruto__Shippuuden',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/5/17407.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/5/17407t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/5/17407l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/5/17407.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/5/17407t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/5/17407l.webp',
        },
      },
      trailer: {
        youtube_id: '1dy2zPPrKD0',
        url: 'https://www.youtube.com/watch?v=1dy2zPPrKD0',
        embed_url:
          'https://www.youtube.com/embed/1dy2zPPrKD0?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/1dy2zPPrKD0/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/1dy2zPPrKD0/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/1dy2zPPrKD0/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/1dy2zPPrKD0/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/1dy2zPPrKD0/maxresdefault.jpg',
        },
      },
      title: 'Naruto: Shippuuden',
      title_english: 'Naruto Shippuden',
      title_japanese: '\u30ca\u30eb\u30c8- \u75be\u98a8\u4f1d',
      title_synonyms: ['Naruto Hurricane Chronicles'],
      type: 'TV',
      source: 'Manga',
      episodes: 500,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2007-02-15T00:00:00+00:00',
        to: '2017-03-23T00:00:00+00:00',
        prop: {
          from: { day: 15, month: 2, year: 2007 },
          to: { day: 23, month: 3, year: 2017 },
        },
        string: 'Feb 15, 2007 to Mar 23, 2017',
      },
      duration: '23 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 8.24,
      scored_by: 1417423,
      rank: 281,
      popularity: 16,
      members: 2111025,
      favorites: 96934,
      synopsis:
        'It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Although Naruto is older and sinister events loom on the horizon, he has changed little in personality\u2014still rambunctious and childish\u2014though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage. [Written by MAL Rewrite]',
      background: null,
      season: 'winter',
      year: 2007,
      broadcast: {
        day: 'Thursdays',
        time: '19:30',
        timezone: 'Asia/Tokyo',
        string: 'Thursdays at 19:30 (JST)',
      },
      producers: [
        {
          mal_id: 16,
          type: 'anime',
          name: 'TV Tokyo',
          url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
        },
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 50,
          type: 'anime',
          name: 'KSS',
          url: 'https://myanimelist.net/anime/producer/50/KSS',
        },
        {
          mal_id: 211,
          type: 'anime',
          name: 'Rakuonsha',
          url: 'https://myanimelist.net/anime/producer/211/Rakuonsha',
        },
        {
          mal_id: 717,
          type: 'anime',
          name: 'TV Tokyo Music',
          url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 119,
          type: 'anime',
          name: 'VIZ Media',
          url: 'https://myanimelist.net/anime/producer/119/VIZ_Media',
        },
      ],
      studios: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Studio Pierrot',
          url: 'https://myanimelist.net/anime/producer/1/Studio_Pierrot',
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
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Martial Arts',
          url: 'https://myanimelist.net/anime/genre/17/Martial_Arts',
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
  ];

  images = [
    {
      url: 'https://static.bunnycdn.ru/i/cache/images/d/d9/d9a0d787486d341c1c0011aeac228e8b.jpg',
      name: 'Spy_x_Family',
    },
    {
      url: 'https://static.bunnycdn.ru/i/cache/images/f/fb/fbe82e085549d52d06b0d93b1fb4ed33.jpg',
      name: 'Komi-san wa, Comyushou desu. 2nd Season',
    },
    {
      url: 'https://images4.alphacoders.com/259/thumb-1920-259296.jpg',
      name: 'Bleach',
    },
    {
      url: 'https://wallpaper.dog/large/10773325.jpg',
      name: 'Naruto_Shippuden',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnFocus = true;
    config.pauseOnHover = false;
  }
}
