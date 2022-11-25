//------------------------------------------------------------|
//                  Example Message Types                     |
//------------------------------------------------------------/

export type ExampleMessage = {
    message: string,
    date: string
}

export type EchoMessage = {
    isEcho: boolean
} & ExampleMessage;

export type Feedback = {
    id: number,
    name: string,
    email: string,
    text: string
}

export type EchoFeedback = {
    isEcho: boolean
} & Feedback;

