import { ContractType } from './contract-type.model';

export class Job {
    id?: number;
    title = '';
    company = '';
    city = '';
    zipcode = '';
    description = '';
    contractType: ContractType = new ContractType();
    startDate: Date = new Date();
    publishedDate: Date = new Date();
}