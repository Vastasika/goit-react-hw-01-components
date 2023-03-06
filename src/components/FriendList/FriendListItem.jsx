import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FrendListItem = ({ avatar, name, isOnline })=> {
    return <li className={css.item}>
        <span className={`${css.status} ${
          isOnline ? css.statusOnlain : css.statusOflain
            }`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={ css.name}>{ name}</p>
    </li>
}

FrendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}