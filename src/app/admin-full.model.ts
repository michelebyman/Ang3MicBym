// sets a model for a full new user
export class AdminFull {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string
    ) { }
}