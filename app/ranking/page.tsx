import type { Metadata } from 'next'
import Link from 'next/link'
import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

export const metadata: Metadata = {
  title: '老人ホーム検索サイト比較ランキング2026年版｜やさしい老人ホームガイド',
  description: '老人ホーム・介護施設を探せる検索サービスを徹底比較。施設数・使いやすさ・サポート体制の観点から5サービスをランキング形式で紹介します。',
  openGraph: {
    title: '老人ホーム検索サイト比較ランキング2026年版',
    description: '老人ホーム・介護施設を探せる検索サービスを徹底比較。施設数・使いやすさ・サポート体制からランキング形式で紹介します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'

const rankings = [
  {
    rank: 1,
    name: 'LIFULL介護',
    url: 'https://kaigo.homes.co.jp/',
    catch: '施設情報の充実度No.1。写真・動画・オンライン見学に対応',
    facilities: '57,000件以上',
    area: '全国',
    badge: '情報量◎',
    badgeColor: '#F57C00',
    stars: 4.8,
    pros: [
      '施設ごとの費用・スタッフ体制・医療対応の情報が豊富',
      'オンライン見学・資料請求・見学予約がまとめて申し込める',
      '専門スタッフによる無料電話相談が可能',
      'スマートフォンでも使いやすいUI',
    ],
    cons: ['首都圏の施設に比べると地方の情報量が少ない場合あり'],
    recommend: '施設の詳細情報をしっかり比較したい方に最適',
    isAffiliate: false,
  },
  {
    rank: 2,
    name: 'みんなの介護',
    url: NURSING_HOME_URL,
    catch: '施設数58,000件超。入居相談でお祝い金10万円プレゼント',
    facilities: '58,000件以上',
    area: '全国',
    badge: '編集部おすすめ',
    badgeColor: '#2E7D52',
    stars: 4.8,
    pros: [
      '掲載施設数が業界トップクラス（58,000件超）',
      '入居相談センター経由で入居するとお祝い金10万円がもらえる',
      '医療体制・認知症対応・看取りなど細かい条件で絞り込める',
      '介護に関するコラム・体験談コンテンツが豊富で勉強になる',
    ],
    cons: ['情報量が多いため、慣れるまで少し迷うことも'],
    recommend: 'はじめて施設を探す方・幅広く比較したい方におすすめ',
    isAffiliate: true,
  },
  {
    rank: 3,
    name: 'かいごDB',
    url: 'https://www.kaigodb.com/',
    catch: '30万件超の圧倒的な掲載数。通所・訪問系も一括検索',
    facilities: '30万件以上',
    area: '全国',
    badge: '施設数最多',
    badgeColor: '#1565C0',
    stars: 4.5,
    pros: [
      '老人ホームだけでなく、デイサービス・訪問介護も検索できる',
      '東証プライム上場のエス・エム・エス社が運営する信頼性の高さ',
      '掲載件数が業界最大級でニッチな地域も対応',
    ],
    cons: ['施設ごとの詳細情報・写真の掲載量はやや少なめ'],
    recommend: '在宅介護サービスも含めて幅広く比較したい方に',
    isAffiliate: false,
  },
  {
    rank: 4,
    name: 'ロイヤル介護',
    url: 'https://www.royal-kaigo.com/',
    catch: '360度パノラマ画像で施設内部を事前確認できる',
    facilities: '31,000件以上',
    area: '首都圏中心',
    badge: '見学代わりに◎',
    badgeColor: '#7B1FA2',
    stars: 4.4,
    pros: [
      '360度パノラマ写真で施設の雰囲気を事前に確認できる',
      '相談員が実際に訪問したレポートを掲載',
      '地域ごとの費用相場が一覧で確認できる',
      'オンライン相談にも対応',
    ],
    cons: ['首都圏以外はカバーエリアが限られる'],
    recommend: '実際に見学に行く前に施設内部を確認したい方に',
    isAffiliate: false,
  },
  {
    rank: 5,
    name: 'オアシスナビ',
    url: 'https://www.oasisnavi.com/',
    catch: 'ショートステイ・デイサービスも検索できる総合介護サービス検索',
    facilities: '約40,000件',
    area: '全国',
    badge: '多機能',
    badgeColor: '#00838F',
    stars: 4.2,
    pros: [
      '老人ホームだけでなく、短期入所（ショートステイ）も検索可能',
      '入居相談員による電話サポートあり',
      '全国の幅広い施設をカバー',
    ],
    cons: ['他サービスと比べると知名度がやや低め'],
    recommend: 'まずはショートステイで試したい方にも向いている',
    isAffiliate: false,
  },
]

function StarRating({ score }: { score: number }) {
  const full = Math.floor(score)
  const half = score % 1 >= 0.5
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ fontSize: '16px', color: i < full ? '#F57C00' : (i === full && half ? '#F57C00' : '#ddd') }}>
          {i < full ? '★' : (i === full && half ? '★' : '☆')}
        </span>
      ))}
      <span style={{ marginLeft: '4px', fontSize: '14px', fontWeight: 700, color: '#F57C00' }}>{score}</span>
    </span>
  )
}

export default function RankingIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
        {/* パンくず */}
        <nav style={{ fontSize: '13px', color: '#888', marginBottom: '16px' }}>
          <Link href="/" style={{ color: '#2E7D52', textDecoration: 'none' }}>トップ</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span>老人ホーム検索サイト比較ランキング</span>
        </nav>

        <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.4, marginBottom: '8px' }}>
          老人ホーム検索サイト<br />比較ランキング【2026年版】
        </h1>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>更新日：2026年3月 ｜ 編集部調査</p>

        {/* リード文 */}
        <div className="rounded-xl p-5 mb-8" style={{ background: '#F3F8F5', border: '1px solid #C8E6C9' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#333' }}>
            老人ホームや介護施設を探す際、どの検索サービスを使えばよいか迷う方も多いと思います。
            このページでは、主要な5つの老人ホーム検索サイトを<strong>施設数・情報の詳しさ・サポート体制</strong>の観点から比較しました。
            それぞれの特徴を把握したうえで、自分に合ったサービスを活用してみてください。
          </p>
        </div>

        {/* 比較早見表 */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #2E7D52', paddingLeft: '12px', marginBottom: '16px' }}>
          5サービス 比較早見表
        </h2>
        <div className="overflow-x-auto mb-10">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '480px' }}>
            <thead>
              <tr style={{ background: '#2E7D52', color: '#fff' }}>
                <th style={{ padding: '10px 10px', textAlign: 'center' }}>順位</th>
                <th style={{ padding: '10px 10px', textAlign: 'left' }}>サービス名</th>
                <th style={{ padding: '10px 10px', textAlign: 'center' }}>施設数</th>
                <th style={{ padding: '10px 10px', textAlign: 'center' }}>エリア</th>
                <th style={{ padding: '10px 10px', textAlign: 'center' }}>評価</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r, i) => (
                <tr key={r.rank} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '10px', textAlign: 'center', fontWeight: 800, color: r.rank <= 3 ? '#F57C00' : '#555', fontSize: '18px' }}>
                    {r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : `${r.rank}位`}
                  </td>
                  <td style={{ padding: '10px', fontWeight: 700, color: '#1A1A1A' }}>
                    {r.name}
                    {r.isAffiliate && (
                      <span style={{ marginLeft: '6px', fontSize: '11px', background: '#2E7D52', color: '#fff', borderRadius: '4px', padding: '1px 5px' }}>編集部おすすめ</span>
                    )}
                  </td>
                  <td style={{ padding: '10px', textAlign: 'center', color: '#555' }}>{r.facilities}</td>
                  <td style={{ padding: '10px', textAlign: 'center', color: '#555' }}>{r.area}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#F57C00' }}>{r.stars}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 各サービス詳細 */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #2E7D52', paddingLeft: '12px', marginBottom: '20px' }}>
          各サービスの詳細レビュー
        </h2>

        {rankings.map((r) => (
          <div key={r.rank} className="mb-10 rounded-2xl overflow-hidden" style={{ border: `2px solid ${r.badgeColor}30`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            {/* カードヘッダー */}
            <div style={{ background: `linear-gradient(135deg, ${r.badgeColor}15, ${r.badgeColor}08)`, borderBottom: `2px solid ${r.badgeColor}30`, padding: '16px 20px' }}>
              <div className="flex items-center gap-3 flex-wrap">
                <span style={{ fontSize: '32px', fontWeight: 900, color: r.rank <= 3 ? r.badgeColor : '#999', lineHeight: 1 }}>
                  {r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : `${r.rank}位`}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A' }}>{r.name}</span>
                    <span style={{
                      fontSize: '12px', fontWeight: 700, color: '#fff',
                      background: r.badgeColor, borderRadius: '4px', padding: '2px 8px', flexShrink: 0,
                    }}>{r.badge}</span>
                  </div>
                  <StarRating score={r.stars} />
                </div>
              </div>
              <p style={{ marginTop: '8px', color: '#555', fontSize: '14px', lineHeight: 1.7 }}>{r.catch}</p>
            </div>

            {/* カード本文 */}
            <div style={{ padding: '16px 20px', background: '#fff' }}>
              {/* スペック */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="rounded-lg px-3 py-2 text-center" style={{ background: '#F5F5F5', flexShrink: 0 }}>
                  <p style={{ fontSize: '11px', color: '#888', marginBottom: '2px' }}>掲載施設数</p>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A' }}>{r.facilities}</p>
                </div>
                <div className="rounded-lg px-3 py-2 text-center" style={{ background: '#F5F5F5', flexShrink: 0 }}>
                  <p style={{ fontSize: '11px', color: '#888', marginBottom: '2px' }}>対応エリア</p>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A' }}>{r.area}</p>
                </div>
              </div>

              {/* おすすめポイント */}
              <p style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '8px', fontSize: '14px' }}>✅ おすすめポイント</p>
              <ul style={{ marginBottom: '12px', paddingLeft: 0, listStyle: 'none' }}>
                {r.pros.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '14px', color: '#444', lineHeight: 1.7 }}>
                    <span style={{ color: '#2E7D52', flexShrink: 0 }}>◆</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* 気になる点 */}
              <p style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '6px', fontSize: '14px' }}>⚠️ 気になる点</p>
              <ul style={{ marginBottom: '16px', paddingLeft: 0, listStyle: 'none' }}>
                {r.cons.map((c, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px', fontSize: '14px', color: '#888', lineHeight: 1.7 }}>
                    <span style={{ flexShrink: 0 }}>・</span>
                    {c}
                  </li>
                ))}
              </ul>

              {/* こんな方に */}
              <div className="rounded-lg px-4 py-3 mb-4" style={{ background: `${r.badgeColor}12`, border: `1px solid ${r.badgeColor}30` }}>
                <p style={{ fontSize: '13px', color: r.badgeColor, fontWeight: 700 }}>💡 {r.recommend}</p>
              </div>

              {/* CTA */}
              {r.isAffiliate && AFFILIATE_ENABLED ? (
                <div className="flex flex-col items-center gap-1">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: '#2E7D52', color: '#fff', fontWeight: 700, fontSize: '16px',
                      borderRadius: '10px', padding: '14px 24px', textDecoration: 'none',
                      boxShadow: '0 3px 10px rgba(46,125,82,0.35)', width: '100%', maxWidth: '480px',
                    }}
                  >
                    無料で施設を比較する（最短1分） →
                  </a>
                  <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
                </div>
              ) : (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: '#F5F5F5', color: '#555', fontWeight: 600, fontSize: '14px',
                    borderRadius: '8px', padding: '10px 20px', textDecoration: 'none',
                    border: '1px solid #ddd',
                  }}
                >
                  {r.name} 公式サイトを見る →
                </a>
              )}
            </div>
          </div>
        ))}

        {/* まとめ */}
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', borderLeft: '4px solid #2E7D52', paddingLeft: '12px', marginBottom: '16px' }}>
          まとめ：どのサービスを選べばいい？
        </h2>
        <div className="rounded-xl p-5 mb-6" style={{ background: '#F3F8F5', border: '1px solid #C8E6C9' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#333', marginBottom: '12px' }}>
            はじめて老人ホームを探す方には、<strong>みんなの介護</strong>または<strong>LIFULL介護</strong>が特におすすめです。
            施設数が多く、絞り込み検索も充実しているため、希望条件に合った施設を見つけやすいです。
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {[
              { label: 'まず幅広く比較したい →', value: 'みんなの介護' },
              { label: '施設情報を詳しく見たい →', value: 'LIFULL介護' },
              { label: 'デイサービスも含め探したい →', value: 'かいごDB' },
              { label: '施設内部を画像で確認したい →', value: 'ロイヤル介護' },
              { label: 'ショートステイも検索したい →', value: 'オアシスナビ' },
            ].map((row, i) => (
              <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: '#2E7D52', fontWeight: 700, flexShrink: 0 }}>{row.label}</span>
                <span style={{ color: '#1A1A1A', fontWeight: 700 }}>{row.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 最終CTA */}
        {AFFILIATE_ENABLED && (
          <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
            <p style={{ fontWeight: 800, fontSize: '18px', color: '#1B5E20', marginBottom: '8px' }}>
              無料で施設を比較・資料請求する
            </p>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8, marginBottom: '16px' }}>
              全国58,000件以上の老人ホーム・介護施設を無料で一括比較できます。
              専門スタッフによる無料相談も対応しています。
            </p>
            <div className="flex flex-col items-center gap-1">
              <a
                href={NURSING_HOME_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#2E7D52', color: '#fff', fontWeight: 700, fontSize: '18px',
                  borderRadius: '12px', padding: '16px 32px', textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(46,125,82,0.4)', width: '100%', maxWidth: '480px',
                }}
              >
                無料で施設を比較する（最短1分） →
              </a>
              <span style={{ fontSize: '11px', color: '#888' }}>※広告（みんなの介護）</span>
            </div>
          </div>
        )}

        {/* 市町村別ランキング */}
        <div className="rounded-2xl p-6 mb-8 mt-4" style={{ background: '#F9FBF9', border: '2px solid #A5D6A7' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#1A1A1A', marginBottom: '6px', borderLeft: 'none', paddingLeft: 0 }}>
            📍 市町村別おすすめ施設ランキング
          </h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            地域ごとの評価・費用・特徴をもとに施設をランキング形式で紹介しています。
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/ranking/osaka', label: '大阪市', pref: '大阪府' },
              { href: '/ranking/yokohama', label: '横浜市', pref: '神奈川県' },
              { href: '/ranking/nagoya', label: '名古屋市', pref: '愛知県' },
              { href: '/ranking/kobe', label: '神戸市', pref: '兵庫県' },
              { href: '/ranking/kyoto', label: '京都市', pref: '京都府' },
              { href: '/ranking/fukuoka', label: '福岡市', pref: '福岡県' },
              { href: '/ranking/kitakyushu', label: '北九州市', pref: '福岡県' },
              { href: '/ranking/kawasaki', label: '川崎市', pref: '神奈川県' },
              { href: '/ranking/saitama', label: 'さいたま市', pref: '埼玉県' },
              { href: '/ranking/hiroshima', label: '広島市', pref: '広島県' },
            ].map((city) => (
              <Link key={city.href} href={city.href} style={{ textDecoration: 'none' }}>
                <div className="transition hover:opacity-80" style={{ background: '#E8F5E9', border: '1px solid #A5D6A7', borderRadius: '10px', padding: '10px 16px', textAlign: 'center', minWidth: '100px' }}>
                  <p style={{ fontSize: '11px', color: '#666', marginBottom: '2px' }}>{city.pref}</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#2E7D52' }}>{city.label} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 関連ページ */}
        <div className="flex flex-col gap-3">
          {[
            { href: '/types', label: '老人ホームの種類を詳しく知る', icon: '🏠' },
            { href: '/cost', label: '費用・料金の目安を確認する', icon: '💴' },
            { href: '/how-to-choose', label: '失敗しない施設の選び方', icon: '✅' },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:opacity-90" style={{ background: '#F5F5F5', border: '1px solid #ddd' }}>
                <span style={{ fontSize: '20px' }}>{link.icon}</span>
                <p style={{ color: '#2E7D52', fontWeight: 700, fontSize: '14px' }}>{link.label} →</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  )
}
