'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const otherArticles: { href: string; label: string }[] = [
  { href: '/parents-support', label: '📋 親のためにやるべきこと完全ガイド' },
  { href: '/care-items', label: '🛒 親のための購入備品ガイド' },
  { href: '/tell-parents', label: '👪 親に伝えるべき老人ホームの魅力' },
  { href: '/transport', label: '🚌 送迎サービス完全ガイド' },
  { href: '/tokuyou-waiting', label: '⏳ 特養の待機問題と代替施設' },
  { href: '/after-hospital', label: '🏥 退院後の施設入居最短ガイド' },
  { href: '/dementia-facility', label: '🧠 認知症対応施設の選び方' },
  { href: '/review-guide', label: '📖 口コミの正しい読み方' },
  { href: '/sakouju', label: '🏠 サ高住 vs 有料老人ホーム比較' },
  { href: '/care-resignation', label: '💼 介護離職を防ぐ制度活用ガイド' },
  { href: '/care-cost-split', label: '💰 介護費用の兄弟間分担ガイド' },
  { href: '/retirement-cost', label: '📊 老後資金・介護費用の試算' },
  { href: '/insurance-gap', label: '🔍 介護保険でカバーされない費用' },
  { href: '/after-death', label: '📋 親が亡くなったら最初にやること' },
  { href: '/funeral-guide', label: '🕊️ 家族葬と一般葬の選び方' },
  { href: '/ending-activity', label: '📝 終活ステップガイド' },
  { href: '/simulation', label: '費用20年シミュレーション' },
  { href: '/care-level', label: '要介護度の違いと認定手続き' },
  { href: '/prepare', label: '入居前の準備4つのこと' },
  { href: '/prepare/real-estate', label: '└ 自宅・不動産の整理' },
  { href: '/prepare/consultation', label: '└ 相談先の選び方' },
  { href: '/prepare/insurance', label: '└ 保険の見直し' },
  { href: '/prepare/inheritance', label: '└ 相続の準備' },
  { href: '/ranking', label: '検索サービス比較ランキング' },
  { href: '/funeral', label: '家族葬・葬儀の選び方' },
  { href: '/asset', label: '老後の資産形成（NISA・iDeCo）' },
  { href: '/checklist', label: '終活チェックリスト28項目' },
]

const navItems: { href: string; label: string; highlight?: boolean }[] = [
  { href: '/reason', label: 'まず読んでほしい', highlight: true },
  { href: '/types', label: '施設の種類' },
  { href: '/cost', label: '費用・料金' },
  { href: '/how-to-choose', label: '選び方' },
  { href: '/home-care', label: '在宅介護' },
  { href: '/process', label: '入居の流れ' },
  { href: '/faq', label: 'FAQ' },
]

type Region = '北海道' | '東北' | '関東' | '東京' | '中部' | '近畿' | '中国' | '四国' | '九州'

interface City { slug: string; name: string; available: boolean }
interface Prefecture { name: string; cities: City[] }

const regions: Region[] = ['北海道', '東北', '関東', '東京', '中部', '近畿', '中国', '四国', '九州']

const regionData: Record<Region, Prefecture[]> = {
  '北海道': [
    { name: '北海道', cities: [
      { slug: 'sapporo', name: '札幌市', available: true },
      { slug: 'asahikawa', name: '旭川市', available: true },
      { slug: 'hakodate', name: '函館市', available: true },
      { slug: 'tomakomai', name: '苫小牧市', available: true },
    ]},
  ],
  '東北': [
    { name: '宮城県', cities: [
      { slug: 'sendai', name: '仙台市', available: true },
      { slug: 'ishinomaki', name: '石巻市', available: true },
      { slug: 'osaki', name: '大崎市', available: true },
      { slug: 'natori', name: '名取市', available: true },
    ]},
    { name: '青森県', cities: [
      { slug: 'aomori', name: '青森市', available: true },
      { slug: 'hachinohe', name: '八戸市', available: true },
      { slug: 'hirosaki', name: '弘前市', available: true },
      { slug: 'towada', name: '十和田市', available: true },
    ]},
    { name: '岩手県', cities: [
      { slug: 'morioka', name: '盛岡市', available: true },
      { slug: 'ichinoseki', name: '一関市', available: true },
      { slug: 'oshu', name: '奥州市', available: true },
      { slug: 'hanamaki', name: '花巻市', available: true },
    ]},
    { name: '秋田県', cities: [
      { slug: 'akita', name: '秋田市', available: true },
      { slug: 'yokote', name: '横手市', available: true },
      { slug: 'noshiro', name: '能代市', available: true },
      { slug: 'yurihonjyo', name: '由利本荘市', available: true },
    ]},
    { name: '山形県', cities: [
      { slug: 'yamagata', name: '山形市', available: true },
      { slug: 'tsuruoka', name: '鶴岡市', available: true },
      { slug: 'sakata', name: '酒田市', available: true },
      { slug: 'yonezawa', name: '米沢市', available: true },
    ]},
    { name: '福島県', cities: [
      { slug: 'koriyama', name: '郡山市', available: true },
      { slug: 'iwaki', name: 'いわき市', available: true },
      { slug: 'fukushima', name: '福島市', available: true },
      { slug: 'aizuwakamatsu', name: '会津若松市', available: true },
    ]},
  ],
  '関東': [
    { name: '神奈川県', cities: [
      { slug: 'yokohama', name: '横浜市', available: true },
      { slug: 'kawasaki', name: '川崎市', available: true },
      { slug: 'sagamihara', name: '相模原市', available: true },
      { slug: 'yokosuka', name: '横須賀市', available: true },
      { slug: 'fujisawa', name: '藤沢市', available: true },
    ]},
    { name: '埼玉県', cities: [
      { slug: 'saitama', name: 'さいたま市', available: true },
      { slug: 'kawaguchi', name: '川口市', available: true },
      { slug: 'kawagoe', name: '川越市', available: true },
      { slug: 'tokorozawa', name: '所沢市', available: true },
    ]},
    { name: '千葉県', cities: [
      { slug: 'chiba', name: '千葉市', available: true },
      { slug: 'funabashi', name: '船橋市', available: true },
      { slug: 'matsudo', name: '松戸市', available: true },
      { slug: 'ichikawa', name: '市川市', available: true },
    ]},
    { name: '茨城県', cities: [
      { slug: 'mito', name: '水戸市', available: true },
      { slug: 'tsukuba', name: 'つくば市', available: true },
      { slug: 'hitachi', name: '日立市', available: true },
      { slug: 'hitachinaka', name: 'ひたちなか市', available: true },
    ]},
    { name: '栃木県', cities: [
      { slug: 'utsunomiya', name: '宇都宮市', available: true },
      { slug: 'oyama', name: '小山市', available: true },
      { slug: 'ashikaga', name: '足利市', available: true },
      { slug: 'tochigi_city', name: '栃木市', available: true },
    ]},
    { name: '群馬県', cities: [
      { slug: 'maebashi', name: '前橋市', available: true },
      { slug: 'takasaki', name: '高崎市', available: true },
      { slug: 'ota_gunma', name: '太田市', available: true },
      { slug: 'isesaki', name: '伊勢崎市', available: true },
    ]},
  ],
  '東京': [
    { name: '東京都', cities: [
      { slug: 'tokyo', name: '東京都（全域）', available: false },
      { slug: 'chiyoda', name: '千代田区', available: true },
      { slug: 'chuo', name: '中央区', available: true },
      { slug: 'minato', name: '港区', available: true },
      { slug: 'shinjuku', name: '新宿区', available: true },
      { slug: 'bunkyo', name: '文京区', available: true },
      { slug: 'taito', name: '台東区', available: true },
      { slug: 'sumida', name: '墨田区', available: true },
      { slug: 'koto', name: '江東区', available: true },
      { slug: 'shinagawa', name: '品川区', available: true },
      { slug: 'meguro', name: '目黒区', available: true },
      { slug: 'ota', name: '大田区', available: true },
      { slug: 'setagaya', name: '世田谷区', available: true },
      { slug: 'shibuya', name: '渋谷区', available: true },
      { slug: 'nakano', name: '中野区', available: true },
      { slug: 'suginami', name: '杉並区', available: true },
      { slug: 'toshima', name: '豊島区', available: true },
      { slug: 'kita', name: '北区', available: true },
      { slug: 'arakawa', name: '荒川区', available: true },
      { slug: 'itabashi', name: '板橋区', available: true },
      { slug: 'nerima', name: '練馬区', available: true },
      { slug: 'adachi', name: '足立区', available: true },
      { slug: 'katsushika', name: '葛飾区', available: true },
      { slug: 'edogawa', name: '江戸川区', available: true },
      { slug: 'fuchu_tokyo', name: '府中市', available: true },
    ]},
  ],
  '中部': [
    { name: '愛知県', cities: [
      { slug: 'nagoya', name: '名古屋市', available: true },
      { slug: 'toyota', name: '豊田市', available: true },
      { slug: 'toyohashi', name: '豊橋市', available: true },
      { slug: 'okazaki', name: '岡崎市', available: true },
    ]},
    { name: '静岡県', cities: [
      { slug: 'shizuoka', name: '静岡市', available: true },
      { slug: 'hamamatsu', name: '浜松市', available: true },
      { slug: 'fuji', name: '富士市', available: true },
      { slug: 'numazu', name: '沼津市', available: true },
    ]},
    { name: '新潟県', cities: [
      { slug: 'niigata', name: '新潟市', available: true },
      { slug: 'nagaoka', name: '長岡市', available: true },
      { slug: 'joetsu', name: '上越市', available: true },
      { slug: 'sanjo', name: '三条市', available: true },
    ]},
    { name: '富山県', cities: [
      { slug: 'toyama', name: '富山市', available: true },
      { slug: 'takaoka', name: '高岡市', available: true },
      { slug: 'imizu', name: '射水市', available: true },
      { slug: 'tonami', name: '砺波市', available: true },
    ]},
    { name: '石川県', cities: [
      { slug: 'kanazawa', name: '金沢市', available: true },
      { slug: 'hakusan', name: '白山市', available: true },
      { slug: 'komatsu', name: '小松市', available: true },
      { slug: 'kaga', name: '加賀市', available: true },
    ]},
    { name: '福井県', cities: [
      { slug: 'fukui', name: '福井市', available: true },
      { slug: 'sakai_fukui', name: 'さかい市', available: true },
      { slug: 'echizen', name: '越前市', available: true },
      { slug: 'tsuruga', name: '敦賀市', available: true },
    ]},
    { name: '山梨県', cities: [
      { slug: 'kofu', name: '甲府市', available: true },
      { slug: 'kai', name: '甲斐市', available: true },
      { slug: 'fuefuki', name: '笛吹市', available: true },
      { slug: 'minami_alps', name: '南アルプス市', available: true },
    ]},
    { name: '長野県', cities: [
      { slug: 'nagano', name: '長野市', available: true },
      { slug: 'matsumoto', name: '松本市', available: true },
      { slug: 'ueda', name: '上田市', available: true },
      { slug: 'iida', name: '飯田市', available: true },
    ]},
    { name: '岐阜県', cities: [
      { slug: 'gifu', name: '岐阜市', available: true },
      { slug: 'kakamigahara', name: '各務原市', available: true },
      { slug: 'ogaki', name: '大垣市', available: true },
      { slug: 'tajimi', name: '多治見市', available: true },
    ]},
    { name: '三重県', cities: [
      { slug: 'tsu', name: '津市', available: true },
      { slug: 'yokkaichi', name: '四日市市', available: true },
      { slug: 'matsusaka', name: '松阪市', available: true },
      { slug: 'suzuka', name: '鈴鹿市', available: true },
    ]},
  ],
  '近畿': [
    { name: '大阪府', cities: [
      { slug: 'osaka', name: '大阪市', available: true },
      { slug: 'sakai', name: '堺市', available: true },
      { slug: 'higashiosaka', name: '東大阪市', available: true },
      { slug: 'hirakata', name: '枚方市', available: true },
    ]},
    { name: '兵庫県', cities: [
      { slug: 'kobe', name: '神戸市', available: true },
      { slug: 'himeji', name: '姫路市', available: true },
      { slug: 'nishinomiya', name: '西宮市', available: true },
      { slug: 'amagasaki', name: '尼崎市', available: true },
    ]},
    { name: '京都府', cities: [
      { slug: 'kyoto', name: '京都市', available: true },
      { slug: 'uji', name: '宇治市', available: true },
      { slug: 'maizuru', name: '舞鶴市', available: true },
      { slug: 'kameoka', name: '亀岡市', available: true },
    ]},
    { name: '奈良県', cities: [
      { slug: 'nara', name: '奈良市', available: true },
      { slug: 'kashihara', name: '橿原市', available: true },
      { slug: 'ikoma', name: '生駒市', available: true },
      { slug: 'tenri', name: '天理市', available: true },
    ]},
    { name: '滋賀県', cities: [
      { slug: 'otsu', name: '大津市', available: true },
      { slug: 'kusatsu', name: '草津市', available: true },
      { slug: 'hikone', name: '彦根市', available: true },
      { slug: 'nagahama', name: '長浜市', available: true },
    ]},
    { name: '和歌山県', cities: [
      { slug: 'wakayama', name: '和歌山市', available: true },
      { slug: 'tanabe', name: '田辺市', available: true },
      { slug: 'hashimoto', name: '橋本市', available: true },
      { slug: 'kinokawa', name: '紀の川市', available: true },
    ]},
  ],
  '中国': [
    { name: '広島県', cities: [
      { slug: 'hiroshima', name: '広島市', available: true },
      { slug: 'fukuyama', name: '福山市', available: true },
      { slug: 'kure', name: '呉市', available: true },
      { slug: 'higashihiroshima', name: '東広島市', available: true },
    ]},
    { name: '岡山県', cities: [
      { slug: 'okayama', name: '岡山市', available: true },
      { slug: 'kurashiki', name: '倉敷市', available: true },
      { slug: 'tsuyama', name: '津山市', available: true },
      { slug: 'soja', name: '総社市', available: true },
    ]},
    { name: '山口県', cities: [
      { slug: 'yamaguchi', name: '山口市', available: true },
      { slug: 'shimonoseki', name: '下関市', available: true },
      { slug: 'ube', name: '宇部市', available: true },
      { slug: 'shunan', name: '周南市', available: true },
    ]},
    { name: '鳥取県', cities: [
      { slug: 'tottori', name: '鳥取市', available: true },
      { slug: 'yonago', name: '米子市', available: true },
      { slug: 'kurayoshi', name: '倉吉市', available: true },
      { slug: 'sakaiminato', name: '境港市', available: true },
    ]},
    { name: '島根県', cities: [
      { slug: 'matsue', name: '松江市', available: true },
      { slug: 'izumo', name: '出雲市', available: true },
      { slug: 'hamada', name: '浜田市', available: true },
      { slug: 'masuda', name: '益田市', available: true },
    ]},
  ],
  '四国': [
    { name: '愛媛県', cities: [
      { slug: 'matsuyama', name: '松山市', available: true },
      { slug: 'imabari', name: '今治市', available: true },
      { slug: 'uwajima', name: '宇和島市', available: true },
      { slug: 'niihama', name: '新居浜市', available: true },
    ]},
    { name: '香川県', cities: [
      { slug: 'takamatsu', name: '高松市', available: true },
      { slug: 'marugame', name: '丸亀市', available: true },
      { slug: 'sakaide', name: '坂出市', available: true },
      { slug: 'kanonji', name: '観音寺市', available: true },
    ]},
    { name: '徳島県', cities: [
      { slug: 'tokushima', name: '徳島市', available: true },
      { slug: 'anan', name: '阿南市', available: true },
      { slug: 'naruto', name: '鳴門市', available: true },
      { slug: 'yoshinogawa', name: '吉野川市', available: true },
    ]},
    { name: '高知県', cities: [
      { slug: 'kochi', name: '高知市', available: true },
      { slug: 'nankoku', name: '南国市', available: true },
      { slug: 'shimanto', name: '四万十市', available: true },
      { slug: 'konan', name: '香南市', available: true },
    ]},
  ],
  '九州': [
    { name: '福岡県', cities: [
      { slug: 'fukuoka', name: '福岡市', available: true },
      { slug: 'kitakyushu', name: '北九州市', available: true },
      { slug: 'kurume', name: '久留米市', available: true },
      { slug: 'iizuka', name: '飯塚市', available: true },
    ]},
    { name: '熊本県', cities: [
      { slug: 'kumamoto', name: '熊本市', available: true },
      { slug: 'yatsushiro', name: '八代市', available: true },
      { slug: 'amakusa', name: '天草市', available: true },
      { slug: 'tamana', name: '玉名市', available: true },
    ]},
    { name: '鹿児島県', cities: [
      { slug: 'kagoshima', name: '鹿児島市', available: true },
      { slug: 'kirishima', name: '霧島市', available: true },
      { slug: 'kanoya', name: '鹿屋市', available: true },
      { slug: 'satsumasendai', name: '薩摩川内市', available: true },
    ]},
    { name: '大分県', cities: [
      { slug: 'oita', name: '大分市', available: true },
      { slug: 'beppu', name: '別府市', available: true },
      { slug: 'nakatsu', name: '中津市', available: true },
      { slug: 'hita', name: '日田市', available: true },
    ]},
    { name: '宮崎県', cities: [
      { slug: 'miyazaki', name: '宮崎市', available: true },
      { slug: 'miyakonojo', name: '都城市', available: true },
      { slug: 'nobeoka', name: '延岡市', available: true },
      { slug: 'hyuga', name: '日向市', available: true },
    ]},
    { name: '佐賀県', cities: [
      { slug: 'saga', name: '佐賀市', available: true },
      { slug: 'karatsu', name: '唐津市', available: true },
      { slug: 'tosu', name: '鳥栖市', available: true },
      { slug: 'takeo', name: '武雄市', available: true },
    ]},
    { name: '長崎県', cities: [
      { slug: 'nagasaki', name: '長崎市', available: true },
      { slug: 'sasebo', name: '佐世保市', available: true },
      { slug: 'isahaya', name: '諫早市', available: true },
      { slug: 'omura', name: '大村市', available: true },
    ]},
    { name: '沖縄県', cities: [
      { slug: 'naha', name: '那覇市', available: true },
      { slug: 'okinawa_city', name: '沖縄市', available: true },
      { slug: 'uruma', name: 'うるま市', available: true },
      { slug: 'urasoe', name: '浦添市', available: true },
    ]},
  ],
}

function RankingMegaMenu({ onClose }: { onClose?: () => void }) {
  const [activeRegion, setActiveRegion] = useState<Region>('近畿')
  const [activePref, setActivePref] = useState<string>('大阪府')

  const prefs = regionData[activeRegion]
  const currentPref = prefs.find((p) => p.name === activePref) ?? prefs[0]

  const handleRegionChange = (r: Region) => {
    setActiveRegion(r)
    setActivePref(regionData[r][0]?.name ?? '')
  }

  return (
    <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', overflow: 'hidden', minWidth: '480px' }}>
      {/* 地方タブ */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', padding: '10px 12px 8px', background: '#F9FBF9', borderBottom: '1px solid #e0e0e0' }}>
        {regions.map((r) => (
          <button key={r} onClick={() => handleRegionChange(r)} style={{ fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', border: 'none', cursor: 'pointer', background: activeRegion === r ? '#2E7D52' : '#eee', color: activeRegion === r ? '#fff' : '#555', transition: 'all 0.15s' }}>
            {r}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', minHeight: '120px' }}>
        {/* 都道府県リスト */}
        <div style={{ width: '130px', flexShrink: 0, borderRight: '1px solid #e0e0e0', padding: '8px 0', background: '#FAFAFA' }}>
          {prefs.map((p) => (
            <button
              key={p.name}
              onClick={() => setActivePref(p.name)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '8px 14px', fontSize: '13px', fontWeight: activePref === p.name ? 700 : 400,
                color: activePref === p.name ? '#2E7D52' : '#444',
                background: activePref === p.name ? '#E8F5E9' : 'transparent',
                border: 'none', cursor: 'pointer',
                borderLeft: activePref === p.name ? '3px solid #2E7D52' : '3px solid transparent',
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* 市区町村リスト */}
        <div style={{ flex: 1, padding: '16px' }}>
          <p style={{ fontSize: '11px', color: '#999', marginBottom: '10px', fontWeight: 700 }}>
            {currentPref?.name}のランキング
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {currentPref?.cities.map((c) => (
              c.available ? (
                <Link key={c.slug} href={`/ranking/${c.slug}`} onClick={onClose}
                  style={{ textDecoration: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, color: '#2E7D52', background: '#E8F5E9', border: '1px solid #A5D6A7', display: 'inline-block' }}
                  className="hover:bg-green-100 transition"
                >
                  {c.name} →
                </Link>
              ) : (
                <span key={c.slug} style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#bbb', background: '#f5f5f5', border: '1px solid #e8e8e8', display: 'inline-block' }}>
                  {c.name}（準備中）
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [rankingOpen, setRankingOpen] = useState(false)
  const rankingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (rankingRef.current && !rankingRef.current.contains(e.target as Node)) {
        setRankingOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const [spRankingOpen, setSpRankingOpen] = useState(false)
  const [spActiveRegion, setSpActiveRegion] = useState<Region>('近畿')
  const [spActivePref, setSpActivePref] = useState<string>('大阪府')

  return (
    <header style={{ background: 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 60%, #3D9966 100%)', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      {/* 最上部バー */}
      <div style={{ background: '#F57C00' }}>
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/for-you"
            style={{ textDecoration: 'none' }}
            className="flex items-center justify-start gap-2 py-3 transition hover:opacity-90"
          >
            <span style={{ color: '#fff', fontSize: '16px' }}>👋</span>
            <span style={{ color: '#fff', fontSize: '16px', fontWeight: 700, letterSpacing: '0.04em' }}>
              はじめての方へ　―　このサイトはこんな方向け
            </span>
            <span style={{ color: '#fff', fontSize: '14px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.6)', borderRadius: '20px', padding: '2px 10px' }}>
              くわしく見る →
            </span>
          </Link>
        </div>
      </div>

      {/* 上部：ロゴ＋ナビ */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* ロゴ */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }} className="flex items-center gap-2 group">
          <span className="flex items-center justify-center rounded-lg text-xl" style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', flexShrink: 0 }} aria-hidden="true">
            🏡
          </span>
          <span className="flex flex-col leading-tight" style={{ whiteSpace: 'nowrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', letterSpacing: '0.1em' }}>NURSING HOME GUIDE</span>
            <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '0.02em' }}>やさしい老人ホームガイド</span>
          </span>
        </Link>

        {/* PC用ナビ */}
        <nav className="hidden md:flex items-center gap-0.5" style={{ flexShrink: 1, minWidth: 0 }}>
          {navItems.map((item) => (
            item.highlight ? (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }} className="transition hover:opacity-90">
                <span style={{ background: 'rgba(255,255,255,0.18)', color: '#FFF176', fontSize: '13px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,241,118,0.4)', display: 'inline-block', whiteSpace: 'nowrap' }}>
                  ✦ {item.label}
                </span>
              </Link>
            ) : (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none', whiteSpace: 'nowrap' }} className="group relative px-2 py-2 rounded-lg transition-all duration-200 hover:bg-white/10">
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500 }}>{item.label}</span>
                <span className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" style={{ background: 'rgba(255,255,255,0.6)' }} />
              </Link>
            )
          ))}

          {/* 市町村別ランキング ドロップダウン */}
          <div className="relative" style={{ flexShrink: 0 }} ref={rankingRef}>
            <button
              onClick={() => setRankingOpen(!rankingOpen)}
              className="px-2 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 flex items-center gap-1"
              style={{ color: '#FFF176', fontSize: '13px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              📍 市町村別ランキング ▾
            </button>
            {rankingOpen && (
              <div className="absolute left-0 top-full z-50" style={{ paddingTop: '4px' }}>
                <RankingMegaMenu onClose={() => setRankingOpen(false)} />
              </div>
            )}
          </div>

          {/* その他記事ドロップダウン */}
          <div className="relative group" style={{ flexShrink: 0 }}>
            <button className="px-2 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              その他記事 ▾
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block z-50" style={{ minWidth: '200px', paddingTop: '4px' }}>
              <div style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                {otherArticles.map((a) => (
                  <Link key={a.href} href={a.href} style={{ textDecoration: 'none', display: 'block', padding: '10px 16px', color: '#333', fontSize: '13px', borderBottom: '1px solid #f0f0f0' }} className="hover:bg-gray-50 transition">
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flexShrink: 0 }} className="ml-2">
            <span style={{ background: '#F57C00', color: '#fff', fontSize: '13px', fontWeight: 700, padding: '7px 13px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 2px 6px rgba(245,124,0,0.4)', whiteSpace: 'nowrap' }}>
              無料相談 →
            </span>
          </Link>
        </nav>

        {/* ハンバーガーボタン（SP） */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* SP用ドロワーメニュー */}
      {menuOpen && (
        <nav className="md:hidden" style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(4px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition" style={{ textDecoration: 'none', color: item.highlight ? '#FFF176' : '#fff', fontSize: '17px', fontWeight: item.highlight ? 700 : 400 }}>
                  {item.highlight ? `✦ ${item.label}` : item.label}
                </Link>
              </li>
            ))}

            {/* SP: 市町村別ランキング */}
            <li>
              <button
                onClick={() => setSpRankingOpen(!spRankingOpen)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition w-full text-left"
                style={{ color: '#FFF176', fontSize: '17px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                📍 市町村別ランキング {spRankingOpen ? '▴' : '▾'}
              </button>
              {spRankingOpen && (
                <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '10px', margin: '0 8px 8px', padding: '12px' }}>
                  {/* 地方タブ */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                    {regions.map((r) => (
                      <button key={r} onClick={() => { setSpActiveRegion(r); setSpActivePref(regionData[r][0]?.name ?? '') }}
                        style={{ fontSize: '12px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px', border: 'none', cursor: 'pointer', background: spActiveRegion === r ? '#2E7D52' : '#ddd', color: spActiveRegion === r ? '#fff' : '#555' }}>
                        {r}
                      </button>
                    ))}
                  </div>
                  {/* 都道府県タブ */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                    {regionData[spActiveRegion].map((p) => (
                      <button key={p.name} onClick={() => setSpActivePref(p.name)}
                        style={{ fontSize: '12px', padding: '3px 9px', borderRadius: '6px', border: '1px solid', cursor: 'pointer', fontWeight: spActivePref === p.name ? 700 : 400, background: spActivePref === p.name ? '#E8F5E9' : '#fff', color: spActivePref === p.name ? '#2E7D52' : '#555', borderColor: spActivePref === p.name ? '#A5D6A7' : '#ddd' }}>
                        {p.name}
                      </button>
                    ))}
                  </div>
                  {/* 市区町村 */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(regionData[spActiveRegion].find((p) => p.name === spActivePref) ?? regionData[spActiveRegion][0])?.cities.map((c) => (
                      c.available ? (
                        <Link key={c.slug} href={`/ranking/${c.slug}`} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, color: '#2E7D52', background: '#E8F5E9', border: '1px solid #A5D6A7' }}>
                          {c.name} →
                        </Link>
                      ) : (
                        <span key={c.slug} style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '13px', color: '#bbb', background: '#f5f5f5', border: '1px solid #e8e8e8' }}>
                          {c.name}（準備中）
                        </span>
                      )
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700, padding: '8px 16px 2px', letterSpacing: '0.08em' }}>その他記事</p>
              {otherArticles.map((a) => (
                <Link key={a.href} href={a.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-8 py-2 rounded-xl hover:bg-white/10 transition" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>
                  └ {a.label}
                </Link>
              ))}
            </li>
            <li className="mt-2">
              <Link href="/how-to-choose" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition hover:opacity-90" style={{ textDecoration: 'none', background: '#F57C00', fontSize: '18px', boxShadow: '0 2px 8px rgba(245,124,0,0.4)' }}>
                📋 無料で施設を探す →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
