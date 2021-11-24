export type Statistic = {
  users: number;
  paid_course: number;
  free_course: number;
};

export interface StatisticUsecase {
  getStatistic(): Promise<Statistic>;
}
