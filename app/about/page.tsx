import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '運営者情報・編集部プロフィール｜やさしい老人ホームガイド',
  description: 'やさしい老人ホームガイドの運営者情報・編集部プロフィール・サイト設立の経緯をご紹介します。',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '運営者情報' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        運営者情報
      </h1>

      {/* 編集部プロフィール */}
      <div className="rounded-2xl overflow-hidden mb-8" style={{ border: '2px solid #2E7D52' }}>
        <div style={{ background: 'linear-gradient(135deg, #2E7D52 0%, #43A066 100%)', padding: '14px 20px' }}>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '15px', margin: 0 }}>編集部プロフィール</p>
        </div>
        <div className="bg-white px-6 py-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              style={{
                width: '64px', height: '64px', borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #E8F5E9, #A5D6A7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', border: '2px solid #2E7D52',
              }}
            >
              🌿
            </div>
            <div>
              <p className="font-bold text-lg mb-1" style={{ color: '#1A1A1A' }}>やさしい老人ホームガイド 編集部</p>
              <p className="text-sm text-gray-500">介護・老人ホーム情報専門サイト ／ 2024年1月 開設</p>
            </div>
          </div>
          <div className="text-base space-y-3 text-gray-700" style={{ lineHeight: 1.9 }}>
            <p>
              当編集部は、「自分の親が老人ホームを探すとき、こんなサイトがあってほしかった」という実体験をきっかけに立ち上げました。
            </p>
            <p>
              親の施設入居を検討しはじめたとき、専門用語が多く・情報が古く・何より「家族の視点」で書かれた記事が少ないことに困りました。
              このサイトは、同じ悩みを持つご家族のために、<strong>専門用語なし・感情に寄り添う</strong>情報提供を心がけています。
            </p>
            <p>
              記事の作成にあたっては、厚生労働省・各都道府県の公的資料、WAM NET（独立行政法人福祉医療機構）のデータ、
              施設運営法人の公開情報を参照し、正確性の確保に努めています。
            </p>
          </div>
        </div>
      </div>

      {/* 基本情報テーブル */}
      <h2 className="text-xl font-bold mb-4 mt-8 text-primary">サイト基本情報</h2>
      <div className="table-wrapper mb-8">
        <table className="w-full border-collapse text-base">
          <tbody>
            {[
              { label: 'サイト名', value: 'やさしい老人ホームガイド' },
              { label: 'サイトURL', value: 'https://2nd-lifesearch.pages.dev' },
              { label: '運営者名', value: 'やさしい老人ホームガイド 編集部' },
              { label: '開設日', value: '2024年1月' },
              { label: '主なテーマ', value: '老人ホーム・介護施設の基礎知識・費用・選び方・終活' },
              { label: '対象読者', value: '老人ホームの入居を検討しているご本人・ご家族（40〜70代）' },
              { label: 'お問い合わせ', value: null },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-200" style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB' }}>
                <th className="text-left font-bold py-3 px-4 text-sm" style={{ width: '38%', color: '#2E7D52' }}>{row.label}</th>
                <td className="py-3 px-4 text-sm">
                  {row.value ?? <a href="/contact" style={{ color: '#1A5E9E' }}>お問い合わせフォームはこちら</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 専門性・信頼性 */}
      <h2 className="text-xl font-bold mb-4 mt-8 text-primary">情報の信頼性について</h2>
      <div className="space-y-3 mb-8">
        {[
          { icon: '📚', title: '一次情報・公的資料を参照', body: '厚生労働省・各都道府県・WAM NETなどの公的資料を主な情報源としています。費用相場・制度の説明はすべて公開資料をもとに作成しています。' },
          { icon: '🔄', title: '定期的な情報更新', body: '介護保険制度の改正・公定価格改定のタイミングで記事内容を見直しています。各記事には最終更新日を表示しています。' },
          { icon: '📢', title: '広告と編集の独立性', body: 'アフィリエイト広告を掲載していますが、施設の評価・ランキングは広告契約の有無と無関係に、独自の基準で作成しています。' },
        ].map((item, i) => (
          <div key={i} className="flex gap-3 rounded-xl bg-white p-4" style={{ border: '1px solid #e5e7eb' }}>
            <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p className="font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-gray-600" style={{ lineHeight: 1.8 }}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 広告表示 */}
      <div className="rounded-xl p-4 mb-8" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
        <p className="font-bold text-sm mb-1" style={{ color: '#E65100' }}>【広告・アフィリエイトについて】</p>
        <p className="text-sm text-gray-700" style={{ lineHeight: 1.8 }}>
          当サイトはアフィリエイト広告（成果報酬型広告）を掲載しています。
          掲載広告はみんなの介護・ガーデン・家族葬のこれからなどのサービスです。
          広告リンクには「※広告」と明示しており、コンテンツの内容・順序は広告主から独立して編集しています。
        </p>
      </div>

      <p className="text-sm text-gray-400">最終更新：2026年4月</p>
    </>
  )
}
