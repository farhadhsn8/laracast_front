import Axios from "../axios";

export let getLeaderboardsRequest = () => {
    return Axios.get(`users/leaderboards`)
};
