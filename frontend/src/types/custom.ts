export interface AccordionDataType {
  icon: JSX.Element;
  title: string;
  type: string;
}
export interface RankDataType {
  lawId: number;
  rank: number;
  lawName: string;
}
export interface AQuestionType {
  id: number;
  summary: string;
  lawType: string;
  category: string;
}
export interface CategoryType {
  id: number;
  text: string;
  icon: string;
}
