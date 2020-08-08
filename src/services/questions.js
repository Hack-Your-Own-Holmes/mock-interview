import axios from "axios";

const URL = "https://ejm62k5d69.execute-api.us-east-1.amazonaws.com/dev/questions/all";

export const getQuestions = async () => {
    const {data} = await axios.get(URL);
    return data;
};
