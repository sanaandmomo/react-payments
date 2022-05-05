export const CARD_FORM_RULE = {
  CARD_NUMBER_EACH_FULL_LENGTH: 4,
  CARD_EXPRATION_EACH_FULL_LENGTH: 2,
  CARD_EXPRATION_MIN_MONTH: 1,
  CARD_EXPRATION_MAX_MONTH: 12,
  CARD_OWNER_MAX_LENGTH: 30,
  CARD_CVC_FULL_LENGTH: 3,
  CARD_PASSWORD_FULL_LENGTH: 2,
};

export const ERROR_MESSAGE = {
  CARD_NUMBER_ONLY_NUMBER: '카드번호에 숫자만 입력해주세요.',
  ENTER_ALL_CARD_NUMBERS: `카드번호에 총 ${CARD_FORM_RULE.CARD_NUMBER_EACH_FULL_LENGTH}자리씩 모두 입력해주세요.`,
  CARD_EXPIRATION_ONLY_NUMBER: '카드 만료일에 숫자만 입력해주세요.',
  ENTER_ALL_CARD_EXPIRATION: `카드 만료월과 만료년을 각각 ${CARD_FORM_RULE.CARD_EXPRATION_EACH_FULL_LENGTH}자리씩 모두 입력해주세요.`,
  WITHIN_RANGE_CARD_EXPIRATION: `카드 만료월은 ${CARD_FORM_RULE.CARD_EXPRATION_MIN_MONTH}월부터 ${CARD_FORM_RULE.CARD_EXPRATION_MAX_MONTH}월 이내의 수만 입력해주세요.`,
  EXPIRATION_DATE_EXCEEDED: '입력하신 만료일은 이미 경과되었습니다.',
  WITHIN_RANGE_CARD_OWNER_LENGTH: `이름은 ${CARD_FORM_RULE.CARD_OWNER_MAX_LENGTH}글자 이내로 입력해주세요.`,
  CARD_CVC_ONLY_NUMBER: '보안코드에 숫자만 입력해주세요.',
  ENTER_ALL_CARD_CVC: `보안코드는 ${CARD_FORM_RULE.CARD_CVC_FULL_LENGTH}개의 수를 입력해주세요.`,
  CARD_PASSWORD_ONLY_NUMBER: '비밀번호에 숫자만 입력해주세요.',
  ENTER_ALL_CARD_PASSWORD: `비밀번호 앞 자리 ${CARD_FORM_RULE.CARD_PASSWORD_FULL_LENGTH}개를 입력해주세요.`,
  SELECT_CARD_COMPANY: '카드사를 선택해주세요.',
};

export const CARD_COMPANY_COLORS = {
  POCO_CARD_COMPANY: '--poco-card-company',
  JUNE_CARD_COMPANY: '--june-card-company',
  GONGONE_CARD_COMPANY: '--gongone-card-company',
  BRAN_CARD_COMPANY: '--bran-card-company',
  ROID_CARD_COMPANY: '--roid-card-company',
  DOBI_CARD_COMPANY: '--dobi-card-company',
  COLEN_CARD_COMPANY: '--colen-card-company',
  SUN_CARD_COMPANY: '--sun-card-company',
  UNSELECTED_COMPANY: `--unselected-company`,
};

export const CARD_COMPANIES = [
  { NAME: '포코 카드', COLOR: CARD_COMPANY_COLORS.POCO_CARD_COMPANY },
  { NAME: '준 카드', COLOR: CARD_COMPANY_COLORS.JUNE_CARD_COMPANY },
  { NAME: '공원 카드', COLOR: CARD_COMPANY_COLORS.GONGONE_CARD_COMPANY },
  { NAME: '브랜 카드', COLOR: CARD_COMPANY_COLORS.BRAN_CARD_COMPANY },
  { NAME: '로이드카드', COLOR: CARD_COMPANY_COLORS.ROID_CARD_COMPANY },
  { NAME: '도비 카드', COLOR: CARD_COMPANY_COLORS.DOBI_CARD_COMPANY },
  { NAME: '콜린 카드', COLOR: CARD_COMPANY_COLORS.COLEN_CARD_COMPANY },
  { NAME: '썬 카드', COLOR: CARD_COMPANY_COLORS.SUN_CARD_COMPANY },
];
