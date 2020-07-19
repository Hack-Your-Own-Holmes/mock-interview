export const getQuestions = async () => {
	const { data } = await fetch("/questions");
	return data;
};
