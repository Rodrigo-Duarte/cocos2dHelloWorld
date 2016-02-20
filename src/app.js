l = function(a) {
    console.log(a);
}
var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {

        this._super();
        var size = cc.winSize;

        var bearSprite = getBearSpriteFromCache();
        bearSprite.setPosition(100, size.height / 2);
        bearSprite.setScale(0.2);
        this.addChild(bearSprite, 1);

        var animateAction = new cc.Animate(getBearAnimation());
        bearSprite.runAction(new cc.RepeatForever(animateAction));

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

var getBearSpriteFromCache = function() {
    cc.spriteFrameCache.addSpriteFrames(res.Bear);
    return new cc.Sprite(cc.spriteFrameCache.getSpriteFrame('bear1.png'));
};
var getBearAnimation = function() {
    var frames = [];
    var delay = 0.1;
    for (var i = 1; i < 7; i++) {
        frames.push(
            new cc.AnimationFrame(cc.spriteFrameCache.getSpriteFrame('bear' + i + '.png'), delay, 'bear' + i)
        );
    };
    return new cc.Animation(frames, 1, 100);
}