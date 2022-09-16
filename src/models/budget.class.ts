// export class Budget {
//     public date: any;
//     public incomeCategory: string;
//     public income: number;
//     public livingCategory: string;
//     public living: number;
//     public shoppingCategory: string;
//     public shopping: number;
//     public ridesCategory: string;
//     public rides: number;
//     public entertainmentCategory: string;
//     public entertainment: number;
//     public otherCategory: string;
//     public other: number;
//     public description: string;

//     constructor(obj?: any) {
//         this.date = obj ? obj.date : '';
//         this.incomeCategory = obj ? obj.incomeCategory : '';
//         this.income = obj ? obj.income : '';
//         this.livingCategory = obj ? obj.livingCategory : '';
//         this.living = obj ? obj.living : '';
//         this.shoppingCategory = obj ? obj.shoppingCategory : '';
//         this.shopping = obj ? obj.shopping : '';
//         this.ridesCategory = obj ? obj.ridesCategory : '';
//         this.rides = obj ? obj.rides : '';
//         this.entertainmentCategory = obj ? obj.entertainmentCategory : '';
//         this.entertainment = obj ? obj.entertainment : '';
//         this.otherCategory = obj ? obj.otherCategory : '';
//         this.other = obj ? obj.other : '';
//         this.description = obj ? obj.description : '';
//     }

//     toJSON() {
//         return {
//             date: this.date.toLocaleDateString(),
//             incomeCategory: this.incomeCategory,
//             income: this.income,
//             livingCategory: this.livingCategory,
//             living: this.living,
//             shoppingCategory: this.shoppingCategory,
//             shopping: this.shopping,
//             ridesCategory: this.ridesCategory,
//             rides: this.rides,
//             entertainmentCategory: this.entertainmentCategory,
//             entertainment: this.entertainment,
//             otherCategory: this.otherCategory,
//             other: this.other,
//             description: this.description
//         }
//     }

// }