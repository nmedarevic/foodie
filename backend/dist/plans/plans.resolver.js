"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const plans_service_1 = require("./plans.service");
const graphql_2 = require("./../graphql");
const users_service_1 = require("../users/users.service");
let PlansResolver = class PlansResolver {
    constructor(plansService, usersService) {
        this.plansService = plansService;
        this.usersService = usersService;
    }
    async plans() {
        return this.plansService.findAll();
    }
    async submitPlan(plan) {
        const user = this.usersService.save(plan);
        return {
            response: user,
        };
    }
};
__decorate([
    graphql_1.Query('plans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansResolver.prototype, "plans", null);
__decorate([
    graphql_1.Mutation('submitPlan'),
    __param(0, graphql_1.Args('plan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.SubmitPlanInput]),
    __metadata("design:returntype", Promise)
], PlansResolver.prototype, "submitPlan", null);
PlansResolver = __decorate([
    graphql_1.Resolver('Plan'),
    __metadata("design:paramtypes", [plans_service_1.PlansService,
        users_service_1.UsersService])
], PlansResolver);
exports.PlansResolver = PlansResolver;
//# sourceMappingURL=plans.resolver.js.map