import express from 'express';

export default (app: express.Application) => {
    app.get(
        '/feedback',
        require('./getFeedback').default
    );
    app.post(
        '/feedback/echo',
        require('./echoFeedback').default
    )
}