"use strict";
// You can write more code here
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* START OF COMPILED CODE */
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this, "MainScene") || this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    MainScene.prototype.editorCreate = function () {
        // bg
        var bg = this.add.image(408, 368, "bg");
        bg.scaleX = 0.6;
        bg.scaleY = 0.6;
        // symbols_layer
        var symbols_layer = this.add.layer();
        // symbol11
        var symbol11 = this.add.sprite(215.0637664794922, 521.4500732421875, "symbols", "symbol_6.png");
        symbol11.scaleX = 0.5;
        symbol11.scaleY = 0.5;
        symbols_layer.add(symbol11);
        // symbol10
        var symbol10 = this.add.sprite(405.06378173828125, 521.4500732421875, "symbols", "symbol_1.png");
        symbol10.scaleX = 0.5;
        symbol10.scaleY = 0.5;
        symbols_layer.add(symbol10);
        // symbol9
        var symbol9 = this.add.sprite(595.0637817382812, 521.4500732421875, "symbols", "symbol_3.png");
        symbol9.scaleX = 0.5;
        symbol9.scaleY = 0.5;
        symbols_layer.add(symbol9);
        // symbol8
        var symbol8 = this.add.sprite(595, 392, "symbols", "symbol_3.png");
        symbol8.scaleX = 0.5;
        symbol8.scaleY = 0.5;
        symbols_layer.add(symbol8);
        // symbol7
        var symbol7 = this.add.sprite(405, 392, "symbols", "symbol_1.png");
        symbol7.scaleX = 0.5;
        symbol7.scaleY = 0.5;
        symbols_layer.add(symbol7);
        // symbol6
        var symbol6 = this.add.sprite(215, 392, "symbols", "symbol_6.png");
        symbol6.scaleX = 0.5;
        symbol6.scaleY = 0.5;
        symbols_layer.add(symbol6);
        // symbol5
        var symbol5 = this.add.sprite(595, 263, "symbols", "symbol_5.png");
        symbol5.scaleX = 0.5;
        symbol5.scaleY = 0.5;
        symbols_layer.add(symbol5);
        // symbol4
        var symbol4 = this.add.sprite(405, 263, "symbols", "symbol_4.png");
        symbol4.scaleX = 0.5;
        symbol4.scaleY = 0.5;
        symbols_layer.add(symbol4);
        // symbol3
        var symbol3 = this.add.sprite(215, 263, "symbols", "symbol_3.png");
        symbol3.scaleX = 0.5;
        symbol3.scaleY = 0.5;
        symbols_layer.add(symbol3);
        // symbol2
        var symbol2 = this.add.sprite(595, 135, "symbols", "symbol_2.png");
        symbol2.scaleX = 0.5;
        symbol2.scaleY = 0.5;
        symbols_layer.add(symbol2);
        // symbol1
        var symbol1 = this.add.sprite(405, 135, "symbols", "symbol_1.png");
        symbol1.scaleX = 0.5;
        symbol1.scaleY = 0.5;
        symbols_layer.add(symbol1);
        // symbol0
        var symbol0 = this.add.sprite(215, 135, "symbols", "symbol_0.png");
        symbol0.scaleX = 0.5;
        symbol0.scaleY = 0.5;
        symbols_layer.add(symbol0);
        this.bg = bg;
        this.symbol11 = symbol11;
        this.symbol10 = symbol10;
        this.symbol9 = symbol9;
        this.symbol8 = symbol8;
        this.symbol7 = symbol7;
        this.symbol6 = symbol6;
        this.symbol5 = symbol5;
        this.symbol4 = symbol4;
        this.symbol3 = symbol3;
        this.symbol2 = symbol2;
        this.symbol1 = symbol1;
        this.symbol0 = symbol0;
        this.events.emit("scene-awake");
    };
    /* START-USER-CODE */
    // Write your code here
    MainScene.prototype.symbolsArr = function () {
        return [this.symbol0, this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6, this.symbol7, this.symbol8, this.symbol9, this.symbol10, this.symbol11];
    };
    MainScene.prototype.preload = function () {
        this.load.pack("pack", './Assets/game_pack_sd.json');
    };
    MainScene.prototype.create = function () {
        this.editorCreate();
        this.game.events.emit("GameCreated");
    };
    return MainScene;
}(Phaser.Scene));
exports["default"] = MainScene;
/* END OF COMPILED CODE */
// You can write more code here
