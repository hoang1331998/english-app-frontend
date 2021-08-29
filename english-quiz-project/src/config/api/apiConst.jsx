const baseUrl = process.env.REACT_APP_BASE_API_URL

export const ApiUrl = {
    ListQuestionByExam: baseUrl + '/questions',
    ListExam: baseUrl + '/exams',
    getGame: baseUrl + '/games/getGame',
    finishGame: baseUrl + '/games/finishGame',
    login: baseUrl + '/users/authenticate'
}