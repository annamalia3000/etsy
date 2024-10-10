import { Item } from '../Item/Item';
import { ItemData } from '../types';
import classes from './listing.module.css';

type ListingProps = {
    items: ItemData[];
}

export const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className={classes['item-list']}>
        {items.map((item) => (
            <Item 
              key={item.listing_id}
              item={item}
              />
        ))}
    </div>
    
  )
}
