import React from 'react';
import PropsTypes from 'prop-types';

export default function LeaderboardItem({ item }) {
    return (
        <div className="leaderboard-item">
            <div className="leaderboard-item__user-info">
                <img src={item.user.avatar} alt={item.user.name} />
                <p>{item.user.name}</p>
            </div>
            <p className="leaderboard-item__score">{item.score}</p>
        </div>
    );
}

LeaderboardItem.propTypes = {
    item: PropsTypes.object.isRequired,
};