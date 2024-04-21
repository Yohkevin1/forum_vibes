import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToogleUpVoteThread, asyncToogleDownVoteThread } from '../states/threads/action';
import {populateLeaderboards} from '../states/leaderboards/action';
import ButtonAdd from '../components/buttonAdd';
import CategoriList from '../components/categoriList';
import ThreadList from '../components/threadList';
import LeaderboardItem from '../components/leaderboardItem';

export default function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const {
        threads = [],
        users = [],
        authUser,
        leaderboards = [],
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
        dispatch(populateLeaderboards());
    }, [dispatch]);

    const upVote = (id) => {
        dispatch(asyncToogleUpVoteThread(id));
    };
    const downVote = (id) => {
        dispatch(asyncToogleDownVoteThread(id));
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    const filteredThreads = selectedCategory ? threads.filter((thread) => thread.category === selectedCategory) : threads;

    const threadList = filteredThreads.map((thread) => ({
        ...thread,
        author: users.find((user) => user.id === thread.ownerId),
        authUser: authUser.id,
    }));

    return (
        <div style={{ marginTop: '65px', display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
            <div className="left-column">
                <div className="category">
                    <CategoriList threadList={threadList} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
                </div>
                <ThreadList threadList={threadList} upVote={upVote} downVote={downVote} />
            </div>
            <aside className="right-column">
                <div className="leaderboard">
                    <h3>Klasemen Pengguna Aktif</h3>
                    {leaderboards.map((item) => (
                        <LeaderboardItem key={item.user.id} item={item} />
                    ))}
                </div>
            </aside>
            <ButtonAdd />
        </div>
    );
}