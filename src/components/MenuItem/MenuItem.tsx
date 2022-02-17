import styles from './MenuItem.module.scss'

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: any
  children: string
}

export const MenuItem = ({icon, children}: MenuItemProps) => {
  return (
    <div className={styles.item}>
     {icon} {children}
    </div>
  );
}