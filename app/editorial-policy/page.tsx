import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '編集ポリシー・調査方法｜やさしい老人ホームガイド',
  description: '当サイトの編集方針・情報の調査方法・更新基準・広告に関する表示について説明します。',
  openGraph: {
    title: '編集ポリシー・調査方法｜やさしい老人ホームガイド',
    description: '当サイトの編集方針・情報の調査方法・更新基準・広告に関する表示について説明します。',
    siteName: 'やさしい老人ホームガイド',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function EditorialPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '編集ポリシー' }]} />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        編集ポリシー・調査方法
      </h1>

      <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: '#E8F5E9', border: '2px solid #2E7D52' }}>
        <p className="text-base">
          当サイト「やさしい老人ホームガイド」は、老人ホームを初めて探す方とそのご家族が、
          安心して情報収集・意思決定できることを目的に運営しています。
          このページでは、情報の信頼性を確保するための編集方針を公開します。
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          1. このサイトの目的と対象読者
        </h2>
        <p className="text-base mb-3">
          当サイトは、老人ホーム・介護施設に関する基礎知識・費用相場・選び方・手続きの流れを、
          専門用語をできるだけ使わずにわかりやすく解説することを目的としています。
        </p>
        <p className="text-base mb-3">
          主な対象読者は以下の方々です。
        </p>
        <ul className="list-disc pl-6 text-base space-y-2 mb-3">
          <li>老人ホームを初めて検討している65〜80代の方ご本人</li>
          <li>親の施設入居を検討している40〜60代のご家族</li>
          <li>退院後・認知症進行・遠距離介護など緊急度が高い状況の方</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          2. 情報の調査・収集方法
        </h2>
        <p className="text-base mb-3">
          記事内の情報は、以下の一次情報・公的資料を主な参考源としています。
        </p>
        <ul className="list-disc pl-6 text-base space-y-2 mb-3">
          <li>厚生労働省が公表する介護保険制度・施設基準に関する資料</li>
          <li>各都道府県・市区町村が公開する介護施設の情報</li>
          <li>WAM NET（独立行政法人福祉医療機構）の施設データベース</li>
          <li>施設運営法人が公式サイトで公開している情報</li>
        </ul>
        <p className="text-base mb-3">
          費用相場・サービス内容等は、複数の公的資料および施設公開情報を照合して掲載しています。
          地域差・施設差が大きい情報については、その旨を記事内に明記しています。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          3. 更新基準・最終確認日
        </h2>
        <p className="text-base mb-3">
          各記事には「最終更新日」を表示しています。以下のタイミングで内容を見直しています。
        </p>
        <ul className="list-disc pl-6 text-base space-y-2 mb-3">
          <li>介護保険制度の改正・公定価格改定が行われたとき</li>
          <li>掲載情報に誤りが発見されたとき（随時修正）</li>
          <li>定期レビュー（年1回以上）</li>
        </ul>
        <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: '#FFF8E1', border: '1px solid #FFC107' }}>
          <p className="text-sm">
            <strong>注意：</strong>費用相場・制度詳細は変更される場合があります。
            最新情報は必ず各施設または市区町村の担当窓口にご確認ください。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          4. 広告・アフィリエイトに関する表示
        </h2>
        <p className="text-base mb-3">
          当サイトは、アフィリエイト広告（成果報酬型広告）を掲載しています。
          広告リンクには「※広告」と明示しています。
        </p>
        <p className="text-base mb-3">
          <strong>ランキング・比較・おすすめ情報の独立性について：</strong>
          施設の評価・ランキングは、広告契約の有無に関わらず、編集部が定めた基準（費用透明性・サービス内容・口コミ評価等）をもとに独立して作成しています。
          広告主から評価内容への介入は一切受けていません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          5. 記事の限界・免責
        </h2>
        <p className="text-base mb-3">
          当サイトの情報は一般的な知識の提供を目的としており、個別の医療・法律・福祉アドバイスの提供を目的とするものではありません。
          個別の状況に応じた判断は、介護支援専門員（ケアマネジャー）・医療機関・市区町村の相談窓口にご相談ください。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-primary">
          6. お問い合わせ
        </h2>
        <p className="text-base mb-3">
          記事内容の誤りや改善提案は、<a href="/contact" style={{ color: '#1A5E9E' }}>お問い合わせページ</a>よりお知らせください。
          確認後、速やかに対応いたします。
        </p>
      </section>

      <div className="rounded-xl p-4 mt-8" style={{ backgroundColor: '#F3F4F6', border: '1px solid #e5e7eb' }}>
        <p className="text-sm text-gray-500">最終更新日：2026年4月</p>
      </div>
    </>
  )
}
