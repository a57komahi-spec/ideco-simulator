import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '老後資金はいくら必要か？介護費用込みのリアルな試算',
  description: '老後2,000万円問題だけでは足りない。介護費用・施設費・医療費を含めた老後資金のリアルな必要額と、不足した場合の対策を解説します。',
  openGraph: {
    title: '老後資金はいくら必要か？介護費用込みのリアルな試算',
    description: '介護費用・施設費・医療費を含めた老後資金の必要額と不足時の対策を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '老後2,000万円問題は<mark class="highlight">介護費用を含んでいません</mark>。実際はさらに必要です',
  '介護に必要な費用は平均<mark class="highlight">総額500〜700万円</mark>（生命保険文化センター調査）',
  '施設入居の場合は<mark class="highlight">月15〜35万円×年数</mark>の費用がかかります',
  '不足する場合は<mark class="highlight">介護保険・補足給付・生命保険</mark>の活用を検討しましょう',
]

const scenarios = [
  { title: '在宅介護の場合', period: '平均5年（61ヶ月）', monthly: '5〜10万円/月', total: '300〜600万円', note: '介護サービス代・福祉用具・住宅改修費など。家族の時間的コストは含まない。' },
  { title: '施設入居（有料老人ホーム）', period: '平均入居期間3〜5年', monthly: '20〜35万円/月', total: '720〜2,100万円', note: '月額費用のほか、入居一時金（0〜数百万円）が別途必要な施設もある。' },
  { title: '特養（公的施設）', period: '平均入居期間3〜5年', monthly: '8〜15万円/月', total: '290〜900万円', note: '公的施設のため費用は安いが、入居まで数年待ちが一般的。' },
]

export default function RetirementCostPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '老後資金はいくら必要か' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        老後資金はいくら必要か？<br className="md:hidden" />介護費用込みのリアルな試算
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ height: '220px' }}>
        <Image
          src="/images/1.png"
          alt="年金手帳と電卓で老後資金を試算するイメージ"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E3F2FD', border: '2px solid #1A5E9E' }}>
        <p className="text-base mb-2"><strong>老後2,000万円問題とは？</strong></p>
        <p className="text-base">金融庁の試算では、夫婦2人が老後30年間で約2,000万円の資産が必要とされています。しかしこの試算には<strong>介護費用がほぼ含まれていません</strong>。実際の必要額はさらに多くなります。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">介護のパターン別 費用の目安</h2>
      <div className="space-y-4 mb-10">
        {scenarios.map((s, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-white" style={{ border: '1px solid #e5e7eb' }}>
            <div className="px-5 py-3" style={{ backgroundColor: '#F3F8F5', borderBottom: '1px solid #e5e7eb' }}>
              <p className="font-bold text-base text-primary">{s.title}</p>
            </div>
            <div className="px-5 py-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3 bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">平均期間</p>
                <p className="font-bold text-sm">{s.period}</p>
              </div>
              <div className="rounded-lg p-3 bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">月額目安</p>
                <p className="font-bold text-sm">{s.monthly}</p>
              </div>
              <div className="rounded-lg p-3 col-span-2" style={{ backgroundColor: '#FFF3E0' }}>
                <p className="text-xs text-gray-500 mb-1">総額目安</p>
                <p className="font-bold text-base" style={{ color: '#E65100' }}>{s.total}</p>
              </div>
            </div>
            <div className="px-5 pb-4">
              <p className="text-xs text-gray-500">{s.note}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">資金が不足しそうなときの対策</h2>
      <div className="space-y-2 mb-10">
        {[
          { icon: '🏛️', label: '介護保険・補足給付の活用', body: '要介護認定を受ければ介護費用の1〜3割負担で済みます。低所得者向けの「補足給付」で食費・居住費も軽減できます。' },
          { icon: '🏠', label: '自宅・不動産の活用', body: '自宅を売却または賃貸に出して費用に充てる方法があります。リバースモーゲージ（自宅を担保にした融資）も選択肢です。' },
          { icon: '📋', label: '生命保険・介護保険の見直し', body: '民間の介護保険に加入していれば、要介護認定後に一時金や年金が受け取れます。保険証書を確認してみましょう。' },
          { icon: '👥', label: 'FPへの個別相談', body: '資産・年金・保険を総合的に見て「何年持つか」を試算してもらうことが最も確実です。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #1A5E9E' }}>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <p className="font-bold text-base">{item.label}</p>
            </div>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)', border: '2px solid #1A5E9E' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#0D47A1' }}>老後資金・介護費用をFPに無料相談する</p>
          <p className="text-sm mb-1 text-gray-700">「今の資産でどのくらいの施設に入れるか」「不足分はどう対策するか」をプロに相談できます。</p>
          <p className="text-xs mb-4" style={{ color: '#888' }}>※ 21歳以上・会社員・公務員の方向け</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#1565C0',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(21,101,192,0.4)',width:'100%',maxWidth:'480px' }}>
              老後資金をFPに無料相談する →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（ガーデン）</span>
          </div>
        </div>
      </AffiliateBlock>
      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/simulation', label: '費用20年シミュレーターを使う', icon: '🧮' },
          { href: '/cost', label: '老人ホームの費用相場を確認する', icon: '💴' },
          { href: '/care-cost-split', label: '介護費用の兄弟分担の考え方', icon: '👨‍👩‍👧' },
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
