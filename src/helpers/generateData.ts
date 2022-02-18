import { QuestionsResponse } from '../interfaces/apis/questions';
import { decodeEntities } from '../helpers/decodeEntity';

export const generateData = (questions:QuestionsResponse[]) => {

    const title = 'Correct answers';

    const rows = questions.map(({question, answers, indexCorrect}) => ({
        title: decodeEntities(question),
        content: decodeEntities(answers[indexCorrect])
    }))

    const styles = {
        // bgColor: 'white',
        titleTextColor: '#1f1e1ee1',
        // titleTextSize: '48px',
        rowTitleColor: '#1f1e1ee1',
        // rowTitleTextSize: 'medium',
        // rowContentColor: 'grey',
        rowContentTextSize: '16px',
        // rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '10px',
        // rowContentPaddingRight: '150px',
        arrowColor: "#1f1e1ee1",
        //transitionDuration: "1s",
        // timingFunc: "ease"
      }


    return {
        title,
        rows,
        styles
    }

}