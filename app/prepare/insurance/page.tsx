'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'

const INSURANCE_URL    = 'https://www.hokennomadoguchi.com/'
const NURSING_HOME_URL = 'https://www.minnanokaigo.com/'

const summaryItems = [
  '老人ホームに入ると<mark class="highlight">不要になる保険</mark>が出てくることがあります',
  '入院・医療系の保険は施設生活では<mark class="highlight">重複しやすい</mark>ため要チェックです',
  '保険証券を家族と<mark class="highlight">共有しておく</mark>だけで後のトラブルを防げます',
  '見直しは<mark class="highlight">無料の相談窓口</mark>で専門家に相談できます',
]

const insuranceTypes = [
  {
    icon: '🏥',
    name: '医療保険',
    role: '入院・手術の費用を補償',
    afterEntry: '施設で医療行為を受けることが減るため、重複しやすい',
    action: '入院日額や特約の内容を確認。不要なものは解約・減額を検討',
    priority: '高',
    priorityColor: '#C62828',
  },
  {
    icon: '♿',
    name: '民間介護保険',
    role: '介護状態になったときに一時金や年金を受け取れる',
    afterEntry: '公的介護保険と組み合わせることで施設費用の補填に使える',
    action: '受取条件と給付額を確認。施設費用の不足分を補えるか試算する',
    priority: '確認必須',
    priorityColor: '#1565C0',
  },
  {
    icon: '⏳',
    name: '終身保険・養老保険',
    role: '死亡時の保険金・満期時の返戻金',
    afterEntry: '解約返戻金を施設費用の資金として活用できる場合がある',
    action: '現在の解約返戻金を確認。継続か活用かを検討',
    priority: '中',
    priorityColor: '#6A1B9A',
  },
  {
    icon: '🚑',
    name: 'がん保険',
    role: 'がんと診断された場合の一時金・治療費補償',
    afterEntry: '施設生活でも引き続き有効。ただし重複した医療保険の整理は必要',
    action: '医療保険との重複部分を整理する',
    priority: '低',
    priorityColor: '#2E7D52',
  },
]

const checkItems = [
  { icon: '📄', text: '今持っている保険の証券をすべて集める' },
  { icon: '💰', text: '毎月の保険料の合計を計算する' },
  { icon: '📋', text: '各保険の「いつ・いくら受け取れるか」を確認する' },
  { icon: '🔍', text: '老人ホームの月額費用と保険の受取額を比較する' },
  { icon: '👨‍👩‍👧', text: '保険証券の保管場所を家族に伝えておく' },
  { icon: '📞', text: '不明な点は保険会社か無料相談窓口に問い合わせる' },
]

const faqs = [
  { q: '老人ホームに入ったら生命保険は解約すべきですか？', a: '一概にはいえません。終身保険の解約返戻金を施設費用に活用する方法もあります。また、残された家族への死亡保障が必要な場合は継続が合理的です。まず現在の解約返戻金と必要な保障額を確認しましょう。' },
  { q: '保険の見直しは誰に相談すればよいですか？', a: '保険ショップや「保険の窓口」などの無料相談窓口で、複数の保険会社を比較しながら相談できます。特定の保険会社の代理店よりも、複数社を扱う窓口の方が中立的なアドバイスを受けやすいです。' },
  { q: '認知症になったら保険の手続きができなくなりますか？', a: 'はい、判断能力が失われると保険の解約・変更手続きが難しくなります。元気なうちに証券の整理と家族への共有を行っておくことが大切です。' },
  { q: '公的介護保険と民間介護保険の違いは何ですか？', a: '公的介護保険は要介護認定を受けた方が介護サービスを1〜3割負担で使える制度です。民間介護保険は保険会社が販売する商品で、一時金や年金を受け取ることができます。両者を組み合わせることで施設費用の自己負担を抑えられます。' },
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

export default function InsurancePage() {
  return (
    <>
      <Breadcrumb items={[
        { label: '入居前の準備', href: '/prepare' },
        { label: '保険の見直し' },
      ]} />
      <Link href="/prepare" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2E7D52', fontSize: '14px', fontWeight: 700, textDecoration: 'none', marginBottom: '16px' }}>
        ← 入居前の準備まとめに戻る
      </Link>

      <div className="rounded-2xl mb-8 p-7" style={{ background: 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 100%)' }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', letterSpacing: '0.1em', marginBottom: '8px' }}>📋 INSURANCE</p>
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, lineHeight: 1.45, marginBottom: '12px' }}>
          老人ホーム入居前に<br />見直したい保険ガイド
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.75 }}>
          老人ホームに入居すると生活環境が変わり、今の保険が「無駄になる」または「足りない」部分が変わります。
          入居前に一度整理しておきましょう。
        </p>
      </div>

      <SummaryBox items={summaryItems} />

      {/* なぜ見直しが必要か */}
      <div className="rounded-2xl p-5 mb-8" style={{ background: '#F3E5F5', border: '2px solid #CE93D8' }}>
        <p style={{ fontWeight: 800, fontSize: '17px', color: '#4A148C', marginBottom: '8px' }}>💡 入居前に保険を見直す3つの理由</p>
        <div className="space-y-3">
          {[
            { num: '①', text: '施設での医療・介護サービスと民間保険が重複し、毎月数万円を無駄に払い続けるケースがある' },
            { num: '②', text: '終身保険の解約返戻金を施設費用の資金として活用できる場合がある' },
            { num: '③', text: '認知症が進む前に保険証券の整理・家族への共有をしておかないと後のトラブルになる' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-3">
              <span style={{ background: '#7B1FA2', color: '#fff', fontSize: '13px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', flexShrink: 0 }}>{item.num}</span>
              <p style={{ fontSize: '14px', color: '#4A148C', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 保険の種類と対応 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">保険の種類と入居後の見直しポイント</h2>
      <div className="space-y-4 mb-8">
        {insuranceTypes.map((ins) => (
          <div key={ins.name} className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-3 px-5 py-3" style={{ background: '#F9FAFB', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '22px' }}>{ins.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '16px' }}>{ins.name}</span>
              <span style={{ marginLeft: 'auto', background: ins.priorityColor, color: '#fff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px' }}>
                優先度：{ins.priority}
              </span>
            </div>
            <div className="px-5 py-4 grid gap-3">
              <div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#888', marginBottom: '3px' }}>役割</p>
                <p style={{ fontSize: '14px', color: '#333' }}>{ins.role}</p>
              </div>
              <div className="rounded-lg px-4 py-3" style={{ background: '#FFF3E0', border: '1px solid #FFCC80' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#E65100', marginBottom: '3px' }}>⚠ 入居後の注意</p>
                <p style={{ fontSize: '14px', color: '#5D4037' }}>{ins.afterEntry}</p>
              </div>
              <div className="rounded-lg px-4 py-3" style={{ background: '#E8F5E9', border: '1px solid #A5D6A7' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#2E7D52', marginBottom: '3px' }}>✅ 推奨アクション</p>
                <p style={{ fontSize: '14px', color: '#1B5E37' }}>{ins.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 入居前後の保険の考え方 変化表 */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">入居前と入居後：保険の考え方の変化</h2>
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid #e5e7eb' }}>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left" style={{ background: '#F9FAFB', color: '#555', fontSize: '12px', borderBottom: '1px solid #e5e7eb' }}>項目</th>
              <th className="px-4 py-3 text-center" style={{ background: '#E8F5E9', color: '#2E7D52', fontSize: '12px', fontWeight: 800, borderBottom: '1px solid #e5e7eb' }}>入居前</th>
              <th className="px-4 py-3 text-center" style={{ background: '#FFF3E0', color: '#E65100', fontSize: '12px', fontWeight: 800, borderBottom: '1px solid #e5e7eb' }}>入居後</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['入院リスク', '自分で病院を選び手配する', '施設が医療機関と連携してくれる'],
              ['医療保険の必要性', '高い', '重複しやすいため見直しが必要'],
              ['介護費用の備え', '将来への備えとして重要', '施設費用が確定するため試算しやすい'],
              ['死亡保障', '家族への生活費として重要', '必要額を再計算する'],
              ['保険証券の管理', '本人が管理', '家族と共有・コピーを渡しておく'],
            ].map(([item, before, after], i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                <td className="px-4 py-3 font-bold" style={{ fontSize: '13px' }}>{item}</td>
                <td className="px-4 py-3 text-center" style={{ fontSize: '13px', color: '#2E7D52' }}>{before}</td>
                <td className="px-4 py-3 text-center" style={{ fontSize: '13px', color: '#E65100' }}>{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 見直しチェックリスト */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">保険見直し チェックリスト</h2>
      <div className="space-y-2 mb-10">
        {checkItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB', border: '1px solid #e5e7eb' }}>
            <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
            <p style={{ fontSize: '15px', fontWeight: 500 }}>{item.text}</p>
          </div>
        ))}
      </div>

      <CTABox compact />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">よくある質問</h2>
      <div className="mb-10">
        {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>

      <a href={INSURANCE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
        <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#7B1FA2' }}>
          <span style={{ fontSize: '24px' }}>📋</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>保険の無料相談を申し込む →</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>複数の保険を比較しながら専門家に相談</p>
          </div>
        </div>
      </a>
      <a href={NURSING_HOME_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
        <div className="rounded-xl px-5 py-4 flex items-center gap-3 transition hover:opacity-90" style={{ background: '#F57C00' }}>
          <span style={{ fontSize: '24px' }}>🏠</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>老人ホームの費用相場を確認する →</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>保険との組み合わせを考えるために</p>
          </div>
        </div>
      </a>

      <h2 className="text-lg font-bold mb-3 text-primary">他のテーマも読む</h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { href: '/prepare/real-estate', label: '自宅・不動産の整理', emoji: '🏠' },
          { href: '/prepare/consultation', label: '相談先の選び方', emoji: '💬' },
          { href: '/prepare/inheritance', label: '相続の準備', emoji: '📝' },
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
