System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Warp10AnnotationQueryCtrl;
    return {
        setters: [],
        execute: function () {
            Warp10AnnotationQueryCtrl = /** @class */ (function () {
                function Warp10AnnotationQueryCtrl($scope, $injector) {
                    if (!this.annotation)
                        this.annotation = {};
                    if (!this.annotation.query)
                        this.annotation.query = '';
                    console.log('ANNOT', this);
                }
                Warp10AnnotationQueryCtrl.templateUrl = 'template/annotation.html';
                return Warp10AnnotationQueryCtrl;
            }());
            exports_1("default", Warp10AnnotationQueryCtrl);
        }
    };
});
