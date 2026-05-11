# topic-queue.md｜記事生成キュー

このファイルは、スケジュール自動実行で記事を作る順番を管理するキューです。
スケジュールが起動するたびに、status が `pending` の最上段の項目を1つ選び、生成完了後に `completed` に更新します。

## ステータス定義
- `pending`：未着手
- `in_progress`：生成中
- `completed`：完了（commit 済み）
- `skipped`：意図的にスキップ（理由を `notes` に書く）

## キュー一覧

| # | status | route name | テーマ | 想定文字数 | notes |
|---|---|---|---|---|---|
| 1 | completed | care-manager-relation | ケアマネージャーとの上手な付き合い方｜信頼関係の築き方 | 6,000字前後 | 2026-05-09 自動生成完了（規制7.5/empathy8.0/SEO7.5）。OneDrive Files-On-Demand 制約で .git/config がサンドボックスから読めず通常 commit 失敗のため、新 commit object（5c040208b71b344f633bbf010c06aff9acf58163）を .git/objects/ に配置し、新 commit ハッシュを refs/heads/auto-care-manager-relation-pending に保存。Windows 側で `commit-care-manager-relation.ps1`（C:\Users\a57ko\OneDrive\Desktop\claude\直下）を実行→main を更新→AutoPushAll(5:30) で push される段取り。 |
| 2 | completed | dementia-care-basics | 認知症ケアの基本｜家族が知っておきたい接し方と進行ステージ | 7,000字前後 | 2026-05-12 自動生成完了（規制7.5/empathy8.2/SEO8.0）。Critical/Major 修正13件適用（グループホーム対象要件・要介護認定30日規定・初期集中支援チーム断定回避・効能効果暗示削除・レビー小体型の認知の変動追加・徘徊→ひとり歩き・BPSD英語表記・地域包括職種正式名称・特養を選択肢追加・体験談架空注記強化・PR表示の選定基準追加・title へのサイト名サフィックス・reviewedBy 構造化追加・冒頭イライラ肯定・NG見出しソフト化・自己ケア表現マイルド化）。 |
| 3 | pending | insurance-usage-guide | 介護保険の使い方完全ガイド｜要介護認定から給付までの全工程 | 8,000字前後 |  |
| 4 | pending | sibling-care-discussion | 兄弟姉妹で介護を分担する話し合い方｜揉めないための整理術 | 6,000字前後 |  |
| 5 | pending | caregiver-mental-care | 介護する家族のメンタルケア｜燃え尽きないための備え方 | 6,000字前後 |  |
| 6 | pending | post-admission-money | 老人ホーム入居後のお金の管理｜成年後見制度・財産管理のステップ | 7,000字前後 |  |
| 7 | pending | end-of-life-at-home | 老人ホームでの看取り｜最期を穏やかに過ごすための準備 | 6,000字前後 |  |
| 8 | pending | family-visit-rhythm | 入居後の家族訪問はどれくらい？関わり方の正解はあるか | 5,000字前後 |  |
| 9 | pending | choice-failure-lessons | 老人ホーム選びで失敗した家族から学ぶ7つの教訓 | 6,000字前後 |  |
| 10 | pending | facility-vs-home-care | 老人ホーム vs 在宅介護｜判断軸を整理する完全比較ガイド | 7,000字前後 |  |
| 11 | pending | short-stay-day-service | ショートステイ・デイサービスの賢い使い方｜在宅と施設の中間活用 | 6,000字前後 |  |
| 12 | pending | care-leave-system | 介護休業・介護休暇制度の使い方｜働きながら介護を続けるために | 6,000字前後 |  |

## 運用ルール
- スケジュール（火・木・土 朝5:00）が起動するたび、status が `pending` の最上段を1つ消化
- 生成成功時：status を `completed` に更新、生成日時を notes に記録
- 生成失敗時：status を pending に戻し、notes に失敗理由を記録
- 全件 completed になった時：このファイルに「キュー枯渇、次のテーマセットを設定してください」とメモ
