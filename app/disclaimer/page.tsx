import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '免責事項',
  description: 'やさしい老人ホームガイドの免責事項です。',
}

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '免責事項' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        免責事項
      </h1>
      <div className="space-y-8 text-base">
        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">情報の正確性について</h2>
          <p>当サイト「やさしい老人ホームガイド」に掲載している情報は、正確性・最新性の確保に努めていますが、法改正・制度変更などにより、掲載内容が最新の情報と異なる場合があります。</p>
          <p className="mt-3">当サイトの情報をもとにした判断・行動により生じた損害について、運営者は一切の責任を負いかねます。最終的な判断は、各市区町村の窓口や専門家にご確認のうえ、ご自身の責任にてお願いします。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">外部リンクについて</h2>
          <p>当サイトには外部サイトへのリンクが含まれています。リンク先のサイトに関する情報の正確性・安全性について、当サイトは責任を負いません。</p>
          <p className="mt-3">外部サイトへのリンクは、情報提供を目的としており、当サイトが特定のサービス・施設を推奨するものではありません。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 text-primary">アフィリエイト広告の掲載について</h2>
          <p>当サイトは、第三者のアフィリエイトプログラムに参加しています。当サイト経由で商品・サービスのお申し込みが行われた場合、当サイトに報酬が発生することがあります。</p>
          <p className="mt-3">ただし、アフィリエイト報酬の有無は、当サイトのコンテンツ内容や掲載順序に影響を与えません。常にユーザーにとって有益な情報を提供することを最優先としています。</p>
        </section>

        <p className="text-sm text-gray-500">制定日：2024年1月1日</p>
      </div>
    </>
  )
}
