import axios from "axios";

const URL = `http://localhost:${process.env.PORT}/questions`;

export const getQuestions = async () => {
    const {data} = await axios.get(URL);
    return data;
};
