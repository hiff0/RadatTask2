import ApiResponseHandler from '../apiResponseHandler';
import { Request, Response, NextFunction } from 'express';
import { Feedback } from "../../../ts/types";
import FeedbackService from '../../../services/feedbackService';

export default async (req: Request, res: Response<Feedback>, next: NextFunction) => {
    try {
        const feedback = FeedbackService.getFeedback();
        await ApiResponseHandler.success(req, res, feedback);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
}
