import ApiResponseHandler from "../apiResponseHandler";
import { Request, Response, NextFunction } from 'express';
import FeedbackService from "../../../services/feedbackService";
import { EchoFeedback } from "../../../ts/types";

export default async (req: Request<{}, {}, { id: number, name: string, email: string, text: string }>, res: Response<EchoFeedback>, next: NextFunction) => {
    try {
        const feedback = FeedbackService.echo(req.body.id, req.body.name, req.body.email, req.body.text);
        await ApiResponseHandler.success(req, res, feedback);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}
