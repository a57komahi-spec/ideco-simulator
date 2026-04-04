'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

const INHERITANCE_URL  = 'https://www.souzoku-pro.net/'
const REAL_ESTATE_URL  = 'https://www.home4u.jp/'

const summaryItems = [
  '財産の一覧を整理するだけで<mark class="highlight">家族の負担が大幅に減ります</mark>',
  '認知症が進む前に<mark class="highlight">家族と話し合い</mark>をしておくことが重要です',
  '遺言・家族信託は<mark class="highlight">専門家への相談が前提</mark>です（一般論のみ紹介）',
  'まず「財産リストを作る」という<mark class="highlight">小さな一歩</mark>から始めましょう',
]

const assetItems = [
  { icon: '🏦', category: '預貯金', items: ['銀行名・支店名・口座番号', 'ネットバンクのID・ログイン情報', '定期預金の満期・金額'] },
  { icon: '🏠', category: '不動産', items: ['土地・建物の場所・面積', '固定資産税の納税通知書', 'ローン残高・金融機関名'] },
  { icon: '📋', category: '保険', items: ['生命保険・医療保険の証券番号', '保険会社名・受取人', '現在の解約返戻金'] },
  { icon: '📈', category: '有価証券', items: ['株式・投資信託の証券会社名', '口座番号・残高の目安', 'NISA・iDeCo口座の有無'] },
  { icon: '📝', category: '負債', items: ['住宅ローン・カーローンの残高', 'クレジットカードの枚数・会社名', '連帯保証人になっているものがないか'] },
  { icon: '📱', category: 'デジタル資産', items: ['メールアドレス・SNSアカウント', 'スマホのパスコード', 'サブスクリプションサービスの一覧'] },
]

const troubles = [
  { emoji: '😤', title: '誰が施設費用を負担するかでもめた', desc: '兄弟間で費用の分担が決まっておらず、入居後に揉め事になるケースが多い。' },
  { emoji: '😰', title: '親の通帳・印鑑がどこにあるかわからない', desc: '緊急入院・入居が必要になったとき、必要な書類や口座にアクセスできず困る。' },
  { emoji: '😓', title: '認知症になってから不動産の売却ができなくなった', desc: '本人の判断能力がないと名義変更・売却が原則できない。成年後見制度が必要になる。' },
  { emoji: '🤯', title: '遺言書が複数見つかって有効性がわからなくなった', desc: '手書きの遺言書が複数出てきたり、日付が不明で無効になるケースがある。' },
]

const consultCases = [
  '相続人の中に連絡が取れない人がいる',
  '不動産が複数あり、分け方が複雑',
  '多額の負債がある可能性がある',
  '認知症や障害がある相続人がいる',
  '遺言書を作りたい',
  '家族信託の設定を検討している',
]

const faqs = [
  { q: '遺言書は必ず必要ですか？', a: 'すべての方に必要ではありません。ただし、「特定の人に財産を残したい」「法定相続通りではなく分け方を変えたい」という場合は遺言書が有効です。作成には公証役場や弁護士・司法書士への相談をおすすめします。' },
  { q: '家族信託とは何ですか？', a: '財産の管理を信頼できる家族に委ねる仕組みです。認知症になった後でも財産管理を続けられるメリットがあります。設定には専門家（弁護士・司法書士）への相談と費用が必要です。' },
  { q: '相続放棄はどんなときにしますか？', a: '負債が財産より多い場合に、相続を放棄して借金を引き継がないようにする手続きです。相続を知った日から3ヶ月以内に家庭裁判所に申し立てる必要があります。' },
  { q: '兄弟間で相続の話をするのが難しいです', a: '第三者（弁護士・司法書士・ファイナンシャルプランナーなど）を交えて話し合うと感情的にならずにまとまりやすいです。早めに専門家に相談することをおすすめします。' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-2">
      <button
        className="w-full text-left px-5 font-bold text-base bg-white hover:bg-gray-50 transition flex items-center justify-between"
        style={{ minHeight: '60px', paddingTop: '14px', paddingBottom: '14px' }}
        onClick={() => setOpen(!open)}
      >
        <span>Q. {q}</span>
        <span className="text-primary text-xl flex-shrink-0 ml-3">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-base border-t border-gray-200" style={{ background: '#F9FAFB', lineHeight: 1.8 }}>
          A. {a}
        </div>
      )}
    </div>
  )
}

export default function InheritancePage() {
  return (
    <>
      <Breadcrumb items={[
        { label: '入居前の準備', href: '/prepare' },
        { label: '相続の準備' },
      ]} />
      <Link href="/prepare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2E7D52', fontSize: '14px', fontWeight: 700, textDecoration: 'none', marginBottom: '16px' }}>
        ← 入居前の準備まとめに戻る
      </Link>

      <div className="rounded-2xl mb-8 p-7" style={{ background: 'linear-gradient(135deg, #BF360C 0%, #E65100 100%)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>📝 INHERITANCE</p>
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.45, marginBottom: '12px' }}>
          老人ホーム入居前に<br />進めたい相続準備ガイド
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.75 }}>
          「相続は亡くなってから考えること」と思っていませんか？実は<strong style={{ color: '#FFF176' }}>元気なうちに準備するほど家族の負担が減り</strong>、トラブルも防げます。
          今日からできる相続準備をわかりやすく解説します。
        </p>
      </div>

      <SummaryBox items={summaryItems} />

      {/* 注意書き */}
      <div className="rounded-xl px-5 py-3 mb-8" style={{ background: '#FFF3E0', border: '1px solid #FFCC80' }}>
        <p style={{ fontSize: '13px', color: '#795548' }}>
          ⚠ このページは一般的な情報の提供を目的としています。税務・法律の個別判断については、必ず専門家（弁護士・司法書士・税理士）にご相談ください。
        </p>
      </div>

      {/* なぜ入居前に相続準備が必要か */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">入居のタイミングが「相続準備」の大切な節目</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: '🧠', title: '認知症になる前に', desc: '施設入居後に認知症が進むと、本人の意思確認ができなくなります。元気なうちに財産の一覧と意向を整理しておきましょう。', color: '#6A1B9A', bg: '#F3E5F5' },
          { icon: '👨‍👩‍👧', title: '家族が集まりやすい', desc: '施設探しのために兄弟・親族が集まることが多く、相続についても話しやすいタイミングです。', color: '#1565C0', bg: '#E3F2FD' },
          { icon: '🏠', title: '不動産の判断と連動', desc: '自宅をどうするかの判断が、相続や税金の計画にも影響します。同時に整理するのが効率的です。', color: '#E65100', bg: '#FFF3E0' },
        ].map(item => (
          <div key={item.title} className="rounded-2xl p-4" style={{ background: item.bg, border: `1px solid ${item.color}33` }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '8px' }}>{item.icon}</span>
            <p style={{ fontWeight: 800, fontSize: '15px', color: item.color, marginBottom: '6px' }}>{item.title}</p>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.7 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 財産リスト */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">まず「財産リスト」を作ることから始めよう</h2>
      <p className="text-base mb-5">難しいことは不要です。以下の項目を紙やノートにメモするだけで、家族への大きな贈り物になります。</p>
      <div className="space-y-3 mb-8">
        {assetItems.map((cat) => (
          <div key={cat.category} className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#F9FAFB', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '20px' }}>{cat.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '16px' }}>{cat.category}</span>
            </div>
            <div className="px-4 py-3">
              {cat.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i < cat.items.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <span style={{ width: '18px', height: '18px', border: '2px solid #E65100', borderRadius: '4px', flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: '14px', color: '#333' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CTABox compact />

      {/* よくある家族トラブル */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">準備が遅れた時によくある家族トラブル</h2>
      <div className="space-y-3 mb-8">
        {troubles.map((t, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
            <span style={{ fontSize: '28px', flexShrink: 0 }}>{t.emoji}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '15px', marginBottom: '4px', color: '#C62828' }}>{t.title}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 今すぐできる3ステップ */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">今日からできる相続準備 3ステップ</h2>
      <div className="space-y-4 mb-8">
        {[
          { step: '01', title: '財産リストを書き出す', desc: '通帳・保険証券・不動産の書類を集めて、ノートや表にまとめましょう。完璧でなくてOKです。まず書き出すことが大切。', color: '#2E7D52' },
          { step: '02', title: '家族に財産の保管場所を伝える', desc: '財産リストのコピーを家族に渡すか、保管場所を伝えるだけで十分です。突然の入院・入居時に家族が困りません。', color: '#1565C0' },
          { step: '03', title: '複雑な問題は専門家に相談する', desc: '遺言書・家族信託・相続税の計算など、判断が難しい部分は弁護士・司法書士・税理士に相談しましょう。初回無料の窓口もあります。', color: '#E65100' },
        ].map(item => (
          <div key={item.step} className="flex items-start gap-4 rounded-2xl p-5" style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <span
              className="flex items-center justify-center rounded-xl font-bold text-white flex-shrink-0"
              style={{ width: '44px', height: '44px', background: item.color, fontSize: '15px' }}
            >
              {item.step}
            </span>
            <div>
              <p style={{ fontWeight: 800, fontSize: '17px', color: item.color, marginBottom: '6px' }}>{item.title}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 専門家に相談すべきケース */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">こんな場合は専門家への相談を</h2>
      <div className="rounded-2xl p-5 mb-10" style={{ background: '#FFF3E0', border: '2px solid #F57C00' }}>
        <div className="grid md:grid-cols-2 gap-3">
          {consultCases.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: '#E65100', fontWeight: 700, flexShrink: 0 }}>⚠</span>
              <p style={{ fontSize: '14px', color: '#5D4037' }}>{item}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#795548', marginTop: '14px' }}>
          ※上記に該当する方は、弁護士・司法書士・税理士への早めの相談をおすすめします。
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">よくある質問</h2>
      <div className="mb-10">
        {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>

      <a href={INHERITANCE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
        <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#E65100' }}>
          <span style={{ fontSize: '24px' }}>📝</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>相続の無料相談を申し込む →</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>弁護士・司法書士に無料で相談できます</p>
          </div>
        </div>
      </a>
      <a href={REAL_ESTATE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
        <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#2E7D52' }}>
          <span style={{ fontSize: '24px' }}>🏠</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>不動産の無料査定もあわせて →</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>相続と不動産は一緒に整理するのが効率的です</p>
          </div>
        </div>
      </a>

      <h2 className="text-lg font-bold mb-3 text-primary">他のテーマも読む</h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { href: '/prepare/real-estate', label: '自宅・不動産の整理', emoji: '🏠' },
          { href: '/prepare/consultation', label: '相談先の選び方', emoji: '💬' },
          { href: '/prepare/insurance', label: '保険の見直し', emoji: '📋' },
          { href: '/prepare', label: '準備まとめに戻る', emoji: '↩' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div className="rounded-xl px-4 py-3 flex items-center gap-2 transition hover:shadow-md" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '18px' }}>{item.emoji}</span>
              <span style={{ fontWeight: 600, fontSize: '13px', color: '#2E7D52' }}>{item.label} →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
