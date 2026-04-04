import type { Metadata } from 'next'
import Link from 'next/link'
import CTABox from '@/components/CTABox'
import SummaryBox from '@/components/SummaryBox'

export const metadata: Metadata = {
  title: '要介護度の違いを徹底解説｜要支援・要介護1〜5の基準と受けられるサービス',
  description: '要支援1・2と要介護1〜5の違いをわかりやすく解説。対比表・受けられるサービス・認定の申請手順まで、家族が知りたい情報をまとめました。',
}

const levels = [
  {
    code: '要支援1',
    color: '#4CAF50',
    bg: '#F1F8E9',
    border: '#A5D6A7',
    state: '日常生活のほぼすべてを自分で行えるが、一部の動作に不安定さがある。将来的な介護予防が主目的。',
    examples: '浴槽への出入りが不安定、掃除や洗濯に少し手間取る',
    limit: '約5万円／月',
    facility: '介護予防サービス（通所・訪問）のみ。老人ホームへの入居は原則対象外。',
    tokuyou: false,
  },
  {
    code: '要支援2',
    color: '#8BC34A',
    bg: '#F9FBE7',
    border: '#C5E1A5',
    state: '要支援1より状態がやや重く、身体機能の低下が見られる。介護予防を継続しながら生活支援も必要。',
    examples: '歩行に不安定感、立ち上がりに時間がかかる、料理が難しくなってきた',
    limit: '約10万円／月',
    facility: '介護予防サービス。グループホームは入居可能（認知症がある場合）。',
    tokuyou: false,
  },
  {
    code: '要介護1',
    color: '#FFC107',
    bg: '#FFFDE7',
    border: '#FFE082',
    state: '部分的に介護が必要な状態。日常生活の基本動作はほぼ自分で行えるが、見守りや声かけが必要なことがある。',
    examples: '入浴・排泄に一部介助が必要、物忘れが出始める',
    limit: '約17万円／月',
    facility: '有料老人ホーム・サービス付き高齢者向け住宅など多くの施設に入居可。特養は原則対象外。',
    tokuyou: false,
  },
  {
    code: '要介護2',
    color: '#FF9800',
    bg: '#FFF3E0',
    border: '#FFCC80',
    state: '身体機能の低下が進み、日常生活全般に介助が必要。認知機能の低下もみられることが多い。',
    examples: '自力での歩行・入浴が困難、排泄の失敗が増える',
    limit: '約20万円／月',
    facility: '有料老人ホーム・グループホームなど。特養は原則対象外（特例あり）。',
    tokuyou: false,
  },
  {
    code: '要介護3',
    color: '#FF5722',
    bg: '#FBE9E7',
    border: '#FFAB91',
    state: '自力での生活が困難な状態。日常生活のほぼすべてに介助が必要で、認知症の症状が顕著になることも。',
    examples: '立ち上がり・歩行・排泄・入浴すべてに全面介助が必要',
    limit: '約27万円／月',
    facility: '特別養護老人ホーム（特養）への入居申請が可能になる重要な節目。',
    tokuyou: true,
  },
  {
    code: '要介護4',
    color: '#E91E63',
    bg: '#FCE4EC',
    border: '#F48FB1',
    state: '重度の介護が必要。日常動作のほぼすべてに介助が必要で、寝たきりに近い状態。',
    examples: '食事・排泄・入浴すべてに介助が必要、意思疎通が難しくなることも',
    limit: '約31万円／月',
    facility: '特養・介護老人保健施設（老健）・介護療養型医療施設への入居が可能。',
    tokuyou: true,
  },
  {
    code: '要介護5',
    color: '#9C27B0',
    bg: '#F3E5F5',
    border: '#CE93D8',
    state: '最重度。日常生活全般にわたって全面的な介護が必要。意思疎通が困難な場合も多い。',
    examples: '寝たきり状態、食事も経管栄養になることがある',
    limit: '約36万円／月',
    facility: '特養・老健・介護療養型など医療ケアが充実した施設が適している。',
    tokuyou: true,
  },
]

const steps = [
  {
    num: '01',
    title: '市区町村の窓口に申請',
    desc: '本人または家族が、住んでいる市区町村の介護保険担当窓口（または地域包括支援センター）に「要介護認定申請書」を提出します。代理申請も可能。',
    point: '地域包括支援センターに電話すると、申請書類の書き方から丁寧に教えてもらえます。',
  },
  {
    num: '02',
    title: '認定調査員が自宅訪問',
    desc: '市区町村から派遣された調査員が自宅や入院先を訪問し、心身の状態を74項目にわたって確認します。本人の状態を正しく伝えることが大切です。',
    point: '「調子のいい日」に合わせてしまうと実態より軽く判定されることがあります。普段の状態を正直に伝えましょう。',
  },
  {
    num: '03',
    title: '主治医の意見書を取得',
    desc: '市区町村が本人の主治医に「主治医意見書」の作成を依頼します。かかりつけ医がいない場合は、市区町村が指定する医師の診察が必要です。',
    point: '主治医には日頃から生活上の困りごとを伝えておくと、実態に合った意見書を書いてもらいやすくなります。',
  },
  {
    num: '04',
    title: 'コンピューター判定（一次判定）',
    desc: '調査結果と主治医意見書をもとに、コンピューターで要介護度の一次判定を行います。',
    point: '',
  },
  {
    num: '05',
    title: '介護認定審査会（二次判定）',
    desc: '医療・保健・福祉の専門家5名で構成される「介護認定審査会」が、一次判定の結果と主治医意見書を総合的に審査し、最終的な要介護度を決定します。',
    point: '',
  },
  {
    num: '06',
    title: '認定結果の通知（約30日）',
    desc: '申請から原則30日以内に認定結果が通知されます。結果に不服がある場合は、都道府県の介護保険審査会に不服申し立て（審査請求）ができます。',
    point: '認定の有効期間は通常12〜36ヶ月。更新を忘れると介護保険サービスが利用できなくなるため注意が必要です。',
  },
  {
    num: '07',
    title: 'ケアプランの作成・サービス開始',
    desc: 'ケアマネジャー（介護支援専門員）にケアプランを作成してもらい、介護サービスの利用を開始します。ケアプランの作成費用は全額介護保険で負担されます（自己負担なし）。',
    point: '',
  },
]

export default function CareLevelPage() {
  return (
    <article>
      {/* Hero */}
      <div
        className="rounded-2xl mb-8 p-8"
        style={{ background: 'linear-gradient(135deg, #1B5E37 0%, #2E7D52 100%)', color: '#fff' }}
      >
        <p style={{ fontSize: '13px', opacity: 0.75, marginBottom: '8px', letterSpacing: '0.06em' }}>CARE LEVEL GUIDE</p>
        <h1 style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1.4, marginBottom: '16px' }}>
          要介護度の違いを徹底解説<br />
          <span style={{ fontSize: '20px', fontWeight: 600 }}>要支援・要介護1〜5の基準とサービス・認定手続き</span>
        </h1>
        <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
          「要介護3以上」でないと特養に入れない、ということをご存知ですか？
          介護保険制度では、認定された要介護度によって利用できる施設やサービスが大きく変わります。
          このページでは要支援1〜要介護5の違いを対比表でわかりやすく整理し、認定を受けるための手続きも解説します。
        </p>
      </div>

      <SummaryBox
        items={[
          '要支援1・2は「介護予防」が目的。原則、特養などへの入居はできない',
          '要介護3以上になると特別養護老人ホーム（特養）への入居申請が可能になる',
          '要介護度は申請から約30日で認定される。家族でも代理申請できる',
          '状態が変わったら「区分変更申請」でいつでも見直しができる',
        ]}
      />

      {/* 重要ポイントボックス */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{ background: '#FFF3E0', border: '2px solid #FF9800' }}
      >
        <p style={{ fontWeight: 800, fontSize: '18px', color: '#E65100', marginBottom: '10px' }}>
          🏠 特別養護老人ホーム（特養）への入居は「要介護3以上」が条件
        </p>
        <p style={{ lineHeight: 1.7, color: '#5D4037' }}>
          特養は公的施設のため月額費用が比較的低く、入居希望者が多い人気施設です。
          しかし入居申請できるのは<strong>原則「要介護3以上」</strong>の方に限られています。
          要介護1・2の方は有料老人ホームやサービス付き高齢者向け住宅が主な選択肢になります。
          まず現在の要介護度を確認し、適切な施設を選ぶことが大切です。
        </p>
        <Link
          href="/types"
          style={{ display: 'inline-block', marginTop: '12px', color: '#E65100', fontWeight: 700, fontSize: '14px' }}
        >
          → 施設の種類・違いをくわしく見る
        </Link>
      </div>

      {/* 対比表 */}
      <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '20px', paddingBottom: '8px', borderBottom: '3px solid #2E7D52' }}>
        要支援・要介護度 完全対比表
      </h2>

      <div className="space-y-4 mb-12">
        {levels.map((lv) => (
          <div
            key={lv.code}
            className="rounded-2xl overflow-hidden"
            style={{ border: `2px solid ${lv.border}`, background: lv.bg }}
          >
            <div className="flex items-center gap-3 px-5 py-3" style={{ background: lv.color }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '18px' }}>{lv.code}</span>
              {lv.tokuyou && (
                <span
                  style={{
                    background: '#fff',
                    color: lv.color,
                    fontSize: '12px',
                    fontWeight: 800,
                    padding: '2px 10px',
                    borderRadius: '20px',
                  }}
                >
                  特養入居可
                </span>
              )}
            </div>
            <div className="px-5 py-4 grid gap-2" style={{ gridTemplateColumns: '1fr' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#666', letterSpacing: '0.05em' }}>状態の目安</span>
                <p style={{ marginTop: '2px', lineHeight: 1.65 }}>{lv.state}</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: '8px', padding: '8px 12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#666' }}>具体例</span>
                <p style={{ marginTop: '2px', fontSize: '14px', color: '#444' }}>{lv.examples}</p>
              </div>
              <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#666' }}>支給限度額（目安）</span>
                  <p style={{ marginTop: '2px', fontWeight: 700, color: lv.color }}>{lv.limit}</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#666' }}>入居できる主な施設</span>
                  <p style={{ marginTop: '2px', fontSize: '13px', lineHeight: 1.5 }}>{lv.facility}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTABox compact />

      {/* 要支援 vs 要介護の違い */}
      <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '48px 0 20px', paddingBottom: '8px', borderBottom: '3px solid #2E7D52' }}>
        「要支援」と「要介護」の根本的な違い
      </h2>

      <div className="grid gap-5 mb-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="rounded-2xl p-5" style={{ background: '#E8F5E9', border: '2px solid #A5D6A7' }}>
          <p style={{ fontWeight: 800, fontSize: '16px', color: '#2E7D32', marginBottom: '10px' }}>🌱 要支援1・2</p>
          <ul style={{ lineHeight: 1.9, paddingLeft: '18px', color: '#333', fontSize: '14px' }}>
            <li>目的は「介護予防・状態悪化を防ぐ」</li>
            <li>日常生活の基本はほぼ自力でできる</li>
            <li>週数回の訪問・通所サービスが中心</li>
            <li>特養・老健などへの入居は<strong>原則不可</strong></li>
            <li>地域包括支援センターがサポート窓口</li>
          </ul>
        </div>
        <div className="rounded-2xl p-5" style={{ background: '#FFF3E0', border: '2px solid #FFCC80' }}>
          <p style={{ fontWeight: 800, fontSize: '16px', color: '#E65100', marginBottom: '10px' }}>🏥 要介護1〜5</p>
          <ul style={{ lineHeight: 1.9, paddingLeft: '18px', color: '#333', fontSize: '14px' }}>
            <li>目的は「必要な介護サービスの提供」</li>
            <li>日常生活に部分的〜全面的な介助が必要</li>
            <li>訪問介護・デイサービス・施設入居が可能</li>
            <li>要介護3以上で<strong>特養への入居申請可</strong></li>
            <li>ケアマネジャーがサポート窓口</li>
          </ul>
        </div>
      </div>

      {/* 受けられるサービスの違い */}
      <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 20px', paddingBottom: '8px', borderBottom: '3px solid #2E7D52' }}>
        受けられる介護サービスの違い
      </h2>

      <div className="rounded-2xl overflow-hidden mb-12" style={{ border: '1px solid #e5e7eb' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#2E7D52', color: '#fff' }}>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>サービス種別</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>要支援1・2</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>要介護1・2</th>
              <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700 }}>要介護3〜5</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['訪問介護（ホームヘルプ）', '○（予防給付）', '○', '○'],
              ['訪問看護', '○', '○', '○'],
              ['通所介護（デイサービス）', '○（予防給付）', '○', '○'],
              ['短期入所（ショートステイ）', '○', '○', '○'],
              ['福祉用具貸与', '一部のみ', '○', '○'],
              ['特別養護老人ホーム（特養）', '×', '×（原則）', '○'],
              ['介護老人保健施設（老健）', '×', '△（状態による）', '○'],
              ['グループホーム（認知症）', '○（要支援2のみ）', '○', '○'],
              ['有料老人ホーム', '施設による', '○', '○'],
              ['サービス付き高齢者向け住宅', '○', '○', '○'],
            ].map(([service, s12, k12, k35], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB', borderTop: '1px solid #e5e7eb' }}>
                <td style={{ padding: '11px 16px', fontWeight: 500 }}>{service}</td>
                <td style={{ padding: '11px 16px', textAlign: 'center', color: s12 === '×' ? '#e53e3e' : '#2E7D32' }}>{s12}</td>
                <td style={{ padding: '11px 16px', textAlign: 'center', color: k12 === '×' || k12 === '×（原則）' ? '#e53e3e' : '#2E7D32' }}>{k12}</td>
                <td style={{ padding: '11px 16px', textAlign: 'center', color: '#2E7D32', fontWeight: 600 }}>{k35}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 認定手続き */}
      <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 8px', paddingBottom: '8px', borderBottom: '3px solid #2E7D52' }}>
        要介護認定を受けるための手続き
      </h2>
      <p style={{ marginBottom: '24px', color: '#555', lineHeight: 1.7 }}>
        申請から認定まで原則30日。早めに動くことが大切です。
      </p>

      <div className="space-y-4 mb-12">
        {steps.map((step) => (
          <div
            key={step.num}
            className="rounded-2xl p-5"
            style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <div className="flex items-start gap-4">
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: '44px', height: '44px', background: '#2E7D52', color: '#fff', fontWeight: 800, fontSize: '15px' }}
              >
                {step.num}
              </span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '17px', marginBottom: '6px' }}>{step.title}</p>
                <p style={{ lineHeight: 1.7, color: '#444', marginBottom: step.point ? '10px' : 0 }}>{step.desc}</p>
                {step.point && (
                  <div
                    className="rounded-xl px-4 py-3"
                    style={{ background: '#E8F5E9', border: '1px solid #A5D6A7' }}
                  >
                    <p style={{ fontSize: '14px', color: '#2E7D32', lineHeight: 1.65 }}>
                      <strong>💡 ポイント：</strong>{step.point}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 区分変更申請 */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{ background: '#F3E5F5', border: '2px solid #CE93D8' }}
      >
        <p style={{ fontWeight: 800, fontSize: '17px', color: '#7B1FA2', marginBottom: '8px' }}>
          📋 状態が変わったら「区分変更申請」ができます
        </p>
        <p style={{ lineHeight: 1.7, color: '#4A148C' }}>
          認定の有効期間中でも、状態が大きく変化した場合は「区分変更申請」を行うことで要介護度を見直してもらえます。
          入院後に状態が悪化した場合や、特養への入居を検討し始めた場合など、遠慮なく市区町村や地域包括支援センターに相談しましょう。
        </p>
      </div>

      {/* 関連リンク */}
      <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px' }}>関連記事</h2>
      <div className="grid gap-3 mb-10" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {[
          { href: '/types', label: '施設の種類と違いを解説', emoji: '🏠' },
          { href: '/cost', label: '老人ホームの費用・料金', emoji: '💰' },
          { href: '/process', label: '入居までの流れ', emoji: '📋' },
          { href: '/how-to-choose', label: '施設の選び方ガイド', emoji: '🔍' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              className="rounded-xl px-4 py-3 transition hover:shadow-md"
              style={{ background: '#fff', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <span style={{ fontSize: '20px' }}>{item.emoji}</span>
              <span style={{ fontWeight: 600, fontSize: '14px', color: '#2E7D52' }}>{item.label} →</span>
            </div>
          </Link>
        ))}
      </div>

      <CTABox />
    </article>
  )
}
