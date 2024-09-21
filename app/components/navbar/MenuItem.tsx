'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
  classn?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  classn
}) => {
  return ( 
    <div 
      onClick={onClick} 
      className={`
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
        ${classn}
      `}
    >
      <h3>{label}</h3>
    </div>
   );
}
 
export default MenuItem;