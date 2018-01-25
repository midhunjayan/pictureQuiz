import { Option } from './options';

export interface Question {
    qNo: number;
    name: string;
    questionType: number;
    options: Option[];
    answer?: string;
    userAnswer?: string;
}
