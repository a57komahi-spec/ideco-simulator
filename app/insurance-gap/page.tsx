import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '介護保険だけでは足りない！自費で払うものリストと節約術',
  description: '「介護保険があれば安心」は誤解です。食費・居住費・日用品・医療費など介護保険でカバーされない費用を一覧で解説。節約術と補助制度も紹介します。',
  openGraph: {
    title: '介護保険だけでは足りない！自費で払うものリストと節約術',
    description: '介護保険でカバーされない費用一覧と、節約のための補助制度を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '施設入居時の費用のうち<mark class="highlight">食費・居住費・日用品代は原則自己負担</mark>です',
  '介護保険の自己負担は<mark class="highlight">1〜3割</mark>（所得により異なります）',
  '低所得者向けの<mark class="highlight">「補足給付（特定入所者介護サービス費）」</mark>で食費・居住費が軽減されます',
  '<mark class="highlight">高額介護サービス費制度</mark>で月の上限額を超えた分が払い戻されます',
]

const selfPayItems = [
  { category: '施設入居時', items: [
    { name: '食費', amount: '月1.5〜5万円', note: '施設により大きく異なる。補足給付あり（低所得者）' },
    { name: '居住費（家賃相当）', amount: '月2〜10万円', note: '施設タイプ・部屋の種類による。補足給付あり' },
    { name: '日用品・衛生用品', amount: '月5,000〜1万円', note: 'ティッシュ・洗濯洗剤・おむつ代など' },
    { name: '理美容代', amount: '月2,000〜5,000円', note: '施設内のカットサービス等' },
    { name: '医療費', amount: 'かかった分', note: '施設に通院が必要な場合、交通費も発生' },
    { name: '電話・インターネット代', amount: '月数千円', note: '施設によっては共用設備あり' },
  ]},
  { category: '在宅介護時', items: [
    { name: '福祉用具の購入（レンタル対象外）', amount: '都度', note: '入浴補助グッズ・簡易トイレなど。購入上限あり' },
    { name: '住宅改修費', amount: '上限20万円（1〜3割自己負担）', note: '手すり設置・段差解消など。介護保険で一部給付' },
    { name: '見守りサービス代', amount: '月2,000〜5,000円', note: '介護保険対象外。民間サービスは全額自己負担' },
    { name: '交通費（通院・デイ送迎以外）', amount: '都度', note: 'デイサービスの送迎は原則含まれるが、通院タクシーは自費' },
  ]},
]

export default function InsuranceGapPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '介護保険だけでは足りない費用リスト' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        介護保険だけでは足りない！<br className="md:hidden" />自費で払うものリストと節約術
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF9A9A' }}>
        <p className="text-base"><strong>「介護保険があるから安心」は誤解です。</strong>介護保険は介護サービス費の1〜3割負担に抑えてくれますが、食費・居住費・日用品代などはカバーされません。実際には介護保険料の他に月5〜20万円の自己負担が発生します。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">自費で払うもの一覧</h2>
      {selfPayItems.map((cat, ci) => (
        <div key={ci} className="mb-8">
          <h3 className="font-bold text-lg mb-3" style={{ color: '#1A5E9E' }}>【{cat.category}】</h3>
          <div className="space-y-2">
            {cat.items.map((item, i) => (
              <div key={i} className="flex flex-wrap gap-2 items-start rounded-lg bg-white px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.note}</p>
                </div>
                <span className="text-sm font-bold flex-shrink-0" style={{ color: '#E65100' }}>{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">知らないと損する！節約・補助制度</h2>
      <div className="space-y-3 mb-10">
        {[
          { name: '補足給付（特定入所者介護サービス費）', body: '所得・資産が一定以下の方は施設入居時の食費・居住費が減額されます。市区町村に申請が必要です。年金収入が少ない方は必ず確認しましょう。' },
          { name: '高額介護サービス費', body: '同じ月に利用した介護サービス費の自己負担額が一定額を超えると、超えた分が後で払い戻されます。申請は市区町村に。', },
          { name: '医療費控除（確定申告）', body: '介護施設の費用の一部は医療費控除の対象になります。年末に領収書をまとめて確定申告すると還付が受けられます。' },
          { name: '社会福祉法人による軽減制度', body: '社会福祉法人が運営する施設に入居している低所得者向けに、利用料が軽減される制度があります。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1" style={{ color: '#2E7D52' }}>💡 {item.name}</p>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)', border: '2px solid #1A5E9E' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#0D47A1' }}>介護費用の不安をFPに相談する</p>
          <p className="text-sm mb-1 text-gray-700">補助制度の活用方法・介護費用の見通しをプロに無料で相談できます。</p>
          <p className="text-xs mb-4" style={{ color: '#888' }}>※ 21歳以上・会社員・公務員の方向け</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#1565C0',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(21,101,192,0.4)',width:'100%',maxWidth:'480px' }}>
              介護費用をFPに無料相談する →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（ガーデン）</span>
          </div>
        </div>
      </AffiliateBlock>
      <CTABox />
    </>
  )
}
