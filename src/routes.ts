import {Request, Response} from 'express';
import CreatUser from './services/CreateUser';

export function helouWorld(require: Request, response: Response){
    const user = CreatUser({
        name: 'Iago Caires',
        email: 'iagoceires@teste.com',
        password: '12345',
        techs:[
            'ReactJS',
            'React Native',
            {title: 'Node.js', experience: 100}
        ]
    });

    return response.json(user);
}