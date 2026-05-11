/**
 * シンプルなレート制御ユーティリティ
 * - リクエスト間スリープ
 * - 429/403検知時の即座失敗
 */

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const MIN_REQUEST_DELAY_MS = parseInt(process.env.MIN_DELAY_MS || '5000', 10)
export const MUNICIPALITY_DELAY_MS = parseInt(process.env.MUNICIPALITY_DELAY_MS || '60000', 10)

/**
 * リクエスト前のスリープ。前回時刻を記録して間隔を保証する。
 */
let lastRequestAt = 0
export async function waitBeforeRequest() {
  const now = Date.now()
  const elapsed = now - lastRequestAt
  if (elapsed < MIN_REQUEST_DELAY_MS) {
    const remaining = MIN_REQUEST_DELAY_MS - elapsed
    console.log(`[ratelimiter] sleep ${remaining}ms before next request`)
    await sleep(remaining)
  }
  lastRequestAt = Date.now()
}

/**
 * fetch をラップして、レート制御 + 429/403 検知 + ランダムジッターを追加。
 * 429/403 を受けたら即座にプロセスを終了させる（人間が気付くため）。
 */
export async function rateLimitedFetch(url, options = {}) {
  await waitBeforeRequest()

  // ランダムジッター 0-2秒（時刻の規則性を弱める）
  const jitter = Math.floor(Math.random() * 2000)
  await sleep(jitter)

  const userAgent =
    process.env.USER_AGENT || '2ndhappiness-bot/1.0 (+contact@2ndhappiness.com)'

  const response = await fetch(url, {
    ...options,
    headers: {
      'User-Agent': userAgent,
      'Accept-Language': 'ja,en;q=0.8',
      ...(options.headers || {}),
    },
  })

  if (response.status === 429 || response.status === 403) {
    console.error(
      `[ratelimiter] CRITICAL: ${response.status} from ${url}. Stopping pipeline.`,
    )
    process.exit(1)
  }

  return response
}
