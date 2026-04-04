import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '運営者情報',
  description: 'やさしい老人ホームガイドの運営者情報です。',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: '運営者情報' }]} />
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary" style={{ borderLeft: 'none', paddingLeft: 0 }}>
        運営者情報
      </h1>
      <div className="table-wrapper mb-8">
        <table className="w-full border-collapse text-base">
          <tbody>
            <tr className="border-b border-gray-200">
              <th className="text-left bg-summary-bg font-bold py-4 px-4 w-1/3">サイト名</th>
              <td className="py-4 px-4">やさしい老人ホームガイド</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="text-left bg-summary-bg font-bold py-4 px-4">運営者名</th>
              <td className="py-4 px-4">やさしい老人ホームガイド 運営事務局</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="text-left bg-summary-bg font-bold py-4 px-4">設立日</th>
              <td className="py-4 px-4">2024年1月</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th className="text-left bg-summary-bg font-bold py-4 px-4">サイトの目的</th>
              <td className="py-4 px-4">老人ホーム・介護施設に関する正確でわかりやすい情報提供</td>
            </tr>
            <tr>
              <th className="text-left bg-summary-bg font-bold py-4 px-4">お問い合わせ</th>
              <td className="py-4 px-4"><a href="/contact">お問い合わせフォームはこちら</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl p-6 bg-white border border-gray-200 text-base">
        <h2 className="text-xl font-bold mb-3 text-primary">サイトの目的と方針</h2>
        <p>当サイトは、老人ホームや介護施設の選択に悩むご家族や、将来の介護について考えている方に向けて、正確でわかりやすい情報を提供することを目的として運営しています。</p>
        <p className="mt-3">掲載情報は介護関連の公的資料や専門書をもとに作成していますが、法改正や制度変更により情報が変わる場合があります。最新情報は各施設や市区町村の窓口にてご確認ください。</p>
      </div>
    </>
  )
}
