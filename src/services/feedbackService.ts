import { Feedback, EchoFeedback } from "../ts/types";

export default class FeedbackService {
    static getFeedback(): Feedback {
        return {
            id: 1,
            name: 'Vlad',
            email: 'vlad@mail.ru',
            text: 'Good!'
        };
    }

    static echo(id: number, name: string, email: string, text: string): EchoFeedback {
        return {
            id,
            name,
            email,
            text,
            isEcho: true
        };
    }
}
