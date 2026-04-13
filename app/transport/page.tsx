import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '老人ホーム・介護施設の送迎サービス完全ガイド｜デイサービス・通院・入退院の移動を解決',
  description: 'デイサービスの送迎・通院の移動・入居時の引越し送迎など、介護における「移動の悩み」を一挙解決。介護タクシー・福祉車両・施設送迎の違いも解説します。',
  openGraph: {
    title: '老人ホーム・介護施設の送迎サービス完全ガイド',
    description: 'デイサービスの送迎・通院移動・介護タクシーなど介護の移動の悩みを解決します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  'デイサービスの送迎は<mark class="highlight">原則として無料・施設が担当</mark>します',
  '通院には<mark class="highlight">介護タクシー（福祉タクシー）</mark>が利用でき、介護保険が使える場合があります',
  '<mark class="highlight">施設入居時の引越し移動</mark>は一般引越し業者より介護専門業者が安心',
  '送迎サービスの充実度は<mark class="highlight">施設選びの重要な判断基準</mark>の一つです',
]

const services = [
  {
    icon: '🚌',
    title: 'デイサービス（通所介護）の送迎',
    color: '#E8F5E9', border: '#2E7D52', labelColor: '#2E7D52',
    cost: '原則無料（施設のサービスに含まれる）',
    who: 'デイサービスの送迎専任スタッフ',
    content: [
      '朝に自宅まで迎えに来て、夕方に送り届けてくれる',
      '車椅子・ストレッチャー対応の福祉車両を使用',
      '送迎時間・場所のスケジュールは施設が調整',
      '体調不良時は電話一本でキャンセル可能',
    ],
    note: '送迎エリアは施設によって異なります。見学時に「自宅まで送迎できますか？」と確認しましょう。',
  },
  {
    icon: '🚖',
    title: '通院のための介護タクシー',
    color: '#E3F2FD', border: '#1A5E9E', labelColor: '#1A5E9E',
    cost: '介護保険適用の場合：1〜3割負担／自費の場合：1,000円〜（初乗り）',
    who: '訪問介護事業者・一般タクシー事業者',
    content: [
      '要介護認定を受けた方は、訪問介護の「通院等乗降介助」として介護保険が使える',
      '車椅子・寝たまま乗れるストレッチャー対応車両もある',
      '乗降時の介助・待機・院内の移動補助もセットで依頼できる',
      '介護保険対象外（買い物・散歩など）は自費になる',
    ],
    note: '介護保険が使えるのは「通院・役所・介護施設への移動」が主な対象です。自費タクシーとの違いをケアマネに確認しましょう。',
  },
  {
    icon: '🚐',
    title: '入居・退居時の移送サービス',
    color: '#FFF3E0', border: '#F57C00', labelColor: '#E65100',
    cost: '20,000〜50,000円程度（距離・荷物量による）',
    who: '介護専門の引越し業者・福祉輸送事業者',
    content: [
      '施設への入居・退居・施設間の転居に対応',
      '医療機器（酸素ボンベなど）の搬送も可能な業者がある',
      '横になったまま移送できる寝台車タイプも',
      '一般引越し業者より高齢者・介護への対応が丁寧',
    ],
    note: '病院から施設への直接移動には「病院→施設の間の送迎は誰が手配するか」を事前に確認しておきましょう。',
  },
  {
    icon: '🚑',
    title: '緊急時・救急への対応',
    color: '#F3E5F5', border: '#7B1FA2', labelColor: '#7B1FA2',
    cost: '救急車：無料 ／ 民間救急：15,000〜50,000円程度',
    who: '消防署・民間救急事業者',
    content: [
      '生命の危険がある場合は迷わず119番へ',
      '緊急だが命に関わらない転送（施設→病院への安定搬送）は民間救急が対応',
      '施設入居中の緊急対応は施設スタッフが対応し救急車を呼んでくれる',
      '自宅にいる場合はかかりつけ医・地域包括支援センターに連絡',
    ],
    note: '民間救急は予約制で、緊急搬送ではなく「安定した状態での転院・施設移送」に使います。',
  },
]

const checkPoints = [
  { q: '自宅まで送迎してもらえますか？', why: 'エリア外の場合は自費で移動手段を確保する必要があります' },
  { q: '送迎は施設スタッフが行いますか？', why: '外部委託の場合、万一のときの責任体制を確認しましょう' },
  { q: '車椅子・寝たまま乗れる車両はありますか？', why: '今は歩けても、将来必要になる可能性を考えて確認を' },
  { q: '通院の付き添い・送迎はサービスに含まれますか？', why: '別途費用がかかる場合、月額コストに影響します' },
  { q: '夜間・休日の外出・通院はどうなりますか？', why: 'スタッフ不在時の対応を事前に確認しておきましょう' },
]

export default function TransportPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老人ホーム・介護施設の送迎サービス完全ガイド' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホーム・介護施設の送迎サービス完全ガイド
        <span className="block text-lg md:text-xl mt-1">デイサービス・通院・入退院の移動を解決</span>
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/24.png"
          alt="介護スタッフが車椅子の高齢者を車に乗せるサポートをしているイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base">「病院に連れて行くのが大変」「デイサービスの送迎はどうなっているの？」「施設に入居する日の移動はどうすれば？」——介護における「移動の悩み」は意外と多いです。このページで一挙に解決します。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-6 mt-10 text-primary">シーン別・送迎サービスの種類と費用</h2>
      <div className="space-y-8 mb-12">
        {services.map((svc, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${svc.border}` }}>
            <div className="px-5 py-4 flex items-center gap-3" style={{ backgroundColor: svc.color }}>
              <span style={{ fontSize: '30px' }}>{svc.icon}</span>
              <div>
                <h3 className="font-bold text-lg" style={{ color: '#1A1A1A', borderLeft: 'none', paddingLeft: 0 }}>{svc.title}</h3>
                <p className="text-sm font-bold" style={{ color: svc.labelColor }}>費用：{svc.cost}</p>
              </div>
            </div>
            <div className="px-5 py-4 bg-white">
              <p className="text-xs font-bold text-gray-500 mb-2">担当：{svc.who}</p>
              <ul className="space-y-1 mb-4">
                {svc.content.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="font-bold flex-shrink-0" style={{ color: svc.labelColor }}>◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-lg px-4 py-3" style={{ backgroundColor: svc.color }}>
                <p className="text-sm font-bold" style={{ color: svc.labelColor }}>💡 {svc.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">施設見学時に「送迎」について確認すること</h2>
      <div className="space-y-2 mb-10">
        {checkPoints.map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <p className="font-bold text-base mb-1">□ {item.q}</p>
            <p className="text-sm text-gray-600">→ {item.why}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">遠距離介護で「送迎が心配」な方へ</h2>
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFC107' }}>
        <p className="text-base mb-3">離れて暮らしているために「通院の付き添いができない」という悩みをお持ちの方は多いです。施設に入居していれば、スタッフが通院の手配・付き添いをしてくれる場合があります。</p>
        <p className="text-base font-bold">「通院サポートは含まれますか？」は施設選びの重要な質問の一つです。見学時に必ず確認しましょう。</p>
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#1B5E20' }}>送迎・通院サポート付きの施設を探す</p>
          <p className="text-sm mb-4 text-gray-700">施設ごとの送迎エリア・通院サポートを比較して資料請求できます。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#2E7D52',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(46,125,82,0.4)',width:'100%',maxWidth:'480px' }}>
              送迎対応施設を無料で探す →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/how-to-choose', label: '施設選びのポイント7つ', icon: '✅' },
          { href: '/for-you', label: '遠くて介護できない方向けのガイド', icon: '📞' },
          { href: '/care-items', label: '移動補助グッズ（杖・車椅子など）を確認する', icon: '🛒' },
        ].map(link => (
          <Link key={link.href} href={link.href} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white" style={{ border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontSize: '20px' }}>{link.icon}</span>
            <p className="font-bold text-sm" style={{ color: '#2E7D52' }}>{link.label} →</p>
          </Link>
        ))}
      </div>
      <CTABox />
    </>
  )
}
