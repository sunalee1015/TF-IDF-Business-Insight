export interface KeywordData {
  rank: number;
  word: string;
}

export interface ProductInsight {
  id: string;
  name: string;
  description: string;
  keywords: KeywordData[];
  insight: string;
  categories: { name: string; value: number }[];
  radarData: { subject: string; A: number; fullMark: number }[];
}

export const PRODUCTS: ProductInsight[] = [
  {
    id: "airpods",
    name: "에어팟프로2세대",
    description: "프리미엄 무선 이어폰 시장의 기술적 리더",
    keywords: [
      { rank: 1, word: "좋아요" }, { rank: 2, word: "너무" }, { rank: 3, word: "에어팟" },
      { rank: 4, word: "만족합니다" }, { rank: 5, word: "감사합니다" }, { rank: 6, word: "좋네요" },
      { rank: 7, word: "배송" }, { rank: 8, word: "배송도" }, { rank: 9, word: "프로" },
      { rank: 10, word: "좋습니다" }, { rank: 11, word: "역시" }, { rank: 12, word: "정말" },
      { rank: 13, word: "빠르고" }, { rank: 14, word: "아주" }, { rank: 15, word: "좋고" },
      { rank: 16, word: "노이즈" }, { rank: 17, word: "노캔" }, { rank: 18, word: "ㅎㅎ" },
      { rank: 19, word: "진짜" }, { rank: 20, word: "음질" }, { rank: 21, word: "확실히" },
      { rank: 22, word: "처음" }, { rank: 23, word: "가격" }, { rank: 24, word: "정품" },
      { rank: 25, word: "역시나" }, { rank: 26, word: "추천" }, { rank: 27, word: "소리" },
      { rank: 28, word: "성능" }, { rank: 29, word: "사용" }, { rank: 30, word: "최고" }
    ],
    insight: "에어팟 프로 2세대의 키워드 분석 결과, '노이즈', '노캔', '음질', '소리', '성능'과 같은 기술적 완성도에 대한 언급이 상위권을 차지하고 있습니다. 이는 프리미엄 무선 이어폰 시장에서 소비자들이 가장 중요하게 생각하는 가치가 성능임을 증명합니다. 또한 '배송', '빠르고' 등의 키워드가 동반되는 것으로 보아, 고가 제품일수록 신속하고 안전한 배송 서비스가 구매 만족도에 결정적인 역할을 함을 알 수 있습니다. '정품' 키워드의 등장은 가품에 대한 우려와 신뢰할 수 있는 판매처 확보의 중요성을 시사합니다. 전반적으로 브랜드 신뢰도와 하이엔드 기능이 조화를 이루는 양상을 보입니다.",
    categories: [
      { name: "성능/기술", value: 45 },
      { name: "배송/서비스", value: 25 },
      { name: "만족도", value: 20 },
      { name: "가격/신뢰", value: 10 }
    ],
    radarData: [
      { subject: "음질", A: 95, fullMark: 100 },
      { subject: "배송속도", A: 88, fullMark: 100 },
      { subject: "가성비", A: 65, fullMark: 100 },
      { subject: "노이즈캔슬링", A: 98, fullMark: 100 },
      { subject: "정품신뢰", A: 92, fullMark: 100 }
    ]
  },
  {
    id: "omega3",
    name: "오메가3",
    description: "건강 관리를 위한 필수 영양제",
    keywords: [
      { rank: 1, word: "좋아요" }, { rank: 2, word: "꾸준히" }, { rank: 3, word: "항상" },
      { rank: 4, word: "먹고" }, { rank: 5, word: "배송도" }, { rank: 6, word: "배송" },
      { rank: 7, word: "빠르고" }, { rank: 8, word: "감사합니다" }, { rank: 9, word: "저렴하게" },
      { rank: 10, word: "좋네요" }, { rank: 11, word: "오메가3" }, { rank: 12, word: "있어요" },
      { rank: 13, word: "만족합니다" }, { rank: 14, word: "먹는" }, { rank: 15, word: "배송이" },
      { rank: 16, word: "너무" }, { rank: 17, word: "있습니다" }, { rank: 18, word: "구매했어요" },
      { rank: 19, word: "좋습니다" }, { rank: 20, word: "같아요" }, { rank: 21, word: "받았습니다" },
      { rank: 22, word: "생각보다" }, { rank: 23, word: "계속" }, { rank: 24, word: "제품" },
      { rank: 25, word: "아주" }, { rank: 26, word: "유통기한도" }, { rank: 27, word: "유통기한" },
      { rank: 28, word: "빠르게" }, { rank: 29, word: "효과" }, { rank: 30, word: "세일" }
    ],
    insight: "오메가3 리뷰에서는 '꾸준히', '항상', '계속'과 같은 장기 복용 관련 키워드가 두드러집니다. 이는 건강기능식품 특유의 높은 재구매율과 브랜드 충성도를 나타냅니다. '저렴하게', '가성비', '세일' 등의 키워드는 소비자들이 가격 민감도가 높으며 프로모션에 민감하게 반응함을 보여줍니다. '유통기한'에 대한 관심은 신선도가 중요한 유지류 영양제의 특성을 반영하며, 판매자는 유통기한 관리 및 투명한 정보 공개를 통해 신뢰도를 높일 필요가 있습니다. 효과에 대한 직접적인 언급보다는 구매 경험과 신뢰도 위주의 키워드가 주를 이루는 것이 특징입니다.",
    categories: [
      { name: "복용경험", value: 40 },
      { name: "가격/할인", value: 30 },
      { name: "배송", value: 20 },
      { name: "품질/기한", value: 10 }
    ],
    radarData: [
      { subject: "신선도", A: 85, fullMark: 100 },
      { subject: "배송속도", A: 90, fullMark: 100 },
      { subject: "가성비", A: 95, fullMark: 100 },
      { subject: "재구매의사", A: 92, fullMark: 100 },
      { subject: "포장상태", A: 80, fullMark: 100 }
    ]
  },
  {
    id: "dalba",
    name: "달바선크림",
    description: "기능성과 사용감을 동시에 잡은 프리미엄 선케어",
    keywords: [
      { rank: 1, word: "좋아요" }, { rank: 2, word: "너무" }, { rank: 3, word: "좋고" },
      { rank: 4, word: "발림성도" }, { rank: 5, word: "촉촉하고" }, { rank: 6, word: "달바" },
      { rank: 7, word: "발림성" }, { rank: 8, word: "좋네요" }, { rank: 9, word: "톤업" },
      { rank: 10, word: "저렴하게" }, { rank: 11, word: "톤업도" }, { rank: 12, word: "부드럽게" },
      { rank: 13, word: "발림성이" }, { rank: 14, word: "좋아서" }, { rank: 15, word: "같아요" },
      { rank: 16, word: "만족합니다" }, { rank: 17, word: "자연스럽게" }, { rank: 18, word: "바르고" },
      { rank: 19, word: "톤업이" }, { rank: 20, word: "배송도" }, { rank: 21, word: "발리고" },
      { rank: 22, word: "선크림" }, { rank: 23, word: "되고" }, { rank: 24, word: "감사합니다" },
      { rank: 25, word: "없고" }, { rank: 26, word: "있어요" }, { rank: 27, word: "피부가" },
      { rank: 28, word: "구매했어요" }, { rank: 29, word: "쓰고" }, { rank: 30, word: "광이" }
    ],
    insight: "달바 선크림은 '발림성', '촉촉하고', '부드럽게', '광이' 등 제형과 사용감에 대한 감성적 키워드가 압도적입니다. 특히 '톤업' 관련 키워드가 다수 포착되어, 단순 자외선 차단을 넘어 메이크업 베이스 대용으로서의 가치가 높게 평가받고 있음을 알 수 있습니다. '피부가' 키워드는 저자극이나 피부 개선 효과에 대한 기대를 반영합니다. 뷰티 카테고리에서는 제품의 시각적 효과(광택, 톤업)와 촉각적 만족도(발림성)를 강조하는 마케팅 전략이 유효할 것으로 보이며, 이는 브랜드 이미지를 고급스럽고 기능적인 방향으로 구축하는 데 기여하고 있습니다.",
    categories: [
      { name: "사용감/제형", value: 50 },
      { name: "기능(톤업)", value: 30 },
      { name: "만족도", value: 15 },
      { name: "배송", value: 5 }
    ],
    radarData: [
      { subject: "발림성", A: 98, fullMark: 100 },
      { subject: "촉촉함", A: 95, fullMark: 100 },
      { subject: "톤업효과", A: 90, fullMark: 100 },
      { subject: "지속력", A: 82, fullMark: 100 },
      { subject: "가격만족", A: 75, fullMark: 100 }
    ]
  },
  {
    id: "wipes",
    name: "물티슈",
    description: "일상의 편리함을 더하는 고품질 소모품",
    keywords: [
      { rank: 1, word: "좋아요" }, { rank: 2, word: "너무" }, { rank: 3, word: "물티슈" },
      { rank: 4, word: "항상" }, { rank: 5, word: "두께도" }, { rank: 6, word: "가성비" },
      { rank: 7, word: "가격도" }, { rank: 8, word: "미엘" }, { rank: 9, word: "있어요" },
      { rank: 10, word: "좋습니다" }, { rank: 11, word: "가격대비" }, { rank: 12, word: "좋고" },
      { rank: 13, word: "쓰고" }, { rank: 14, word: "많이" }, { rank: 15, word: "계속" },
      { rank: 16, word: "만족합니다" }, { rank: 17, word: "감사합니다" }, { rank: 18, word: "적당하고" },
      { rank: 19, word: "배송도" }, { rank: 20, word: "같아요" }, { rank: 21, word: "ㅎㅎ" },
      { rank: 22, word: "좋은" }, { rank: 23, word: "물티슈가" }, { rank: 24, word: "재구매" },
      { rank: 25, word: "있습니다" }, { rank: 26, word: "사용하기" }, { rank: 27, word: "좋아요" },
      { rank: 28, word: "써보니" }, { rank: 29, word: "애용하는" }, { rank: 30, word: "넉넉해서" }
    ],
    insight: "물티슈는 '두께도', '수분', '넉넉해서' 등 실용적인 물리적 속성에 집중된 리뷰 패턴을 보입니다. '가성비', '가격도', '가격대비' 키워드의 높은 빈도는 소모품으로서의 경제적 가치가 최우선임을 의미합니다. '항상', '애용하는', '재구매' 키워드는 특정 브랜드(미엘 등)에 정착한 충성 고객층이 두텁다는 것을 시사합니다. 대용량 묶음 판매나 정기 배송 서비스를 통해 가성비를 극대화하고 고객 이탈을 방지하는 전략이 핵심입니다. 일상 필수품인 만큼 품질의 균일성과 합리적인 가격 정책이 장기적인 시장 점유율 유지의 관건이 될 것입니다.",
    categories: [
      { name: "가성비/가격", value: 45 },
      { name: "물리적품질", value: 35 },
      { name: "재구매/충성", value: 15 },
      { name: "배송", value: 5 }
    ],
    radarData: [
      { subject: "두께", A: 88, fullMark: 100 },
      { subject: "수분감", A: 85, fullMark: 100 },
      { subject: "가성비", A: 98, fullMark: 100 },
      { subject: "포장편의", A: 82, fullMark: 100 },
      { subject: "배송속도", A: 90, fullMark: 100 }
    ]
  }
];
