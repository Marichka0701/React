import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RMActions} from "../../redux/slices/RM.slice";
import {setCurrentPage} from '../../redux/slices/RM.slice'
import Episodes from "../Episodes/Episodes";

const RickAndMortyContainer = () => {
    // const dispatch = useDispatch();
    // const episodes = useSelector((state) => state.RM.episodes);
    //
    // // const [isEmpty, setIsEmpty] = useState(true);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const page = 1;
    //         await dispatch(setCurrentPage(page));
    //         await dispatch(RMActions.getAllEpisodes({page}));
    //         // setIsEmpty(false)
    //     }
    //     fetchData();
    // }, []);
    //
    // console.log(episodes)

    return (
        <div>
            {/*{*/}
            {/*    episodes.map(episode => <Episodes key={episode.id} episode={episode} /> )*/}
            {/*}*/}
        </div>
    );
};

export default RickAndMortyContainer;