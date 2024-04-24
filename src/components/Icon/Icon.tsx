import * as icons from '@assets/svg';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** 아이콘 타입 설정 */
  icon: IconType | string;
  className?: string;
};

const Icon = ({ icon, className }: IconProps) => {
  const SVGIcon = (icons as any)[icon] || icons['test'];
  if (!SVGIcon) {
    return null;
  }
  return <SVGIcon className={className} />;
};

export default Icon;
