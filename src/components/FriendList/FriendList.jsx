import PropTypes from 'prop-types';
import { FrendListItem } from './FriendListItem'
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <FrendListItem
                key={id}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
            />
        )}
    </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};