export interface CardProps {
  children: React.ReactNode,
  condensed?: boolean,
  additionalStyles?: string,
  link?: string
}

export interface BaseCardProps {
  children: React.ReactNode,
  condensed?: boolean,
  backgroundColor?: string,
  textColor?: string,
  hoverBackgroundColor?: string,
  hoverTextColor?: string,
  additionalStyles?: string,
  link?: string
}