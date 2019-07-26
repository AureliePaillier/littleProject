
export class ContractType {
    public id?: number; // ? signifie que c optionnel
    public label = '';    // ou public label: string; masis avc ts, label is undefined
}

export const contractData: ContractType[] = [
    { id:1, label: 'Interim' },
    { id:2, label: 'Independant' },
    { id:3, label: 'CDD' },
    { id:4, label: 'CDI' },
    { id:5, label: 'Stage' },
];