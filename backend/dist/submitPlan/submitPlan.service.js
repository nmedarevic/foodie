"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const availablePlans = [
    {
        name: 'Breakfast',
        id: 0,
        pricePerMeal: 10,
        itemImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    },
    {
        name: 'Elevensies',
        id: 1,
        pricePerMeal: 20,
        itemImage: 'https://images.unsplash.com/photo-1608634070674-2db08b533d3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    },
];
let PlansService = class PlansService {
    constructor() {
        this.plans = availablePlans;
    }
    findAll() {
        console.log(this.plans);
        return this.plans;
    }
};
PlansService = __decorate([
    common_1.Injectable()
], PlansService);
exports.PlansService = PlansService;
//# sourceMappingURL=submitPlan.service.js.map