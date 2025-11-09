export const BOARD_STATUS = {
  public: 'PUBLIC',
  private: 'PRIVATE',
} as const;

export type BoardStatus = (typeof BOARD_STATUS)[keyof typeof BOARD_STATUS];
