// ====== FILE DỮ LIỆU: sửa từ vựng, phần thưởng, cài đặt tại đây ======

// Từ vựng (w = từ, e = emoji làm hình). Nên để đúng 4 từ.
var ROOMS = [
  { w: 'art room',      e: '🎨' },
  { w: 'computer room', e: '💻' },
  { w: 'gym',           e: '🏋️' },
  { w: 'music room',    e: '🎵' }
];

// Phần thưởng (e = emoji, n = tên quà, c = số sao cần để đổi)
var REWARDS = [
  { e: '🌈', n: 'Chọn 1 sticker',       c: 5 },
  { e: '🎮', n: 'Chơi game 5 phút',     c: 10 },
  { e: '😴', n: 'Nghỉ giải lao 3 phút', c: 15 },
  { e: '🎁', n: 'Quà bất ngờ',          c: 25 }
];

// Cài đặt trận đấu
var BOSS = 5;        // số máu của Robot
var LIVES = 3;       // số tim của bé
var WIN_BONUS = 3;   // số sao thưởng thêm khi thắng
