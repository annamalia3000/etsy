import classes from './item.module.css';
import { ItemData } from '../types';

type ItemProps = {
    item: ItemData;
}

export const Item: React.FC<ItemProps> = ({ item }) => {

    if (!item || !item.title || !item.MainImage) {
        return <div>Loading...</div>; 
    }
    const {  url, MainImage, title, currency_code, price, quantity } = item;

    const truncatedTitle = title.length > 50 ? `${title.slice(0, 50)}…` : title;

    const formattedPrice = (() => {
        const fixPrice = Number(price).toFixed(2);
        switch (currency_code) {
            case 'USD':
                return `$${fixPrice}`;
            case 'EUR':
                return `€${fixPrice}`;
            default:
                return `${fixPrice} ${currency_code}`;
        }
    })();

    const level = (() => {
        switch (true) {
            case (quantity > 20) :
                return 'level-high';
            case (quantity > 10):
                return 'level-medium';
            default:
                return 'level-low';
        }
    })();

  return (
    <div className={classes['item']}>
        <div className={classes['item-image']}>
            <a href={url}>
                <img src={MainImage.url_570xN} alt={title}/>
            </a>
        </div>
    <div className={classes['item-details']}>
      <p className={classes['item-title']}>{truncatedTitle}</p>
      <p className={classes['item-price']}>{formattedPrice}</p>
      <p className={`${classes['item-quantity']} ${level}`}>{quantity} left</p>
    </div>
  </div>
  )
}
