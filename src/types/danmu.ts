export type IGiftData = {
  giftName: string;
  num: number;
  uname: string; // user name
  face: string; // user avatar pic url
  guard_level: number;
  rcost: number;
  uid: number; // uid
  top_list: [];
  timestamp: number; // time
  giftId: number;
  giftType: number;
  action: string;
  super: 0;
  super_gift_num: 0;
  price: 100;
  rnd: '1555690616';
  newMedal: 0;
  newTitle: 0;
  medal: [];
  title: '';
  beatId: '0';
  biz_source: 'live';
  metadata: '';
  remain: 6;
  gold: 0;
  silver: 0;
  eventScore: 0;
  eventNum: 0;
  smalltv_msg: [];
  specialGift: null;
  notice_msg: [];
  capsule: null;
  addFollow: 0;
  effect_block: 1;
  coin_type: 'silver';
  total_coin: 100;
  effect: 0;
  tag_image: '';
  user_count: 0;
};

export type IDanmuMsg = [
  [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
    number,
    number,
    number,
    string,
    number,
    (
      | string
      | {
          bulge_display: number;
          emoticon_unique: string; // 文字版
          height: number;
          in_player_area: number;
          is_dynamic: number;
          url: string;
          width: number;
        }
    ),
  ],
  string, // content
  [number, string], // uid, username
  [number, string, string, number], // 粉丝牌子等级 粉丝牌子 粉丝主name 粉丝主id
];