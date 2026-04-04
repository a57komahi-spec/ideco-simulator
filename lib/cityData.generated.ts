// このファイルは generate_city_data.py が自動生成します。直接編集しないでください。
// 生成日時: 2026-04-03 20:53:55

export interface Facility {
  rank: number
  name: string
  type: string
  address: string
  price: string
  features: string[]
  recommend: string
  badge: string
  badgeColor: string
  operator: string
  rating: string
  url: string
  imageUrl?: string
  nearestStation?: string
}

export interface CityData {
  name: string
  prefecture: string
  description: string
  facilities: Facility[]
  highDemand?: boolean  // 高齢者人口に対して施設数が少ない自治体
}

export const generatedCityData: Record<string, CityData> = {
  "osaka": {
    "name": "大阪市",
    "prefecture": "大阪府",
    "description": "大阪市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "グランダ帝塚山",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市阿倍野区北畠2-11-64",
        "price": "月額 21.2万~137万円",
        "features": [
          "夜間有人体制",
          "テーマ別フロアで趣味継続",
          "日中看護師常駐"
        ],
        "recommend": "姫松駅から徒歩3分と通いやすく、2〜4階のテーマ別スペースで趣味を続けながら、夜間も有人体制で安心して過ごしたい方に",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.26",
        "url": "https://www.minnanokaigo.com/facility/000-5684333937/",
        "imageUrl": "https://img.minnanokaigo.com/shisetsu/71180/pic/20220113105933.jpg",
        "nearestStation": "姫松駅 徒歩3分"
      },
      {
        "rank": 2,
        "name": "グッドタイム リビング 大阪ベイ",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市港区弁天1-3-3",
        "price": "月額 29万~81.8万円",
        "features": [
          "弁天町駅直結・徒歩1分",
          "同棟にクリニックモール併設",
          "毎食2種から選べるレストラン"
        ],
        "recommend": "弁天町駅から徒歩1分で家族が通いやすく、同じビルに整形外科・眼科・歯科が入るため、持病の通院を施設内で完結させたい方に",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/010-2770401475/",
        "imageUrl": "https://img.minnanokaigo.com/shisetsu/353/panorama/20181002164247.jpg",
        "nearestStation": "弁天町駅 徒歩1分"
      },
      {
        "rank": 3,
        "name": "グランダ四天王寺",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市天王寺区勝山2-21-20",
        "price": "月額 28.3万~113.4万円",
        "features": [
          "屋上庭園から四天王寺を一望",
          "月1回イベント食・特別食あり",
          "ベネッセ運営・2008年開設の実績"
        ],
        "recommend": "四天王寺前夕陽ヶ丘駅から徒歩7分。屋上庭園から歴史ある四天王寺を眺めながら、アクティビティ豊富な環境でメリハリある生活を送りたい方に",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.21",
        "url": "https://www.minnanokaigo.com/facility/010-2771701311/",
        "imageUrl": "https://img.minnanokaigo.com/shisetsu/14296/pic/71536700-7b73-4b4d-9786-f052a9c7655b.jpg",
        "nearestStation": "四天王寺前夕陽ヶ丘駅 徒歩7分"
      },
      {
        "rank": 4,
        "name": "エスペラル城東",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市城東区鴫野西4-1-24",
        "price": "月額 23.4万~52.2万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "グリーンライフ 株式会社",
        "rating": "4.15",
        "url": "https://www.minnanokaigo.com/facility/010-2774401992/"
      },
      {
        "rank": 5,
        "name": "チャームスイート北畠関東・近畿を中心に「施設」ではなく「住まい」",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市阿倍野区相生通1-4-15",
        "price": "月額 19.6万~37.6万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.12",
        "url": "https://www.minnanokaigo.com/facility/010-2772304404/"
      },
      {
        "rank": 6,
        "name": "ベルパージュ大阪上本町「自分らしい暮らし」の実現を掲げ、みまもり・在宅",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市天王寺区筆ケ崎町5-52",
        "price": "月額 24.8万~73.9万円",
        "features": [
          "食事選択制"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "ALSOKジョイライフ 株式会社",
        "rating": "4.09",
        "url": "https://www.minnanokaigo.com/facility/010-2771701212/"
      },
      {
        "rank": 7,
        "name": "ブランシエールケア都島35年以上の実績に基づいた経験と知識で、お一人お",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市都島区善源寺町2-2-88",
        "price": "月額 23.7万~61.2万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 長谷工シニアウェルデザイン",
        "rating": "4.09",
        "url": "https://www.minnanokaigo.com/facility/016-2775202977/"
      },
      {
        "rank": 8,
        "name": "コンシェール阿倍野「介護を『快護』へ」全国約50拠点で、癒しと食の介護",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市阿倍野区旭町1-3-11",
        "price": "月額 22万~49.2万円",
        "features": [
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 リエイ",
        "rating": "4.09",
        "url": "https://www.minnanokaigo.com/facility/010-2772302606/"
      },
      {
        "rank": 9,
        "name": "交欒森ノ宮『できるを増やす介護サービス』を理念に掲げ、５０年の実績とノ",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市中央区森ノ宮中央2-6-16",
        "price": "月額 26.7万~69.5万円",
        "features": [
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社SOYOKAZE",
        "rating": "4.08",
        "url": "https://www.minnanokaigo.com/facility/010-2779403191/"
      },
      {
        "rank": 10,
        "name": "介護付き有料老人ホーム 大宮ケアホーム光",
        "type": "介護付き有料老人ホーム",
        "address": "大阪府大阪市旭区大宮4-2-27",
        "price": "月額 19.4万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "医療法人 浩治会",
        "rating": "4.06",
        "url": "https://www.minnanokaigo.com/facility/010-2773102666/#section-event"
      }
    ]
  },
  "yokohama": {
    "name": "横浜市",
    "prefecture": "神奈川県",
    "description": "横浜市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "リハビリホームグランダ中山",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市緑区台村町中村410-1",
        "price": "月額 24.8万~89.5万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.36",
        "url": "https://www.minnanokaigo.com/facility/000-3680804650/"
      },
      {
        "rank": 2,
        "name": "リハビリホームグランダ本郷台",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市栄区小菅ケ谷2-3-8",
        "price": "月額 22.8万~104.6万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.29",
        "url": "https://www.minnanokaigo.com/facility/000-7588596866/"
      },
      {
        "rank": 3,
        "name": "プラテシア センター南",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市都筑区茅ケ崎中央56-9",
        "price": "月額 14.2万~18.9万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.29",
        "url": "https://www.minnanokaigo.com/facility/000-4099795338/"
      },
      {
        "rank": 4,
        "name": "グッドタイム リビング 長津田みなみ台",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市緑区長津田みなみ台2-12-13",
        "price": "月額 28万~43.8万円",
        "features": [
          "食事選択制",
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.29",
        "url": "https://www.minnanokaigo.com/facility/000-5657212687/#section-event"
      },
      {
        "rank": 5,
        "name": "メディカル・リハビリホームグランダ三ツ沢",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市神奈川区三ツ沢西町11-26",
        "price": "月額 24.2万~110.8万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.27",
        "url": "https://www.minnanokaigo.com/facility/010-1470600220/"
      },
      {
        "rank": 6,
        "name": "チャームプレミア山手町関東・近畿を中心に「施設」ではなく「住まい」",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市中区山手町245-1",
        "price": "月額 35.4万~181.8万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.27",
        "url": "https://www.minnanokaigo.com/facility/010-1470402726/"
      },
      {
        "rank": 7,
        "name": "カーサプラチナみなとみらい",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市西区花咲町6-143",
        "price": "月額 18.4万~120.2万円",
        "features": [
          "食事選択制"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ハートフルケア",
        "rating": "4.27",
        "url": "https://www.minnanokaigo.com/facility/010-1470301605/"
      },
      {
        "rank": 8,
        "name": "グッドタイム リビング センター南",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市都筑区茅ケ崎中央56-9",
        "price": "月額 28万~52.1万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.26",
        "url": "https://www.minnanokaigo.com/facility/000-7802767818/#section-event"
      },
      {
        "rank": 9,
        "name": "ボンセジュール荏田",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市青葉区荏田西2-14-6",
        "price": "月額 21.8万~70.5万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-1473702486/"
      },
      {
        "rank": 10,
        "name": "メディカル・リハビリホームグランダ横濱三渓園",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県横浜市中区本牧元町40-7",
        "price": "月額 25.3万~101.4万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-1470403286/"
      }
    ]
  },
  "nagoya": {
    "name": "名古屋市",
    "prefecture": "愛知県",
    "description": "名古屋市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "リハビリホームグランダ那古野",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市中村区那古野1-39-12",
        "price": "月額 24.2万~156.7万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.43",
        "url": "https://www.minnanokaigo.com/facility/000-1492551655/"
      },
      {
        "rank": 2,
        "name": "アリア八雲・山手通",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市昭和区八雲町54-2",
        "price": "月額 27.8万~282.2万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.38",
        "url": "https://www.minnanokaigo.com/facility/000-6635312158/"
      },
      {
        "rank": 3,
        "name": "リハビリホームグランダ一社",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市名東区亀の井2-3",
        "price": "月額 21.5万~92.7万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.32",
        "url": "https://www.minnanokaigo.com/facility/000-9423544709/"
      },
      {
        "rank": 4,
        "name": "リハビリホームボンセジュール徳重",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市緑区黒沢台5-1309-1",
        "price": "月額 18万~90.1万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.31",
        "url": "https://www.minnanokaigo.com/facility/000-3864348297/"
      },
      {
        "rank": 5,
        "name": "リハビリホームグランダ徳川",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市東区東大曽根町36-3",
        "price": "月額 20.1万~131.3万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.30",
        "url": "https://www.minnanokaigo.com/facility/000-4017659463/"
      },
      {
        "rank": 6,
        "name": "メディカル・リハビリホームグランダ陽明",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市瑞穂区田辺通3-19",
        "price": "月額 30.8万~107.6万円",
        "features": [
          "リハビリ設備充実",
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/010-2370801140/"
      },
      {
        "rank": 7,
        "name": "ボンセジュール天白笹原",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市天白区笹原町1703",
        "price": "月額 16.3万~94.6万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/000-3225254837/"
      },
      {
        "rank": 8,
        "name": "グランダ覚王山",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市千種区丸山町3-87-3",
        "price": "月額 22.9万~91.9万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.20",
        "url": "https://www.minnanokaigo.com/facility/000-7868443457/"
      },
      {
        "rank": 9,
        "name": "リハビリホームボンセジュール植田",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市天白区植田3-801-1",
        "price": "月額 17.8万~71.1万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.18",
        "url": "https://www.minnanokaigo.com/facility/000-3562036757/"
      },
      {
        "rank": 10,
        "name": "アリア八事",
        "type": "介護付き有料老人ホーム",
        "address": "愛知県名古屋市天白区八事天道525",
        "price": "月額 29.1万~294.3万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.17",
        "url": "https://www.minnanokaigo.com/facility/000-6856662323/"
      }
    ]
  },
  "kobe": {
    "name": "神戸市",
    "prefecture": "兵庫県",
    "description": "神戸市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "チャームプレミア御影関東・近畿を中心に「施設」ではなく「住まい」",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区住吉本町3-13-7",
        "price": "月額 23.2万~83.8万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.34",
        "url": "https://www.minnanokaigo.com/facility/010-2870103344/"
      },
      {
        "rank": 2,
        "name": "メディカル・リハビリホームグランダ神戸東灘",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区深江南町2-8-25",
        "price": "月額 28.1万~96.3万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.30",
        "url": "https://www.minnanokaigo.com/facility/010-2870102056/"
      },
      {
        "rank": 3,
        "name": "メディカル・リハビリホームグランダ岡本",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区岡本6-13-3",
        "price": "月額 22.8万~79.3万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.26",
        "url": "https://www.minnanokaigo.com/facility/000-0522347078/"
      },
      {
        "rank": 4,
        "name": "グランダ御影山手弐番館",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区御影山手1-2-31",
        "price": "月額 27.8万~95.1万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/010-2870101850/"
      },
      {
        "rank": 5,
        "name": "グッドタイム リビング 御影",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区御影中町3-2-3",
        "price": "月額 30.8万~95.9万円",
        "features": [
          "食事選択制",
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/000-1105081439/"
      },
      {
        "rank": 6,
        "name": "メディカル・リハビリホームグランダ神戸北野",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市中央区北野町4-12-1",
        "price": "月額 24.9万~107.5万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-2875103497/"
      },
      {
        "rank": 7,
        "name": "グランダ御影山手",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区御影山手1-2-26",
        "price": "月額 25.2万~91.4万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-2870101181/"
      },
      {
        "rank": 8,
        "name": "プレザングラン岡本きめ細やかな介護とプライベートな生活を合わせた上質な",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市東灘区岡本7-3-21",
        "price": "月額 23.4万~43.4万円",
        "features": [
          "食事選択制"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 ケア21",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-2870103799/"
      },
      {
        "rank": 9,
        "name": "チャームスイート神戸垂水関東・近畿を中心に「施設」ではなく「住まい」",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市垂水区宮本町1-29",
        "price": "月額 18万~55.9万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/010-2870804818/"
      },
      {
        "rank": 10,
        "name": "メディカルホームグランダ御影西",
        "type": "介護付き有料老人ホーム",
        "address": "兵庫県神戸市灘区記田町2-1-11",
        "price": "月額 28万~95万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.19",
        "url": "https://www.minnanokaigo.com/facility/010-2870201841/#section-event"
      }
    ]
  },
  "fukuoka": {
    "name": "福岡市",
    "prefecture": "福岡県",
    "description": "福岡市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "メディカルホームグランダ西新",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市早良区西新2-12-5",
        "price": "月額 22.8万~151.9万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.30",
        "url": "https://www.minnanokaigo.com/facility/000-5335325683/"
      },
      {
        "rank": 2,
        "name": "フィランソレイユ笹丘介護保険制度以前から取り組んできた40年以上のノウ",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市中央区笹丘1-25-7",
        "price": "月額 22.4万~25.7万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ピーススタッフ",
        "rating": "4.28",
        "url": "https://www.minnanokaigo.com/facility/010-4071002754/"
      },
      {
        "rank": 3,
        "name": "サンカルナ西新",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市早良区西新4-8-8",
        "price": "月額 22.2万~41.8万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "西鉄ケアサービス 株式会社",
        "rating": "4.27",
        "url": "https://www.minnanokaigo.com/facility/000-5208974457/"
      },
      {
        "rank": 4,
        "name": "メディカルホームグランダ高宮",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市南区多賀1-6-3",
        "price": "月額 22.8万~127万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.26",
        "url": "https://www.minnanokaigo.com/facility/000-0502488943/"
      },
      {
        "rank": 5,
        "name": "ウィルマーク香椎浜介護保険制度以前から取り組んできた40年以上のノウハ",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市東区香椎浜3-2-1",
        "price": "月額 14.7万~29.1万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 アビタシオン",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/010-4070806072/"
      },
      {
        "rank": 6,
        "name": "アビタシオン浄水介護保険制度以前から取り組んできた40年以上のノウハウ",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市中央区薬院4-1-26薬院大通センタービル弐番館",
        "price": "月額 24.3万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 アビタシオン",
        "rating": "4.21",
        "url": "https://www.minnanokaigo.com/facility/010-4071001459/"
      },
      {
        "rank": 7,
        "name": "ココファン福岡西新全国200拠点以上を展開する、運営拠点数No.1の学",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市早良区高取1-1-49",
        "price": "月額 25.9万~42.1万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 学研ココファン",
        "rating": "4.20",
        "url": "https://www.minnanokaigo.com/facility/000-4719166695/"
      },
      {
        "rank": 8,
        "name": "メディカル・リハビリホームグランダ博多",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市博多区竹下5-25-17",
        "price": "月額 22.1万~92.9万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.20",
        "url": "https://www.minnanokaigo.com/facility/000-2604006941/"
      },
      {
        "rank": 9,
        "name": "サンカルナ香椎照葉",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市東区香椎照葉5-1-15",
        "price": "月額 19万~46.8万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "西鉄ケアサービス 株式会社",
        "rating": "4.18",
        "url": "https://www.minnanokaigo.com/facility/000-5632640523/"
      },
      {
        "rank": 10,
        "name": "メディカル・リハビリホームグランダ薬院大通",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県福岡市中央区薬院4-2-2",
        "price": "月額 23.9万~140.5万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.16",
        "url": "https://www.minnanokaigo.com/facility/000-1961647561/"
      }
    ]
  },
  "kitakyushu": {
    "name": "北九州市",
    "prefecture": "福岡県",
    "description": "北九州市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "ヴィラノーヴァ大谷介護保険制度以前から取り組んできた40年以上のノウハ",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市八幡東区天神町2-41",
        "price": "月額 14.4万~37.6万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 アビタシオン",
        "rating": "4.09",
        "url": "https://www.minnanokaigo.com/facility/010-4070602208/#section-event"
      },
      {
        "rank": 2,
        "name": "サンカルナ小倉大手町",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市小倉北区大手町12-6",
        "price": "月額 18.5万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "西鉄ケアサービス 株式会社",
        "rating": "4.09",
        "url": "https://www.minnanokaigo.com/facility/000-1060235910/"
      },
      {
        "rank": 3,
        "name": "さわやか海響館",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市若松区浜町1-11-13",
        "price": "月額 17万~17.3万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 さわやか倶楽部",
        "rating": "4.00",
        "url": "https://www.minnanokaigo.com/facility/010-4070201043/"
      },
      {
        "rank": 4,
        "name": "いこいの里若園",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市小倉南区若園3-11-1",
        "price": "月額 15.4万~19万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ウキシロケアセンター",
        "rating": "3.95",
        "url": "https://www.minnanokaigo.com/facility/000-8526124642/"
      },
      {
        "rank": 5,
        "name": "住宅型有料老人ホーム ここあの里則松",
        "type": "住宅型有料老人ホーム",
        "address": "福岡県北九州市八幡西区則松6-9-41",
        "price": "月額 11.2万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ここあ介護サービス",
        "rating": "3.94",
        "url": "https://www.minnanokaigo.com/facility/000-5121276859/"
      },
      {
        "rank": 6,
        "name": "介護付有料老人ホーム ラフィーネ",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市小倉南区上葛原2-21-11",
        "price": "月額 17万~17.7万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "ファーストライフ 株式会社",
        "rating": "3.93",
        "url": "https://www.minnanokaigo.com/facility/010-4070505138/"
      },
      {
        "rank": 7,
        "name": "メルベイユひびきの",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市若松区小敷323-3",
        "price": "月額 14.5万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "有限会社 ステータス",
        "rating": "3.92",
        "url": "https://www.minnanokaigo.com/facility/000-1922268136/"
      },
      {
        "rank": 8,
        "name": "木の葉",
        "type": "介護付き有料老人ホーム",
        "address": "福岡県北九州市八幡西区三ツ頭2-15-10",
        "price": "月額 14.5万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "有限会社 ミラクル",
        "rating": "3.92",
        "url": "https://www.minnanokaigo.com/facility/000-1683745018/"
      },
      {
        "rank": 9,
        "name": "グループホーム この葉",
        "type": "グループホーム",
        "address": "福岡県北九州市八幡西区三ツ頭2-15-10",
        "price": "月額 14.5万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "認知症の方・少人数のアットホームな環境を希望する方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "有限会社 ミラクル",
        "rating": "3.92",
        "url": "https://www.minnanokaigo.com/facility/022-4070703238/"
      },
      {
        "rank": 10,
        "name": "特別養護老人ホーム ケアイン大鳥居 ユニット型個室",
        "type": "特別養護老人ホーム",
        "address": "福岡県北九州市若松区大鳥居64-1",
        "price": "月額 14.5万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "要介護3以上の方・費用を抑えたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "社会福祉法人 広緑会",
        "rating": "3.92",
        "url": "https://www.minnanokaigo.com/facility/024-4070201886/"
      }
    ]
  },
  "kyoto": {
    "name": "京都市",
    "prefecture": "京都府",
    "description": "京都市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "アリア嵯峨嵐山",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市右京区嵯峨天龍寺立石町5-10",
        "price": "月額 32万~177万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.33",
        "url": "https://www.minnanokaigo.com/facility/000-2374978461/"
      },
      {
        "rank": 2,
        "name": "アリア京都鴨川御所東",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市上京区梶井町457-1",
        "price": "月額 31.3万~314.6万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.33",
        "url": "https://www.minnanokaigo.com/facility/000-9626730677/#section-event"
      },
      {
        "rank": 3,
        "name": "京都ヴィラ",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市北区上賀茂ケシ山1",
        "price": "月額 16.7万~31万円",
        "features": [
          "食事選択制"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 愛仁苑",
        "rating": "4.31",
        "url": "https://www.minnanokaigo.com/facility/010-2670100029/"
      },
      {
        "rank": 4,
        "name": "ヒルデモア東山",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市山科区日ノ岡夷谷町21-15",
        "price": "月額 28.6万~162.7万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "東京海上日動ベターライフサービス 株式会社",
        "rating": "4.28",
        "url": "https://www.minnanokaigo.com/facility/010-2674100611/"
      },
      {
        "rank": 5,
        "name": "グッドタイム リビング 嵯峨広沢",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市右京区嵯峨広沢御所ノ内町34-1",
        "price": "月額 31万~59.4万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "グッドタイムリビング株式会社",
        "rating": "4.26",
        "url": "https://www.minnanokaigo.com/facility/010-2670701842/"
      },
      {
        "rank": 6,
        "name": "チャームプレミア 京都烏丸六角関東・近畿を中心に「施設」ではなく「住ま",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市中京区六角通烏丸東入ル堂之前町245-1",
        "price": "月額 26.5万~46.5万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/010-2670301452/#section-event"
      },
      {
        "rank": 7,
        "name": "プレザングラン京都円町きめ細やかな介護とプライベートな生活を合わせた上",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市中京区西ノ京塚本町3-1",
        "price": "月額 19.7万~70.2万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ケア21",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/010-2670301460/"
      },
      {
        "rank": 8,
        "name": "チャームプレミア京都岡崎関東・近畿を中心に「施設」ではなく「住まい」",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市東山区三条通白川橋東入5-東町227-1",
        "price": "月額 28.6万~129.9万円",
        "features": [
          "リハビリ設備充実",
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 チャーム・ケア・コーポレーション",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/000-6028309810/"
      },
      {
        "rank": 9,
        "name": "グランダ山ノ内",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市右京区山ノ内養老町7-1",
        "price": "月額 21.2万~57万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.20",
        "url": "https://www.minnanokaigo.com/facility/000-0748861124/"
      },
      {
        "rank": 10,
        "name": "ウェルエイジみぶ",
        "type": "介護付き有料老人ホーム",
        "address": "京都府京都市中京区壬生梛ノ宮町31",
        "price": "月額 19万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 京都壬生苑",
        "rating": "4.16",
        "url": "https://www.minnanokaigo.com/facility/010-2670300132/"
      }
    ]
  },
  "kawasaki": {
    "name": "川崎市",
    "prefecture": "神奈川県",
    "description": "川崎市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "メディカルホームボンセジュール中野島",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市多摩区中野島3-14-22",
        "price": "月額 22.8万~75万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.28",
        "url": "https://www.minnanokaigo.com/facility/010-1475401723/"
      },
      {
        "rank": 2,
        "name": "ボンセジュール武蔵新城",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市高津区千年773-2",
        "price": "月額 20.2万~62.9万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.27",
        "url": "https://www.minnanokaigo.com/facility/010-1475301873/"
      },
      {
        "rank": 3,
        "name": "リハビリホームくらら鷺沼",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市宮前区小台2-20-12",
        "price": "月額 39.7万~44.5万円",
        "features": [
          "リハビリ設備充実",
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/010-1475500136/"
      },
      {
        "rank": 4,
        "name": "メディカル・リハビリホームボンセジュールはるひ野",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市麻生区はるひ野4-19-1",
        "price": "月額 24.4万~79.6万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.25",
        "url": "https://www.minnanokaigo.com/facility/010-1475601322/"
      },
      {
        "rank": 5,
        "name": "グランダ溝の口",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市高津区坂戸1-10-15",
        "price": "月額 21.4万~93.1万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.24",
        "url": "https://www.minnanokaigo.com/facility/000-3934564362/"
      },
      {
        "rank": 6,
        "name": "メディカルホームグランダ生田",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市多摩区生田7-21-1",
        "price": "月額 21.7万~46.2万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/000-2583476142/"
      },
      {
        "rank": 7,
        "name": "リハビリホームグランダ新百合ヶ丘",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市麻生区古沢109-3",
        "price": "月額 22.6万~97.4万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.23",
        "url": "https://www.minnanokaigo.com/facility/000-0228605302/"
      },
      {
        "rank": 8,
        "name": "ニチイホーム登戸施設介護40年の実績を活かした安心・安全で楽しい暮らし",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市多摩区菅馬場1-27-18",
        "price": "月額 22.2万~62.7万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 ニチイケアパレス",
        "rating": "4.21",
        "url": "https://www.minnanokaigo.com/facility/010-1475401459/"
      },
      {
        "rank": 9,
        "name": "総生会ロイヤルホーム",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市麻生区上麻生6-28-1",
        "price": "月額 32.4万~70.9万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "医療法人社団 総生会",
        "rating": "4.19",
        "url": "https://www.minnanokaigo.com/facility/010-1475601231/"
      },
      {
        "rank": 10,
        "name": "リハビリホームボンセジュール溝の口",
        "type": "介護付き有料老人ホーム",
        "address": "神奈川県川崎市高津区下作延5-11-12",
        "price": "月額 23.1万~83.6万円",
        "features": [
          "リハビリ設備充実"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.19",
        "url": "https://www.minnanokaigo.com/facility/010-1475301865/"
      }
    ]
  },
  "saitama": {
    "name": "さいたま市",
    "prefecture": "埼玉県",
    "description": "さいたま市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "浦和成匠邸介護に対して真摯に向き合いながら、ご利用者様の暮らしを支えま",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市南区別所6-4-40",
        "price": "月額 27.8万~121.9万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.28",
        "url": "https://www.minnanokaigo.com/facility/000-3137487545/"
      },
      {
        "rank": 2,
        "name": "ブランシエール大宮公園35年以上の実績に基づいた経験と知識で、お一人お",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市見沼区大和田町1-1275",
        "price": "月額 24.4万~55.2万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 長谷工シニアウェルデザイン",
        "rating": "4.11",
        "url": "https://www.minnanokaigo.com/facility/010-1176519377/"
      },
      {
        "rank": 3,
        "name": "ボンセジュール南浦和",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市南区南浦和2-9-3",
        "price": "月額 19.3万~38.5万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.08",
        "url": "https://www.minnanokaigo.com/facility/010-1176510186/"
      },
      {
        "rank": 4,
        "name": "グランダ武蔵浦和",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市南区白幡6-10-15",
        "price": "月額 28.1万~83.1万円",
        "features": [
          "機能訓練あり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.08",
        "url": "https://www.minnanokaigo.com/facility/010-1176508537/"
      },
      {
        "rank": 5,
        "name": "ニチイホーム与野本町施設介護40年の実績を活かした安心・安全で楽しい暮",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市桜区上大久保932-1",
        "price": "月額 22.2万~46.7万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ニチイケアパレス",
        "rating": "4.07",
        "url": "https://www.minnanokaigo.com/facility/010-1176512919/"
      },
      {
        "rank": 6,
        "name": "アズハイム東浦和「やさしい最先端」という独自の介護スタイルで、自分の人",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市緑区東浦和2-22-3",
        "price": "月額 17.9万~56.1万円",
        "features": [
          "食事選択制",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "株式会社 アズパートナーズ",
        "rating": "4.06",
        "url": "https://www.minnanokaigo.com/facility/010-1176508388/"
      },
      {
        "rank": 7,
        "name": "スマイリングホーム メディス武蔵浦和",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市南区鹿手袋5-5-6",
        "price": "月額 30.3万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "グリーンライフ 株式会社",
        "rating": "4.06",
        "url": "https://www.minnanokaigo.com/facility/010-1176511507/"
      },
      {
        "rank": 8,
        "name": "聖蹟プライムケアコート東大宮",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市見沼区春野2-10-25",
        "price": "月額 21.1万~43万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 フォープロプス",
        "rating": "4.06",
        "url": "https://www.minnanokaigo.com/facility/010-1176507927/"
      },
      {
        "rank": 9,
        "name": "聖蹟プライムコート東大宮",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市見沼区春野2-10-25",
        "price": "月額 21.1万~39.9万円",
        "features": [
          "食事選択制"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 フォープロプス",
        "rating": "4.05",
        "url": "https://www.minnanokaigo.com/facility/000-3788045523/"
      },
      {
        "rank": 10,
        "name": "リアンレーヴ浦和介護業界25年以上のノウハウをもとに、自立支援を目指す",
        "type": "介護付き有料老人ホーム",
        "address": "埼玉県さいたま市浦和区前地3-5-2",
        "price": "月額 24.6万~29.6万円",
        "features": [
          "食事選択制",
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 木下の介護",
        "rating": "4.05",
        "url": "https://www.minnanokaigo.com/facility/010-1176516548/"
      }
    ]
  },
  "hiroshima": {
    "name": "広島市",
    "prefecture": "広島県",
    "description": "広島市内の老人ホーム・介護施設をランキング形式で紹介します。",
    "facilities": [
      {
        "rank": 1,
        "name": "メディカルホームグランダ広島東荒神",
        "type": "介護付き有料老人ホーム",
        "address": "広島県広島市南区東荒神町4-23",
        "price": "月額 21.4万~151.8万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "編集部イチオシ",
        "badgeColor": "#F57C00",
        "operator": "株式会社 ベネッセスタイルケア",
        "rating": "4.38",
        "url": "https://www.minnanokaigo.com/facility/000-1459606752/"
      },
      {
        "rank": 2,
        "name": "たのしい家 安佐南地域に根ざした安心生活で生きがい・楽しさ・笑顔があふ",
        "type": "介護付き有料老人ホーム",
        "address": "広島県広島市安佐南区祇園6-12-31",
        "price": "月額 15.7万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "高評価",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ケア21",
        "rating": "3.99",
        "url": "https://www.minnanokaigo.com/facility/022-3490201526/"
      },
      {
        "rank": 3,
        "name": "グループホーム たのしい家大原地域に根ざした安心生活で生きがい・楽しさ",
        "type": "グループホーム",
        "address": "広島県広島市安佐南区伴東7-59-11",
        "price": "月額 13.2万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "認知症の方・少人数のアットホームな環境を希望する方におすすめ",
        "badge": "おすすめ",
        "badgeColor": "#2E7D52",
        "operator": "株式会社 ケア21",
        "rating": "3.97",
        "url": "https://www.minnanokaigo.com/facility/022-3490201047/"
      },
      {
        "rank": 4,
        "name": "あいらの杜広島戸坂",
        "type": "介護付き有料老人ホーム",
        "address": "広島県広島市東区戸坂大上3-2-22",
        "price": "月額 18.3万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "評価◎",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 はれコーポレーション",
        "rating": "3.93",
        "url": "https://www.minnanokaigo.com/facility/010-3470109046/"
      },
      {
        "rank": 5,
        "name": "けあビジョンホーム広島",
        "type": "介護付き有料老人ホーム",
        "address": "広島県広島市安佐北区白木町井原823-1",
        "price": "月額 11.4万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "人気施設",
        "badgeColor": "#1A5E9E",
        "operator": "株式会社 ビジュアルビジョン",
        "rating": "3.90",
        "url": "https://www.minnanokaigo.com/facility/000-3129697156/"
      },
      {
        "rank": 6,
        "name": "グループホーム ふれあい戸坂東",
        "type": "グループホーム",
        "address": "広島県広島市東区戸坂千足1-12-46",
        "price": "月額 15.6万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "認知症の方・少人数のアットホームな環境を希望する方におすすめ",
        "badge": "注目",
        "badgeColor": "#6A1B9A",
        "operator": "医療法人 好縁会",
        "rating": "3.87",
        "url": "https://www.minnanokaigo.com/facility/022-3490100843/"
      },
      {
        "rank": 7,
        "name": "えにしの里",
        "type": "介護付き有料老人ホーム",
        "address": "広島県東広島市西条町寺家7432-1",
        "price": "月額 20.8万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "費用重視",
        "badgeColor": "#1A5E9E",
        "operator": "医療法人 好縁会",
        "rating": "3.85",
        "url": "https://www.minnanokaigo.com/facility/016-3472502610/"
      },
      {
        "rank": 8,
        "name": "介護付き有料老人ホーム やすらぎの里",
        "type": "介護付き有料老人ホーム",
        "address": "広島県東広島市黒瀬町兼広160-1",
        "price": "月額 20.2万~20.5万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "介護サービスが充実した環境で安心して過ごしたい方におすすめ",
        "badge": "医療対応",
        "badgeColor": "#B71C1C",
        "operator": "株式会社 ウェルケア",
        "rating": "3.85",
        "url": "https://www.minnanokaigo.com/facility/010-3472503147/"
      },
      {
        "rank": 9,
        "name": "グループホーム ふれあい段原山崎",
        "type": "グループホーム",
        "address": "広島県広島市南区段原山崎2-3-8",
        "price": "月額 15.6万円",
        "features": [
          "機能訓練あり",
          "介護浴槽完備"
        ],
        "recommend": "認知症の方・少人数のアットホームな環境を希望する方におすすめ",
        "badge": "リハビリ◎",
        "badgeColor": "#2E7D52",
        "operator": "医療法人 好縁会",
        "rating": "3.83",
        "url": "https://www.minnanokaigo.com/facility/022-3490100686/"
      },
      {
        "rank": 10,
        "name": "AOI・サービス付きマンション",
        "type": "サービス付き高齢者向け住宅",
        "address": "広島県東広島市八本松東3-2-8",
        "price": "月額 17.9万~31.4万円",
        "features": [
          "介護スタッフ常駐",
          "個別ケアプラン",
          "食事サービスあり"
        ],
        "recommend": "比較的元気な方・自立した生活を続けたい方におすすめ",
        "badge": "アクセス良好",
        "badgeColor": "#1A5E9E",
        "operator": "バイオシステム 株式会社",
        "rating": "3.83",
        "url": "https://www.minnanokaigo.com/facility/000-5403447095/"
      }
    ]
  }
}
