'use client'

import { useState } from 'react'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

const summaryItems = [
  '入居条件は施設タイプによって異なります（<mark class="highlight">要介護度</mark>が重要です）',
  '費用は<mark class="highlight">介護保険</mark>を活用することで軽減できます',
  '家族の面会はほとんどの施設で<mark class="highlight">自由に</mark>できます',
  'まずは<mark class="highlight">無料の相談窓口</mark>に相談するのが一番早い方法です',
]

type Tag = '公的' | '民間' | '共通' | '特養' | '認知症'

const tagStyle: Record<Tag, { bg: string; color: string; border: string }> = {
  '公的':  { bg: '#E8F5E9', color: '#2E7D52', border: '#A5D6A7' },
  '民間':  { bg: '#FFF3E0', color: '#E65100', border: '#FFCC80' },
  '共通':  { bg: '#F3F4F6', color: '#555',    border: '#d1d5db' },
  '特養':  { bg: '#E8F5E9', color: '#1B5E37', border: '#A5D6A7' },
  '認知症':{ bg: '#F3E5F5', color: '#7B1FA2', border: '#CE93D8' },
}

const faqData: {
  category: string
  questions: { q: string; a: string; tags: Tag[] }[]
}[] = [
  {
    category: '入居条件・資格について',
    questions: [
      {
        q: '老人ホームに入るには何歳からですか？',
        a: '一般的には65歳以上が対象ですが、施設によって異なります。有料老人ホームやサービス付き高齢者向け住宅は60歳以上から入居できる場合もあります。',
        tags: ['共通'],
      },
      {
        q: '要介護認定を受けていないと入居できませんか？',
        a: '施設によって異なります。特別養護老人ホームは要介護3以上が必要ですが、住宅型有料老人ホームやサービス付き高齢者向け住宅は要介護認定がなくても入居できます。',
        tags: ['特養', '民間'],
      },
      {
        q: '認知症でも入居できますか？',
        a: 'はい、認知症の方でも入居できる施設はたくさんあります。特にグループホームは認知症の方を専門に受け入れています。施設によって対応できる認知症の程度が異なりますので、事前に確認しましょう。',
        tags: ['認知症', '民間'],
      },
      {
        q: '身元保証人がいなくても入居できますか？',
        a: '多くの施設では身元保証人を求めています。ただし、最近は身元保証サービスを利用することで対応できる施設も増えています。施設に相談してみましょう。',
        tags: ['共通'],
      },
    ],
  },
  {
    category: '費用・支払いについて',
    questions: [
      {
        q: '年金だけで老人ホームに入れますか？',
        a: '年金の額によります。月額10〜15万円程度であれば、公的施設（特養など）は年金のみで入居できる場合があります。月額15万円以上の民間施設は貯蓄の取り崩しが必要になることが多いです。',
        tags: ['公的', '民間'],
      },
      {
        q: '介護保険はどのくらい使えますか？',
        a: '要介護度によって使える限度額が異なります。要介護3の場合、月額約27万円まで介護保険が使えます（自己負担は1〜3割）。ただし、食費・居住費などは別途かかります。',
        tags: ['共通'],
      },
      {
        q: '入居一時金とは何ですか？返ってきますか？',
        a: '入居時に払う保証金のようなものです。入居期間に応じて償却（少しずつ消化）されます。早期退去した場合は、残った分が返金される「初期償却」という仕組みがあります。契約時に必ず確認しましょう。',
        tags: ['民間'],
      },
      {
        q: '費用が払えなくなったらどうなりますか？',
        a: '施設によって対応が異なります。退去が必要になる場合もあります。生活保護を受給している方でも入居できる施設もあります。困ったときは、市区町村の福祉窓口に相談しましょう。',
        tags: ['共通'],
      },
    ],
  },
  {
    category: '生活・サービスについて',
    questions: [
      {
        q: '持ち込める家具・私物はありますか？',
        a: '施設によって異なりますが、一般的にテレビや小家具、日用品などは持ち込み可能です。大型家具や電気製品は事前に確認が必要です。施設見学時に確認しましょう。',
        tags: ['共通'],
      },
      {
        q: 'ペットは連れていけますか？',
        a: '多くの施設ではペットの持ち込みは禁止されています。ただし、最近はペット可の施設も少しずつ増えています。ペットを飼っている方は、ペット対応施設を探しましょう。',
        tags: ['民間'],
      },
      {
        q: '外出や外泊はできますか？',
        a: 'はい、ほとんどの施設で外出・外泊は可能です。事前に施設に連絡し、許可を得る必要があります。外泊中の介護サービスは施設によって対応が異なります。',
        tags: ['共通'],
      },
    ],
  },
  {
    category: '家族の面会・関わり方について',
    questions: [
      {
        q: '面会はいつでもできますか？',
        a: 'ほとんどの施設で面会時間が設けられています（例：9時〜18時）。感染症対策として面会制限がある場合もあります。事前に施設に確認しましょう。',
        tags: ['共通'],
      },
      {
        q: '家族は施設の運営に口を出せますか？',
        a: 'はい、施設には「家族会」や「運営懇談会」が設けられていることが多く、意見を伝えることができます。苦情や要望がある場合は、まず施設の相談窓口に伝えましょう。',
        tags: ['共通'],
      },
      {
        q: '入居者本人の希望は尊重されますか？',
        a: 'はい、介護保険法では利用者の意思が尊重されることが原則とされています。ただし、安全上の理由から制限がある場合もあります。施設の方針を事前に確認しましょう。',
        tags: ['共通'],
      },
    ],
  },
  {
    category: '手続き・書類について',
    questions: [
      {
        q: '申し込みから入居まで、どのくらいかかりますか？',
        a: '民間施設では早くて2〜4週間で入居できる場合があります。公的施設（特養）は待機期間が数ヶ月〜数年かかることもあります。早めに行動することが大切です。',
        tags: ['公的', '民間'],
      },
      {
        q: '入居に必要な書類は何ですか？',
        a: '一般的に、介護保険証、医師の診断書・健康診断書、住民票、身元保証人の書類などが必要です。施設によって異なりますので、申し込み時に確認しましょう。',
        tags: ['共通'],
      },
    ],
  },
]

function TagBadge({ tag }: { tag: Tag }) {
  const s = tagStyle[tag]
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        fontSize: '11px',
        fontWeight: 800,
        padding: '1px 7px',
        borderRadius: '20px',
        flexShrink: 0,
        letterSpacing: '0.02em',
      }}
    >
      {tag}
    </span>
  )
}

function AccordionItem({ q, a, tags }: { q: string; a: string; tags: Tag[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-2">
      <button
        className="w-full text-left px-5 flex items-center gap-3 font-bold text-base bg-white hover:bg-gray-50 transition-colors"
        style={{ minHeight: '60px', paddingTop: '12px', paddingBottom: '12px' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="flex gap-1 flex-shrink-0 mt-0.5">
            {tags.map(t => <TagBadge key={t} tag={t} />)}
          </div>
          <span style={{ lineHeight: 1.5 }}>Q. {q}</span>
        </div>
        <span className="text-primary text-xl flex-shrink-0 ml-2">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-base bg-summary-bg border-t border-gray-200">
          <p style={{ lineHeight: 1.75 }}>A. {a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'よくある質問' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老人ホームに関するよくある質問（FAQ）
      </h1>
      <SummaryBox items={summaryItems} />

      {/* 凡例 */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl px-5 py-3 mb-8" style={{ background: '#F9FAFB', border: '1px solid #e5e7eb' }}>
        <span className="text-sm font-bold text-gray-500">タグの見方：</span>
        {(['公的', '民間', '特養', '認知症', '共通'] as Tag[]).map(t => (
          <TagBadge key={t} tag={t} />
        ))}
        <span className="text-xs text-gray-400">― 質問が当てはまる施設タイプを示しています</span>
      </div>

      {faqData.map((section) => (
        <section key={section.category} className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
            {section.category}
          </h2>
          {section.questions.map((item) => (
            <AccordionItem key={item.q} q={item.q} a={item.a} tags={item.tags} />
          ))}
        </section>
      ))}

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">
        まだ疑問が解決しない方へ
      </h2>
      <CTABox />
    </>
  )
}
