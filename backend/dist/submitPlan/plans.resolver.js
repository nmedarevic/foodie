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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const plans_service_1 = require("./plans.service");
let PlansResolver = class PlansResolver {
    constructor(plansService) {
        this.plansService = plansService;
    }
    async plans() {
        return this.plansService.findAll();
    }
};
__decorate([
    graphql_1.Query('plans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansResolver.prototype, "plans", null);
PlansResolver = __decorate([
    graphql_1.Resolver('Plan'),
    __metadata("design:paramtypes", [typeof (_a = typeof plans_service_1.PlansService !== "undefined" && plans_service_1.PlansService) === "function" ? _a : Object])
], PlansResolver);
exports.PlansResolver = PlansResolver;
//# sourceMappingURL=plans.resolver.js.map