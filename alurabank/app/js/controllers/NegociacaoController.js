System.register(["../views/NegociacoesView", "../views/MensagemView", "../models/Negociacoes", "../models/Negociacao", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, MensagemView_1, Negociacoes_1, Negociacao_1, index_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
            };
            __decorate([
                index_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_1.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
