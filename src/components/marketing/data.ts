export const features = [
  {
    icon: "⚡",
    title: "Hızlı Maç Oluşturma",
    desc: "Saha, tarih, saat, oyuncu sayısı ve kişi başı ücret bilgilerini girerek dakikalar içinde maç oluştur.",
  },
  {
    icon: "🔑",
    title: "Katılım Kodu",
    desc: "Maç için benzersiz katılım kodu oluştur. Arkadaşların kodu girerek anında katılım sağlasın.",
  },
  {
    icon: "📊",
    title: "Gerçek Zamanlı Takip",
    desc: 'Oyuncuların "Geliyor / Belki / Gelmiyor" durumlarını anlık olarak gör ve organizasyonu net yönet.',
  },
  {
    icon: "👥",
    title: "Kadro Kurma & Dengeleme",
    desc: "Takım A / B / Yedek alanlarını düzenle. Pozisyona göre otomatik dengeli kadro oluştur.",
  },
  {
    icon: "🔒",
    title: "Kadro Kilitleme",
    desc: "Kadro kesinleşince kilitle. Maç öncesi son dakika karmaşası bitsin, herkes yerini bilsin.",
  },
  {
    icon: "⚽",
    title: "Skor & İstatistik Girişi",
    desc: "Maç sonunda gol, asist ve skoru kaydet. Oyuncu performansları otomatik olarak arşivlensin.",
  },
  {
    icon: "✏️",
    title: "Oyuncu Öz-Bildirimi",
    desc: "İstersen oyuncular kendi gol ve asistlerini bildirsin. Kaptan onaylayarak veriyi kontrolde tut.",
  },
  {
    icon: "💳",
    title: "Ödeme Takibi & IBAN",
    desc: "Kişi başı ücret ve IBAN bilgisi ekle. Kim ödedi, kim ödemedi — tek ekranda şeffaf takip.",
  },
  {
    icon: "🏆",
    title: "Lider Tablosu",
    desc: "Gol, asist, kazanma oranı ve maç sayısı metriklerinde haftalık, aylık ve tüm zamanlar filtresiyle karşılaştır.",
  },
] as const;

export const steps = [
  {
    num: "1",
    title: "Maç Oluştur",
    desc: "Saha adı, tarih, oyuncu sayısı ve ücret bilgilerini gir. Sistem otomatik katılım kodu üretir.",
  },
  {
    num: "2",
    title: "Arkadaşlarını Davet Et",
    desc: "Kodu paylaş. Oyuncular uygulamaya girerek katılım durumlarını anlık güncellesin.",
  },
  {
    num: "3",
    title: "Kadroyu Kur & Oyna",
    desc: "Dengeli takımları oluştur, kilitle. Maç sonunda skoru ve istatistikleri kaydet.",
  },
  {
    num: "4",
    title: "İstatistikleri Takip Et",
    desc: "Gol, asist, kazanma oranı — hepsini lider tablosundan haftalık/aylık karşılaştır.",
  },
] as const;

export const goalLeaders = [
  { rank: 1, name: "Ahmet Kaya", sub: "24 maç oynadı", val: "14", medal: "gold" },
  { rank: 2, name: "Serhat Yılmaz", sub: "28 maç oynadı", val: "11", medal: "silver" },
  { rank: 3, name: "Mert Demir", sub: "20 maç oynadı", val: "9", medal: "bronze" },
  { rank: 4, name: "Burak Şen", sub: "18 maç oynadı", val: "7", medal: "default" },
  { rank: 5, name: "Onur Arslan", sub: "22 maç oynadı", val: "6", medal: "default" },
] as const;

export const assistLeaders = [
  { rank: 1, name: "Mert Demir", sub: "Playmaker", val: "18", medal: "gold" },
  { rank: 2, name: "Tolga Avcı", sub: "Orta saha", val: "13", medal: "silver" },
  { rank: 3, name: "Can Özkan", sub: "26 maç oynadı", val: "10", medal: "bronze" },
  { rank: 4, name: "Serkan Ertaş", sub: "16 maç oynadı", val: "8", medal: "default" },
  { rank: 5, name: "Ahmet Kaya", sub: "24 maç oynadı", val: "6", medal: "default" },
] as const;
