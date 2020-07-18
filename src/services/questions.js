import axios from "axios";

const URL = "http://localhost:3001/questions";

export const getQuestions = async () => {
	const { data } = await axios.get(URL);
	return data;
};
