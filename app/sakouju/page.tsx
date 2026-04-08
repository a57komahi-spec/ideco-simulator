import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: 'サービス付き高齢者向け住宅（サ高住）完全ガイド｜費用・メリット・注意点',
  description: 'サービス付き高齢者向け住宅（サ高住）の費用相場・有料老人ホームとの違い・向いている人・向いていない人・契約前の注意点を徹底解説します。',
  openGraph: {
    title: 'サービス付き高齢者向け住宅（サ高住）完全ガイド｜費用・メリット・注意点',
    description: 'サ高住の費用・有料老人ホームとの違い・注意点を徹底解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  'サ高住は<mark class="highlight">安否確認と生活相談が標準サービス</mark>の高齢者向け賃貸住宅です',
  '費用相場は<mark class="highlight">月額10〜25万円</mark>で有料老人ホームより安めです',
  '介護が<mark class="highlight">重くなった場合は退所が必要</mark>になる可能性があり注意が必要です',
  '自立〜軽度の方には<mark class="highlight">自由度が高くメリットが大きい</mark>選択肢です',
]

const comparison = [
  { item: '月額費用', sakouju: '10〜25万円', yuryou: '18〜40万円' },
  { item: '入居一時金', sakouju: '0〜数十万円（少ない）', yuryou: '0〜数百万円（施設により様々）' },
  { item: '介護サービス', sakouju: '外部介護事業者を利用（別途費用）', yuryou: '施設スタッフが提供（費用に含む）' },
  { item: '契約形態', sakouju: '賃貸借契約（退去可能）', yuryou: '終身利用権方式が多い' },
  { item: '重度対応', sakouju: '対応できない場合、退所が必要', yuryou: '終身入居できる施設が多い' },
  { item: '自由度', sakouju: '高い（外出・訪問者自由）', yuryou: '施設のルールに従う' },
]

export default function SakoujuPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'サービス付き高齢者向け住宅（サ高住）完全ガイド' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        サービス付き高齢者向け住宅（サ高住）完全ガイド<br className="md:hidden" />｜費用・メリット・注意点
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">サ高住とは？</h2>
      <p className="text-base mb-6">サービス付き高齢者向け住宅（サ高住）は、<strong>安否確認と生活相談サービスが付いた高齢者向け賃貸住宅</strong>です。2011年に国が創設した制度で、現在全国に約27万戸あります。「住宅」なので、賃貸借契約を結んで入居します。</p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">サ高住 vs 有料老人ホーム 比較表</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse text-sm" style={{ minWidth: '400px' }}>
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th className="px-3 py-2 text-left">項目</th>
              <th className="px-3 py-2 text-left">サ高住</th>
              <th className="px-3 py-2 text-left">有料老人ホーム</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F9FBF9', borderBottom: '1px solid #e5e7eb' }}>
                <td className="px-3 py-2 font-bold">{row.item}</td>
                <td className="px-3 py-2">{row.sakouju}</td>
                <td className="px-3 py-2">{row.yuryou}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">サ高住が向いている人・向いていない人</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl p-5" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-base mb-3" style={{ color: '#2E7D52' }}>✅ こんな方に向いています</p>
          <ul className="space-y-1 text-sm">
            {['ある程度自立して生活できる方','一人暮らしの不安を解消したい方','費用をできるだけ抑えたい方','自由な生活スタイルを維持したい方','配偶者と一緒に住みたい方'].map((t, i) => <li key={i}>◆ {t}</li>)}
          </ul>
        </div>
        <div className="rounded-xl p-5" style={{ backgroundColor: '#FFEBEE', border: '2px solid #EF9A9A' }}>
          <p className="font-bold text-base mb-3" style={{ color: '#B71C1C' }}>❌ 注意が必要な方</p>
          <ul className="space-y-1 text-sm">
            {['重度の介護が必要な方','認知症が進行している方','医療的ケアが必要な方','「終身で住み続けたい」と考えている方'].map((t, i) => <li key={i}>▲ {t}</li>)}
          </ul>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">契約前に必ず確認すること</h2>
      <div className="space-y-2 mb-10">
        {[
          '「介護が重くなったら退所になりますか？」と明確に確認する',
          '外部介護サービスの事業者を自由に選べるか（囲い込みに注意）',
          '食事サービスが含まれているか、別途費用がかかるか',
          '退去時の原状回復費用の範囲',
          '緊急時の対応体制（夜間・休日）',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2 rounded-lg bg-white px-4 py-3" style={{ border: '1px solid #e5e7eb' }}>
            <span className="font-bold flex-shrink-0" style={{ color: '#F57C00' }}>□</span>
            <p className="text-base">{item}</p>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', border: '2px solid #2E7D52' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#1B5E20' }}>サ高住も有料老人ホームも一括で比較できます</p>
          <p className="text-sm mb-4 text-gray-700">エリア・費用・サービスで絞り込み、気になる施設をまとめて資料請求できます。</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://www.minnanokaigo.com/" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#2E7D52',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(46,125,82,0.4)',width:'100%',maxWidth:'480px' }}>
              サ高住・有料老人ホームを無料で比較する →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（みんなの介護）</span>
          </div>
        </div>
      </AffiliateBlock>
      <CTABox />
    </>
  )
}
