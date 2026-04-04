/**
 * アフィリエイト・資料請求ブロックの表示制御ラッパー
 *
 * AFFILIATE_ENABLED = false のときは何も表示しない。
 * true にするだけで全ブロックが復活する。
 */
import { AFFILIATE_ENABLED } from '@/lib/featureFlags'

export default function AffiliateBlock({ children }: { children: React.ReactNode }) {
  if (!AFFILIATE_ENABLED) return null
  return <>{children}</>
}
