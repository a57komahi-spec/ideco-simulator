import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'
import Breadcrumb from '@/components/Breadcrumb'
import AffiliateBlock from '@/components/AffiliateBlock'

export const metadata: Metadata = {
  title: '親の介護費用は誰が払う？兄弟間でもめないための費用分担ルール',
  description: '「誰が介護費用を負担するの？」は家族間で最もトラブルになりやすいテーマです。法律上の扶養義務・費用分担の考え方・兄弟でもめないための話し合い方を解説します。',
  openGraph: {
    title: '親の介護費用は誰が払う？兄弟間でもめないための費用分担ルール',
    description: '親の介護費用の法的な考え方・兄弟間の分担方法・トラブルを防ぐ話し合いの進め方を解説します。',
    siteName: 'やさしい老人ホームガイド', locale: 'ja_JP', type: 'article',
  },
}

const summaryItems = [
  '法律上、子どもには親への<mark class="highlight">「扶養義務」</mark>があります（民法第877条）',
  '介護費用は<mark class="highlight">まず親の資産・年金</mark>から支払うのが原則です',
  '費用が足りない場合、子どもが負担するときは<mark class="highlight">生活水準を下げない範囲</mark>が基準',
  '<mark class="highlight">「誰が介護するか」と「誰がお金を出すか」</mark>は別々に話し合うのがコツです',
]

export default function CareCostSplitPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '親の介護費用は誰が払う？' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        親の介護費用は誰が払う？<br className="md:hidden" />兄弟間でもめないための費用分担ルール
      </h1>
      <p className="text-sm text-gray-500 mb-6">更新：2026年4月 ｜ やさしい老人ホームガイド編集部</p>
      <SummaryBox items={summaryItems} />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <Image
          src="/images/10.png"
          alt="3世代の家族が介護費用の分担について話し合うイメージ"
          width={600}
          height={400}
          style={{ width: '50%', height: 'auto', borderRadius: '12px' }}
          priority
        />
      </div>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#FFF8E1', border: '2px solid #FFC107' }}>
        <p className="text-base">「親の施設費用、誰が出すの？」この一言で家族の関係が壊れるケースは少なくありません。法律の基本を理解し、早めに家族で話し合うことが大切です。</p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">費用負担の基本的な考え方</h2>
      <div className="space-y-3 mb-10">
        {[
          { step: '①', title: 'まず親の資産・年金で賄う', body: '親の年金・貯蓄・不動産（売却・賃貸）が最初の財源です。施設の費用相場と親の資産を照合してみましょう。', color: '#E8F5E9', border: '#2E7D52' },
          { step: '②', title: '介護保険・補助制度を最大活用する', body: '要介護認定を受ければ介護保険が使えます。また「特定入所者介護サービス費（補足給付）」で食費・居住費が軽減される制度もあります。', color: '#E3F2FD', border: '#1A5E9E' },
          { step: '③', title: '不足分を子どもで分担する', body: '親の資産だけで足りない場合、子どもで負担しますが「生活水準を下げない範囲」が法的な目安です。無理して自分の生活を壊す義務はありません。', color: '#FFF3E0', border: '#F57C00' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: `2px solid ${item.border}`, backgroundColor: item.color }}>
            <p className="font-bold text-base mb-1">{item.step} {item.title}</p>
            <p className="text-sm text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">兄弟間でもめないための話し合い方</h2>
      <div className="space-y-3 mb-10">
        {[
          { q: '「介護」と「お金」は切り離して話し合う', a: '「自分は介護を担当するからお金は出さなくていい」「お金は出すけど介護はできない」など、役割分担を明確にすることで不満が減ります。' },
          { q: '親の資産状況を全員で共有する', a: '「実は親に貯蓄がある」「年金がいくら入っているか」を兄弟全員で把握しておかないとトラブルのもとになります。' },
          { q: '費用の記録を必ず残す', a: '誰がいくら立て替えたかを記録しておき、定期的に精算する仕組みを作りましょう。口約束は後でトラブルになりがちです。' },
          { q: '「将来どうなるか」のシナリオを共有する', a: '「施設費が月20万円なら何年で資産が尽きる」という試算を共有すると、現実的な話し合いができます。' },
        ].map((item, i) => (
          <div key={i} className="rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb', borderLeft: '4px solid #2E7D52' }}>
            <p className="font-bold text-base mb-1">✅ {item.q}</p>
            <p className="text-sm text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 mt-10 text-primary">費用が払えなくなったら？</h2>
      <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#E3F2FD', border: '2px solid #1A5E9E' }}>
        <ul className="space-y-2">
          {[
            '生活保護を受給している方でも入居できる特養や施設があります',
            '高額介護サービス費制度で月の負担に上限が設けられています',
            '親の自宅を売却・リバースモーゲージで資金を確保する方法もあります',
            '困ったときは市区町村の福祉窓口に相談してください',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-base">
              <span className="font-bold flex-shrink-0" style={{ color: '#1A5E9E' }}>◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <AffiliateBlock>
        <div className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)', border: '2px solid #1A5E9E' }}>
          <p className="font-bold text-lg mb-2" style={{ color: '#0D47A1' }}>💴 老後・介護費用の見通しをFPに相談する</p>
          <p className="text-sm mb-1 text-gray-700">「いくら用意すれば大丈夫か」「どの施設なら払えるか」をプロに相談できます。</p>
          <p className="text-xs mb-4" style={{ color: '#888' }}>※ 21歳以上・会社員・公務員の方向け（学生・無職・保険営業の方は対象外）</p>
          <div className="flex flex-col items-center gap-1">
            <a href="https://px.a8.net/svt/ejp?a8mat=XXXXXX_GARDEN" target="_blank" rel="noopener noreferrer"
              style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#1565C0',color:'#fff',fontWeight:700,fontSize:'16px',borderRadius:'10px',padding:'14px 24px',textDecoration:'none',boxShadow:'0 3px 10px rgba(21,101,192,0.4)',width:'100%',maxWidth:'480px' }}>
              介護費用をFPに無料相談する →
            </a>
            <span style={{ fontSize: '11px', color: '#999' }}>※広告（ガーデン）</span>
          </div>
        </div>
      </AffiliateBlock>

      <div className="flex flex-col gap-3 mb-10">
        {[
          { href: '/cost', label: '老人ホームの費用相場を確認する', icon: '💴' },
          { href: '/retirement-cost', label: '老後資金はいくら必要か試算する', icon: '📊' },
          { href: '/simulation', label: '費用20年シミュレーターを使う', icon: '🧮' },
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
